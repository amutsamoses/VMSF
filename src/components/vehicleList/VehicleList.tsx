import React, { useState } from "react";
import { vehiclesApi } from "../../redux/vehicleAPI";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { TVehicle } from "../../types";
import {
  Card,
  Button,
  Tooltip,
  Container,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import "./vehiclelist.scss";

const VehicleList: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [filterManufacturer, setFilterManufacturer] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const [filterColor, setFilterColor] = useState("");

  const {
    data: vehicles,
    error,
    isLoading,
  } = vehiclesApi.useGetVehiclesQuery();

  const handleRentNow = (vehicleId: string) => {
    navigate(`/booking/${vehicleId}`);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterToggle = () => {
    setFiltersVisible(!filtersVisible);
  };

  const filteredVehicles = vehicles?.filter((vehicle: TVehicle | undefined) => {
    if (!vehicle || !vehicle.vehicleSpec) {
      return false;
    }

    return (
      (!searchTerm ||
        vehicle.vehicleSpec.manufacturer
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) &&
      (!filterManufacturer ||
        vehicle.vehicleSpec.manufacturer === filterManufacturer) &&
      (!filterYear || vehicle.vehicleSpec.year === parseInt(filterYear)) &&
      (!filterColor || vehicle.vehicleSpec.color === filterColor)
    );
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#f00" size={150} />
      </div>
    );
  if (error) return <div>Error: Error Fetching</div>;

  return (
    <Container style={{ backgroundColor: "#dcdcdc", width: "100vw" }}>
      <Typography
        variant="h3"
        style={{ paddingTop: "30px", color: "black" }}
        gutterBottom
      >
        The best of the best
      </Typography>
      <div className="header-buttons">
        <Button
          style={{
            marginLeft: "15px",
            fontFamily: "Poppins",
            fontWeight: "bold",
          }}
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          Home
        </Button>
        <Button
          style={{
            marginLeft: "15px",
            fontFamily: "Poppins",
            fontWeight: "bold",
          }}
          variant="contained"
          color="primary"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </Button>
        <TextField
          style={{
            width: "300px",
            backgroundColor: "white",
            borderRadius: "20px",
          }}
          label="Search for a car"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        <Button
          style={{
            marginLeft: "15px",
            fontFamily: "Poppins",
            fontWeight: "bold",
          }}
          variant="contained"
          color="secondary"
          onClick={handleFilterToggle}
        >
          Filter
        </Button>
      </div>
      {filtersVisible && (
        <div className="filters">
          <FormControl
            style={{ backgroundColor: "white", borderRadius: "20px" }}
            fullWidth
          >
            <InputLabel style={{ color: "black" }}>Manufacturer</InputLabel>
            <Select
              value={filterManufacturer}
              onChange={(e) => setFilterManufacturer(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Toyota">Toyota</MenuItem>
              <MenuItem value="Honda">Honda</MenuItem>
              <MenuItem value="Ford">Ford</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            style={{ backgroundColor: "white", borderRadius: "20px" }}
            fullWidth
          >
            <InputLabel>Year</InputLabel>
            <Select
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="2022">2022</MenuItem>
              <MenuItem value="2021">2021</MenuItem>
              <MenuItem value="2020">2020</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            style={{ backgroundColor: "white", borderRadius: "20px" }}
            fullWidth
          >
            <InputLabel>Color</InputLabel>
            <Select
              value={filterColor}
              onChange={(e) => setFilterColor(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Red">Red</MenuItem>
              <MenuItem value="Blue">Blue</MenuItem>
              <MenuItem value="Black">Black</MenuItem>
            </Select>
          </FormControl>
        </div>
      )}
      <Grid container spacing={4}>
        {filteredVehicles?.map((vehicle: TVehicle) => {
          if (!vehicle || !vehicle.vehicleSpec) {
            return null;
          }
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={vehicle.vehicle_id}>
              <Card className="vehicle-card">
                <img
                  src={vehicle.vehicle_image}
                  alt={vehicle.vehicleSpec.manufacturer}
                  className="vehicle-image"
                />
                <div className="vehicle-details">
                  <Typography variant="h6">
                    {vehicle.vehicleSpec.manufacturer}
                  </Typography>
                  <Typography variant="body1">
                    {vehicle.vehicleSpec.model}
                  </Typography>
                  <Typography variant="body2">
                    Year: {vehicle.vehicleSpec.year}
                  </Typography>
                  <Typography variant="body2">
                    Rate: ${vehicle.rental_rate}/day
                  </Typography>
                  <Typography variant="body2">
                    Availability:{" "}
                    {vehicle.availability ? "Available" : "Unavailable"}
                  </Typography>
                  <div className="vehicle-actions">
                    <Button
                      style={{
                        height: "50px",
                        width: "60px",
                        padding: "10px",
                        marginRight: "15px",
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                      }}
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        handleRentNow(vehicle.vehicle_id.toString())
                      }
                    >
                      Rent Now
                    </Button>
                    <Tooltip title={JSON.stringify(vehicle)}>
                      <Button
                        style={{
                          height: "50px",
                          padding: "10px",
                          marginRight: "15px",
                          fontFamily: "Poppins",
                          fontWeight: "bold",
                        }}
                        variant="outlined"
                        color="secondary"
                      >
                        Show Details
                      </Button>
                    </Tooltip>
                  </div>
                </div>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default VehicleList;
