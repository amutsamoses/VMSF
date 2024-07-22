import React, { useState, useEffect } from "react";
import {
  Typography,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  IconButton,
} from "@mui/material";
import { vehiclesApi } from "../../../redux/vehicleAPI";
import { TVehicle } from "../../../types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { cloudinaryConfig } from "../../../cloudinary/cloudinary.config";
import axios from "axios";

interface FormDataState {
  manufacturer: string;
  model: string;
  year: string; // Changed to string for input handling
  fuel_type: string;
  transmission: string;
  rental_rate: string; // Changed to string for input handling
  availability: boolean;
  engine_capacity: string;
  seating_capacity: string; // Changed to string for input handling
  color: string;
  features: string;
  image_url: string;
}

const initialFormData: FormDataState = {
  manufacturer: "",
  model: "",
  year: "",
  fuel_type: "",
  transmission: "",
  rental_rate: "",
  availability: true,
  engine_capacity: "",
  seating_capacity: "",
  color: "",
  features: "",
  image_url: "",
};

const ManageVehicles = () => {
  const { data: vehicles, refetch } = vehiclesApi.useGetVehiclesQuery();
  const [createVehicle] = vehiclesApi.useCreateVehicleMutation();
  const [updateVehicle] = vehiclesApi.useUpdateVehicleMutation();
  const [deleteVehicle] = vehiclesApi.useDeleteVehicleMutation();

  const [open, setOpen] = useState(false);
  const [vehicleData, setVehicleData] = useState<Partial<TVehicle>>({});
  const [isEditing, setIsEditing] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<FormDataState>(initialFormData);

  useEffect(() => {
    if (isEditing && vehicleData) {
      setFormData({
        manufacturer: vehicleData.manufacturer || "",
        model: vehicleData.model || "",
        year: vehicleData.year ? vehicleData.year.toString() : "",
        fuel_type: vehicleData.fuel_type || "",
        transmission: vehicleData.transmission || "",
        rental_rate: vehicleData.rental_rate
          ? vehicleData.rental_rate.toString()
          : "",
        availability: vehicleData.availability ?? true,
        engine_capacity: vehicleData.engine_capacity || "",
        seating_capacity: vehicleData.seating_capacity
          ? vehicleData.seating_capacity.toString()
          : "",
        color: vehicleData.color || "",
        features: Array.isArray(vehicleData.features)
          ? vehicleData.features.join(", ")
          : vehicleData.features || "",
        image_url: vehicleData.image_url || "",
      });
    } else {
      setFormData(initialFormData);
    }
  }, [isEditing, vehicleData]);

  const handleClickOpen = () => {
    setIsEditing(false);
    setVehicleData({});
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement;
    if (type === "file" && files) {
      setImageFile(files[0]);
    } else if (type === "checkbox") {
      setFormData((prevData) => ({ ...prevData, [name]: checked }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    const requiredFields = [
      "manufacturer",
      "model",
      "year",
      "fuel_type",
      "transmission",
      "engine_capacity",
      "seating_capacity",
      "color",
      "features",
    ];
    for (const field of requiredFields) {
      if (!formData[field as keyof FormDataState]) {
        alert(`${field} is required`);
        return;
      }
    }

    let imageUrl = formData.image_url;

    // Upload image to Cloudinary if a new image file is selected
    if (imageFile) {
      const uploadFormData = new FormData();
      uploadFormData.append("file", imageFile);
      uploadFormData.append("upload_preset", cloudinaryConfig.uploadPreset);

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`,
          uploadFormData
        );
        imageUrl = response.data.secure_url;
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        return;
      }
    }

    const vehicleDataWithImage: TVehicle = {
      ...formData,
      year: parseInt(formData.year, 10), // Convert to number
      rental_rate: parseFloat(formData.rental_rate), // Convert to number
      seating_capacity: parseInt(formData.seating_capacity, 10), // Convert to number
      features: formData.features.split(",").map((feature) => feature.trim()), // Convert to array
      image_url: imageUrl,
    } as unknown as TVehicle;

    if (isEditing && vehicleData.vehicle_id) {
      await updateVehicle({
        id: vehicleData.vehicle_id,
        updated: vehicleDataWithImage,
      });
    } else {
      await createVehicle(vehicleDataWithImage).unwrap();
    }

    refetch();
    handleClose();
  };

  const handleEdit = (vehicle: TVehicle) => {
    setVehicleData(vehicle);
    setIsEditing(true);
    setOpen(true);
  };

  const handleDelete = async (id: number) => {
    await deleteVehicle(id);
    refetch();
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={11} sx={{ mx: -17 }}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h5"
            style={{
              padding: "2rem",
              width: "100%",
              textAlign: "center",
              textDecoration: "bold",
              marginLeft: "20px",
              marginRight: "auto",
            }}
          >
            Manage Vehicles
          </Typography>
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Add Vehicle
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12} sx={{ mx: -20 }}>
        <Paper
          sx={{
            paddingLeft: "23px",
            display: "flex",
            flexDirection: "column",
            marginRight: "auto",
          }}
        >
          <Typography variant="h5">Vehicle List</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Manufacturer</TableCell>
                <TableCell>Model</TableCell>
                <TableCell>Year</TableCell>
                <TableCell>Fuel Type</TableCell>
                <TableCell>Engine Capacity</TableCell>
                <TableCell>Transmission</TableCell>
                <TableCell>Seating Capacity</TableCell>
                <TableCell>Color</TableCell>
                <TableCell>Features</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicles?.map((vehicle) => (
                <TableRow key={vehicle.vehicle_id}>
                  <TableCell>{vehicle.manufacturer}</TableCell>
                  <TableCell>{vehicle.model}</TableCell>
                  <TableCell>{vehicle.year}</TableCell>
                  <TableCell>{vehicle.fuel_type}</TableCell>
                  <TableCell>{vehicle.engine_capacity}</TableCell>
                  <TableCell>{vehicle.transmission}</TableCell>
                  <TableCell>{vehicle.seating_capacity}</TableCell>
                  <TableCell>{vehicle.color}</TableCell>
                  <TableCell>{vehicle.features?.join(", ")}</TableCell>
                  <TableCell>
                    <img
                      src={vehicle.image_url}
                      alt={vehicle.manufacturer}
                      style={{ width: 50, height: 50 }}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(vehicle)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => handleDelete(vehicle.vehicle_id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? "Edit Vehicle" : "Add Vehicle"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the vehicle details below.
          </DialogContentText>
          <TextField
            margin="dense"
            name="manufacturer"
            label="Manufacturer"
            fullWidth
            value={formData.manufacturer}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="model"
            label="Model"
            fullWidth
            value={formData.model}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="year"
            label="Year"
            fullWidth
            type="number"
            value={formData.year}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="fuel_type"
            label="Fuel Type"
            fullWidth
            value={formData.fuel_type}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="transmission"
            label="Transmission"
            fullWidth
            value={formData.transmission}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="rental_rate"
            label="Rental Rate"
            fullWidth
            type="number"
            value={formData.rental_rate}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="availability"
            label="Availability"
            fullWidth
            value={formData.availability}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="engine_capacity"
            label="Engine Capacity"
            fullWidth
            value={formData.engine_capacity}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="seating_capacity"
            label="Seating Capacity"
            fullWidth
            type="number"
            value={formData.seating_capacity}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="color"
            label="Color"
            fullWidth
            value={formData.color}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="features"
            label="Features"
            fullWidth
            value={formData.features}
            onChange={handleChange}
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            style={{ marginTop: "10px", marginBottom: "6px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {isEditing ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default ManageVehicles;
