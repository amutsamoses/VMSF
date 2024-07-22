import {
  Typography,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

// Sample static data for demonstration
const summaryData = {
  totalVehicles: 50,
  totalRentals: 120,
  totalRevenue: 30000,
};

const revenueData = [
  { vehicle: "Toyota Corolla", rentals: 30, revenue: 7500 },
  { vehicle: "Honda Civic", rentals: 25, revenue: 6250 },
  { vehicle: "Ford Focus", rentals: 20, revenue: 5000 },
  { vehicle: "Chevrolet Malibu", rentals: 15, revenue: 3750 },
  { vehicle: "BMW 3 Series", rentals: 10, revenue: 2500 },
];

const recentRentals = [
  { user: "John Doe", vehicle: "Toyota Corolla", date: "2024-07-10" },
  { user: "Jane Smith", vehicle: "Honda Civic", date: "2024-07-09" },
  { user: "Alice Johnson", vehicle: "Ford Focus", date: "2024-07-08" },
];

const Reports = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">Reports</Typography>

          {/* Summary Statistics */}
          <Typography variant="subtitle1">Summary Statistics</Typography>
          <Typography>Total Vehicles: {summaryData.totalVehicles}</Typography>
          <Typography>Total Rentals: {summaryData.totalRentals}</Typography>
          <Typography>Total Revenue: ${summaryData.totalRevenue}</Typography>

          {/* Revenue by Vehicle */}
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Revenue by Vehicle
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Vehicle</TableCell>
                <TableCell>Rentals</TableCell>
                <TableCell>Revenue ($)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {revenueData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.vehicle}</TableCell>
                  <TableCell>{row.rentals}</TableCell>
                  <TableCell>{row.revenue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Recent Rentals */}
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Recent Rentals
          </Typography>
          <List>
            {recentRentals.map((rental, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`${rental.user} rented ${rental.vehicle}`}
                  secondary={`Date: ${rental.date}`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Reports;
