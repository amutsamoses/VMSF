import { Typography, Paper, Grid } from "@mui/material";

const FleetManagement = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">Fleet Management</Typography>
          {/* Add your fleet management logic here */}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default FleetManagement;
