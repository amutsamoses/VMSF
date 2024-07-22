import { Typography, Paper, Grid } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", bookings: 4000, revenue: 2400, amt: 2400 },
  { name: "February", bookings: 3000, revenue: 1398, amt: 2210 },
  { name: "March", bookings: 2000, revenue: 9800, amt: 2290 },
  { name: "April", bookings: 2780, revenue: 3908, amt: 2000 },
  { name: "May", bookings: 1890, revenue: 4800, amt: 2181 },
  { name: "June", bookings: 2390, revenue: 3800, amt: 2500 },
  { name: "July", bookings: 3490, revenue: 4300, amt: 2100 },
];

// Calculate total cars rented and total revenue collected
const totalCarsRented = data.reduce((acc, curr) => acc + curr.bookings, 0);
const totalRevenueCollected = data.reduce((acc, curr) => acc + curr.revenue, 0);

const currentBooking = 25; // Example current booking count

const Overview = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">Dashboard Overview</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="bookings" fill="#8884d8" />
              <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Paper
          sx={{ p: 2, display: "flex", flexDirection: "column", height: 150 }}
        >
          <Typography variant="h6">Total Cars Rented</Typography>
          <Typography variant="h4">{totalCarsRented}</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Paper
          sx={{ p: 2, display: "flex", flexDirection: "column", height: 150 }}
        >
          <Typography variant="h6">Total Revenue Collected</Typography>
          <Typography variant="h4">${totalRevenueCollected}</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Paper
          sx={{ p: 2, display: "flex", flexDirection: "column", height: 150 }}
        >
          <Typography variant="h6">Current Bookings Made</Typography>
          <Typography variant="h4">{currentBooking}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Overview;
