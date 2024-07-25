import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { usersApi } from "../../../redux/usersAPI";
import { bookingsApi } from "../../../redux/bookingAPI";
import { ClipLoader } from "react-spinners";

const Overview: React.FC = () => {
  const {
    data: bookingsData,
    error: bookingsError,
    isLoading: bookingsLoading,
  } = bookingsApi.useGetBookingsQuery();
  const {
    data: usersData,
    error: usersError,
    isLoading: usersLoading,
  } = usersApi.useGetUsersQuery();

  if (bookingsLoading || usersLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader size={50} color="#123abc" />
      </div>
    );
  }

  if (bookingsError || usersError) {
    return (
      <div className="flex justify-center items-center h-screen text-red-600">
        <p>Error fetching data</p>
      </div>
    );
  }

  const totalBookings = bookingsData ? bookingsData.length : 0;
  const totalRevenue = bookingsData
    ? bookingsData.reduce(
        (sum, booking) => sum + (Number(booking.total_amount) || 0),
        0
      )
    : 0;
  const totalUsers = usersData ? usersData.length : 0;

  const chartData =
    bookingsData?.map((booking, index) => ({
      name: `Month ${index + 1}`,
      bookings: 1,
      revenue: Number(booking.total_amount) || 0,
    })) || [];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Total Bookings</h2>
          <p className="text-3xl">{totalBookings}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Total Revenue</h2>
          <p className="text-3xl">${totalRevenue}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Total Users</h2>
          <p className="text-3xl">{totalUsers}</p>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">
          Revenue & Bookings Over Time
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
            <Line type="monotone" dataKey="bookings" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Overview;
