import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface CarCardProps {
  vehicle_id: number;
  vehicle_image: string;
  rental_rate: number;
  availability: boolean;
  vehicleSpec: {
    manufacturer: string;
    model: string;
    year: number;
    fuel_type: string;
    engine_capacity: string;
    transmission: string;
    seating_capacity: number;
    color: string;
    features: string;
  };
  onDelete: () => void;
  onUpdate: () => void;
}

const CarCard: React.FC<CarCardProps> = ({
  vehicle_image,
  rental_rate,
  availability,
  vehicleSpec,
  onDelete,
  onUpdate,
}) => {
  return (
    <Card className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
      <CardMedia
        component="img"
        height="140"
        image={vehicle_image}
        alt={`${vehicleSpec?.manufacturer} ${vehicleSpec?.model}`}
      />
      <CardContent className="flex-grow">
        <Typography variant="h6" component="div">
          {vehicleSpec?.manufacturer} {vehicleSpec?.model} ({vehicleSpec?.year})
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {vehicleSpec?.fuel_type} - {vehicleSpec?.engine_capacity} -{" "}
          {vehicleSpec?.transmission}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Seating Capacity: {vehicleSpec?.seating_capacity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Color: {vehicleSpec?.color}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Features: {vehicleSpec?.features}
        </Typography>
        <Typography variant="body1" className="mt-2">
          Rental Rate: ${rental_rate}
        </Typography>
        <Typography
          variant="body2"
          color={availability ? "green" : "red"}
          className="mt-1"
        >
          {availability ? "Available" : "Not Available"}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-between">
        <Button
          variant="contained"
          color="primary"
          startIcon={<EditIcon />}
          onClick={onUpdate}
        >
          Update
        </Button>
        <IconButton color="secondary" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CarCard;
