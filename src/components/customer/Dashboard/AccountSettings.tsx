import React from "react";
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  TextField,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import { MoreHoriz as MoreHorizIcon } from "@mui/icons-material";

const AccountSettings = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleTabChange = (
    event: any,
    newValue: React.SetStateAction<number>
  ) => {
    setTabValue(newValue);
  };

  const handleMenuClick = (event: {
    currentTarget: React.SetStateAction<null>;
  }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Settings
      </Typography>
      <Grid container spacing={3}>
        <Grid item md={5} xl={4}>
          <Card>
            <CardHeader title="Profile Settings" />
            <List component="nav">
              {[
                "Account",
                "Password",
                "Privacy and safety",
                "Email notifications",
                "Web notifications",
                "Widgets",
                "Your data",
                "Delete account",
              ].map((text, index) => (
                <ListItem
                  button
                  selected={tabValue === index}
                  onClick={() => setTabValue(index)}
                  key={text}
                >
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>
        <Grid item md={7} xl={8}>
          <TabPanel value={tabValue} index={0}>
            <Card>
              <CardHeader
                title="Public info"
                // action={
                // //   <IconButton onClick={handleMenuClick}>
                // //     <MoreHorizIcon />
                // //   </IconButton>
                // }
              />
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Action</MenuItem>
                <MenuItem onClick={handleMenuClose}>Another action</MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  Something else here
                </MenuItem>
              </Menu>
              <CardContent>
                <form>
                  <Grid container spacing={3}>
                    <Grid item md={8}>
                      <TextField
                        label="Username"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                      <TextField
                        label="Biography"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        multiline
                        rows={2}
                      />
                    </Grid>
                    <Grid item md={4} textAlign="center">
                      <Avatar
                        alt="Andrew Jones"
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        sx={{ width: 128, height: 128, mx: "auto", mt: 2 }}
                      />
                      <Button
                        variant="contained"
                        component="span"
                        startIcon={<i className="fa fa-upload" />}
                        sx={{ mt: 2 }}
                      >
                        Upload
                      </Button>
                      <Typography variant="body2">
                        For best results, use an image at least 128px by 128px
                        in .jpg format
                      </Typography>
                    </Grid>
                  </Grid>
                  <Button type="submit" variant="contained" color="primary">
                    Save changes
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Card>
              <CardContent>
                <Typography variant="h5">Password</Typography>
                <form>
                  <TextField
                    label="Current password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    type="password"
                  />
                  <TextField
                    label="New password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    type="password"
                  />
                  <TextField
                    label="Verify password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    type="password"
                  />
                  <Button type="submit" variant="contained" color="primary">
                    Save changes
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <Card>
              <CardContent>
                <Typography variant="h5">Private info</Typography>
                <form>
                  <Grid container spacing={3}>
                    <Grid item md={6}>
                      <TextField
                        label="First name"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6}>
                      <TextField
                        label="Last name"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    label="Address"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    label="Address 2"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <Grid container spacing={3}>
                    <Grid item md={6}>
                      <TextField
                        label="City"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={4}>
                      <TextField
                        label="State"
                        select
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      >
                        <MenuItem value="">
                          <em>Choose...</em>
                        </MenuItem>
                        <MenuItem value="...">...</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item md={2}>
                      <TextField
                        label="Zip"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Button type="submit" variant="contained" color="primary">
                    Save changes
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabPanel>
        </Grid>
      </Grid>
    </Container>
  );
};

const TabPanel = (props: {
  [x: string]: any;
  children: any;
  value: any;
  index: any;
}) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

export default AccountSettings;
