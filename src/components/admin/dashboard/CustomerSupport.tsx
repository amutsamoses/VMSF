import { Typography, Paper, Grid } from "@mui/material";

const CustomerSupport = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">Customer Support</Typography>
          {/* Add your customer support management logic here */}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CustomerSupport;
