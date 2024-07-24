import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/app/store";
import { TVehicle, TLocation } from "../../types";
import { bookingsApi } from "../../redux/bookingAPI";
import { locationsApi } from "../../redux/locationAPI";
import { paymentsApi } from "../../redux/paymentAPI";
import { ClipLoader } from "react-spinners";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Pf07RF7Q4rxDfq4EGqptzX11otnnCrpgzWvpm0YJxQAWbuLW8a60YaVn16SVfFwT4luRHbNBp6qwwQYkEOe2MYi006R1GGwy5"
);

interface BookingFormProps {
  vehicle: TVehicle;
}

const BookingForm: React.FC<BookingFormProps> = ({ vehicle }) => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [locationId, setLocationId] = useState<number | undefined>(undefined);

  const user = useSelector((state: RootState) => state.auth.user);

  const { data: locations } = locationsApi.useGetLocationsQuery();
  const [addBooking, { isLoading: isLoadingBooking }] =
    bookingsApi.useCreateBookingMutation();
  const [createPayment] = paymentsApi.useCreatePaymentMutation();
  const [updateStatus] = bookingsApi.useUpdateBookingMutation();
  const [isPaymentLoading, setIsPaymentLoading] = useState<number | null>(null);

  const handleBooking = async () => {
    if (!startDate || !endDate || !locationId || !user || !vehicle) {
      toast.error("Please fill in all fields.");
      return;
    }

    const start = dayjs(startDate);
    const end = dayjs(endDate);
    const rentalDays = end.diff(start, "day");

    if (rentalDays <= 0) {
      toast.error("End date must be after start date");
      return;
    }

    const totalAmount = rentalDays * vehicle.rental_rate;

    const bookingData = {
      user_id: user.user_id,
      vehicle_id: vehicle.vehicle_id,
      location_id: locationId,
      booking_date: startDate,
      return_date: endDate,
      total_amount: totalAmount,
    };

    console.log("Booking Data:", bookingData);

    try {
      const newBooking = await addBooking(bookingData).unwrap();
      toast.success("Booking created successfully");

      // Initiate payment
      handleMakePayment(newBooking.booking_id, totalAmount);
    } catch (error: any) {
      console.error("Error creating booking:", error);
      const errorMessage = error.data?.error || "Error creating booking";
      toast.error(errorMessage);
    }
  };

  const handleMakePayment = async (bookingId: number, amount: number) => {
    setIsPaymentLoading(bookingId);
    try {
      const res = await createPayment({
        booking_id: bookingId,
        amount: amount,
      }).unwrap();
      toast.success("Payment initiated successfully");
      console.log("Payment response:", res);
      if (res.url) {
        console.log("Redirecting to Stripe checkout URL:", res.url);
        window.location.href = res.url; // Redirect to the Stripe checkout URL
      } else {
        const stripe = await stripePromise;
        if (stripe && res.transaction_id) {
          console.log(
            "Redirecting to checkout with session ID:",
            res.booking_id
          );
          const { error } = await stripe.redirectToCheckout({
            sessionId: res.transaction_id,
          });
          if (error) {
            console.error("Error redirecting to checkout:", error);
            toast.error("Error redirecting to checkout");
          } else {
            await updateStatus({
              booking_id: bookingId,
              booking_status: "Completed",
            }).unwrap();
          }
        }
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
      toast.error("Error initiating payment");

      // If payment fails, update booking status to "Cancelled"
      await updateStatus({
        booking_id: bookingId,
        booking_status: "Cancelled",
      }).unwrap();
    } finally {
      setIsPaymentLoading(null);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Book Vehicle</h2>
      <div className="mb-4">
        <label className="block text-gray-500 text-sm font-bold mb-2">
          Start Date
        </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          End Date
        </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Location
        </label>
        <select
          value={locationId}
          onChange={(e) => setLocationId(Number(e.target.value))}
          className="block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select a location</option>
          {locations?.map((location: TLocation) => (
            <option key={location.location_id} value={location.location_id}>
              {location.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Vehicle Name
        </label>
        <div className="block w-full p-3 rounded-md border-gray-300 shadow-sm bg-gray-100">
          {vehicle.vehicleSpec.manufacturer} {vehicle.vehicleSpec.model}
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Rental Rate
        </label>
        <div className="block w-full p-3 rounded-md border-gray-300 shadow-sm bg-gray-100">
          ${vehicle.rental_rate} per day
        </div>
      </div>
      <button
        onClick={handleBooking}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-md shadow-md focus:outline-none focus:shadow-outline"
        disabled={isLoadingBooking || isPaymentLoading !== null}
      >
        {isLoadingBooking || isPaymentLoading !== null ? (
          <div className="flex items-center justify-center">
            <ClipLoader size={24} color="white" />
            <span> Processing...</span>
          </div>
        ) : (
          "Confirm Booking"
        )}
      </button>
    </div>
  );
};

export default BookingForm;
