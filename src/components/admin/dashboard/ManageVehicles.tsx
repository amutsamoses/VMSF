import { Typography, Paper, Grid, Button } from "@mui/material";

const ManageVehicles = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">Manage Vehicles</Typography>
          <Button variant="contained" color="primary">
            Add Vehicle
          </Button>
          {/* Add your CRUD operations here */}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ManageVehicles;
