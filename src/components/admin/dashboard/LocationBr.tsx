import { Typography, Paper, Grid } from "@mui/material";

const LocationsBranches = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">Locations & Branches</Typography>
          {/* Add your location and branch management logic here */}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LocationsBranches;
