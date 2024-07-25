import React from "react";
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
  Button,
} from "@mui/material";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

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

const Reports: React.FC = () => {
  const generatePDF = () => {
    const input = document.getElementById("pdfContent");
    if (input) {
      html2canvas(input as HTMLElement)
        .then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("p", "mm", "a4");
          const imgProps = pdf.getImageProperties(imgData);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
          pdf.save("report.pdf");
        })
        .catch((error) => {
          console.error("Error generating PDF:", error);
        });
    } else {
      console.error("Element not found");
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={generatePDF}>
          Download as PDF
        </Button>
        <Paper
          id="pdfContent"
          sx={{ p: 2, display: "flex", flexDirection: "column" }}
        >
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
