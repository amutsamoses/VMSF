// BookingForm.tsx
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { locationsApi } from "../../redux/locationAPI";
import { paymentsApi } from "../../redux/paymentAPI";
import { bookingsApi } from "../../redux/bookingAPI";

const BookingForm: React.FC = () => {
  const { data: locations } = locationsApi.useGetLocationsQuery();
  const [createPayment] = paymentsApi.useCreatePaymentMutation();
  const [createBooking] = bookingsApi.useCreateBookingMutation();

  const [vehicleName, setVehicleName] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [location, setLocation] = useState("");
  const [branches, setBranches] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const bookingData = {
      vehicle_id: 1, // Replace with actual vehicle id
      user_id: 1, // Replace with actual user id
      booking_date: bookingDate,
      return_date: returnDate,
      total_amount: 100, // Replace with actual amount
      location_id: parseInt(location),
      booking_status: ["pending", "payment"] as [string, string], // Convert to tuple
    };

    const bookingResponse = await createBooking(bookingData).unwrap();

    if (bookingResponse) {
      const paymentData = {
        booking_id: bookingResponse.booking_id,
        total_amount: bookingResponse.total_amount,
        payment_status: "pending",
        payment_date: new Date().toISOString(),
        payment_method: "card", // Replace with actual method
        transaction_id: "txn_1234567890", // Replace with actual transaction id
      };

      await createPayment(paymentData);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 3 }}
      className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md"
    >
      <FormControl fullWidth margin="normal">
        <TextField
          label="Vehicle Name"
          variant="outlined"
          value={vehicleName}
          onChange={(e) => setVehicleName(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Booking Date"
          type="date"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Return Date"
          type="date"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel id="location-label">Location</InputLabel>
        <Select
          labelId="location-label"
          value={location}
          onChange={(e) => setLocation(e.target.value as string)}
          variant="outlined"
        >
          {locations?.map((loc) => (
            <MenuItem
              key={loc.location_id as React.Key}
              value={loc.location_id}
            >
              {loc.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Branches"
          variant="outlined"
          value={branches}
          onChange={(e) => setBranches(e.target.value)}
        />
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="w-full mt-4"
      >
        Book Now
      </Button>
    </Box>
  );
};

export default BookingForm;
