import {
  Typography,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Divider,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import { fleetApi } from "../../../redux/fleetAPI";
import { TFleet } from "../../../types";
import { ClipLoader } from "react-spinners";

const FleetManagement = () => {
  const [fleetData, setFleetData] = useState<TFleet[]>([]);
  const [selectedFleet, setSelectedFleet] = useState<TFleet | null>(null);
  const [open, setOpen] = useState(false);
  const [isNew, setIsNew] = useState(false);

  const { data: fleet, error, isLoading } = fleetApi.useGetFleetsQuery();
  const [createFleet] = fleetApi.useCreateFleetMutation();
  const [updateFleet] = fleetApi.useUpdateFleetMutation();
  const [deleteFleet] = fleetApi.useDeleteFleetMutation();

  useEffect(() => {
    if (fleet) {
      setFleetData(fleet);
    }
  }, [fleet]);

  const handleOpen = (fleet?: TFleet) => {
    if (fleet) {
      setSelectedFleet(fleet);
      setIsNew(false);
    } else {
      setSelectedFleet({
        fleet_id: 0,
        acquisition_date: "",
        depreciation_rate: 0,
        current_value: 0,
        maintenance_cost: 0,
        status: "",
        vehicle_id: 0,
        acquisition_price: 0,
      });
      setIsNew(true);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    if (selectedFleet) {
      if (isNew) {
        await createFleet(selectedFleet);
      } else {
        await updateFleet({
          id: selectedFleet.fleet_id,
          updated: selectedFleet,
        });
      }
      setOpen(false);
    }
  };

  const handleDelete = async (fleet_id: number) => {
    await deleteFleet(fleet_id);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedFleet) {
      setSelectedFleet({
        ...selectedFleet,
        [e.target.name]: e.target.value,
      });
    }
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#f00" size={150} />
      </div>
    );
  if (error) return <div>Error: Error Fetching Fleet</div>;

  return (
    <Grid container spacing={3} className="p-4">
      <Grid item xs={12}>
        <Paper className="p-4 flex flex-col">
          <Typography variant="h6" className="text-xl font-bold mb-4">
            Fleet Management
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleOpen()}
          >
            Add New Fleet
          </Button>

          {/* Vehicle Details */}
          <Typography
            variant="subtitle1"
            className="text-lg font-semibold mb-2"
          >
            Vehicle Details
          </Typography>

          <Divider className="my-4" />

          {/* Acquisition and Depreciation */}
          <Typography
            variant="subtitle1"
            className="text-lg font-semibold mb-2"
          >
            Fleet Details
          </Typography>
          <Table>
            <TableHead className="bg-gray-200">
              <TableRow>
                <TableCell>Acquisition Date</TableCell>
                <TableCell>Depreciation Rate (%)</TableCell>
                <TableCell>Current Value ($)</TableCell>
                <TableCell>Maintenance Cost ($)</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fleetData.map((fleet: TFleet) => (
                <TableRow key={fleet.fleet_id}>
                  <TableCell>{fleet.acquisition_date}</TableCell>
                  <TableCell>{fleet.depreciation_rate.toString()}</TableCell>
                  <TableCell>{fleet.current_value}</TableCell>
                  <TableCell>{fleet.maintenance_cost}</TableCell>
                  <TableCell>{fleet.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleOpen(fleet)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDelete(fleet.fleet_id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>

      {/* Dialog for Editing/Creating Fleet */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {isNew ? "Add New Fleet" : "Edit Fleet Details"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {isNew
              ? "Enter the details of the new fleet."
              : "Edit the details of the fleet and save the changes."}
          </DialogContentText>
          {selectedFleet && (
            <div className="flex flex-col gap-2">
              <Divider className="my-4" />
              <TextField
                margin="dense"
                label="Acquisition Date"
                type="date"
                fullWidth
                variant="outlined"
                name="acquisition_date"
                value={selectedFleet.acquisition_date}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                label="Depreciation Rate (%)"
                type="number"
                fullWidth
                variant="outlined"
                name="depreciation_rate"
                value={selectedFleet.depreciation_rate}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                label="Current Value ($)"
                type="number"
                fullWidth
                variant="outlined"
                name="current_value"
                value={selectedFleet.current_value}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                label="Maintenance Cost ($)"
                type="number"
                fullWidth
                variant="outlined"
                name="maintenance_cost"
                value={selectedFleet.maintenance_cost}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                label="Status"
                type="text"
                fullWidth
                variant="outlined"
                name="status"
                value={selectedFleet.status}
                onChange={handleInputChange}
              />
            </div>
          )}
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

export default FleetManagement;
