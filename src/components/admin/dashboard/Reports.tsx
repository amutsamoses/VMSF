import { Typography, Paper, Grid } from "@mui/material";

const Reports = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">Reports</Typography>
          {/* Add your reporting logic here */}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Reports;
