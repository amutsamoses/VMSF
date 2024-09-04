import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Paper,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { locationsApi } from "../../../redux/locationAPI";
import { TLocation } from "../../../types";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const LocationBranches = () => {
  const [locations, setLocations] = useState<TLocation[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<TLocation | null>(
    null
  );
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [editMode, setEditMode] = useState(false);

  const {
    data: locationsData,
    error,
    isLoading,
  } = locationsApi.useGetLocationsQuery();
  const [createLocation] = locationsApi.useCreateLocationMutation();
  const [updateLocation] = locationsApi.useUpdateLocationMutation();
  const [deleteLocation] = locationsApi.useDeleteLocationMutation();

  useEffect(() => {
    if (locationsData) {
      setLocations(locationsData);
    }
  }, [locationsData]);

  const handleOpen = (location: TLocation | null = null) => {
    if (location) {
      setSelectedLocation(location);
      setName(location.name);
      setAddress(location.address);
      setEditMode(true);
    } else {
      setSelectedLocation(null);
      setName("");
      setAddress("");
      setEditMode(false);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    if (editMode && selectedLocation) {
      await updateLocation({
        ...selectedLocation,
        name,
        address,
        id: 0,
        updated: undefined,
      });
    } else {
      await createLocation({ name, address });
    }
    setOpen(false);
    toast.success("Successful");
  };

  const handleDelete = async (locationId: number) => {
    await deleteLocation(locationId);
    setLocations(
      locations.filter((location) => location.location_id !== locationId)
    );
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#f00" size={150} />
      </div>
    );
  if (error) return <div>Error: Error Fetching Locations</div>;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className="p-6 flex flex-col gap-4">
          <h2 className="text-3xl font-bold mb-4">
            Manage Locations and Branches
          </h2>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleOpen()}
          >
            Add New Location
          </Button>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {locations.map((location) => (
              <div
                key={location.location_id}
                className="p-4 border rounded-lg shadow-md flex flex-col justify-between"
              >
                <div>
                  <p className="text-lg font-semibold">{location.name}</p>
                  <p className="text-sm text-gray-500">{location.address}</p>
                </div>
                <div className="flex justify-between mt-4">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpen(location)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(location.location_id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Paper>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {editMode ? "Edit Location" : "Add New Location"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {editMode
              ? "Update the details of the location."
              : "Enter the details for the new location."}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Address"
            type="text"
            fullWidth
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default LocationBranches;
