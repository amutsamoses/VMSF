import { Typography, Paper, Grid } from "@mui/material";

const ManageUsers = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">Manage Users</Typography>
          {/* Add your user management logic here */}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ManageUsers;
