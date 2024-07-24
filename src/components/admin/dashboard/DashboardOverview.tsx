import * as React from "react";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Overview from "./Overview";
import ManageVehicles from "./ManageVehicles";
import ManageUsers from "./ManageUser";
import Reports from "./Reports";
import LocationsBranches from "./LocationBr";
import CustomerSupport from "./CustomerSupport";
import FleetManagement from "./FleetMng";
import Home from "../../../pages/Home";

const drawerWidth = 240;

export default function Dashboard() {
  const [selectedPage, setSelectedPage] = React.useState("Overview");

  const renderPage = () => {
    switch (selectedPage) {
      case "Overview":
        return <Overview />;
      case "Manage Vehicles":
        return <ManageVehicles />;
      case "Manage Users":
        return <ManageUsers />;
      case "Reports":
        return <Reports />;
      case "Locations & Branches":
        return <LocationsBranches />;
      case "Customer Support":
        return <CustomerSupport />;

      case "Fleet Management":
        return <FleetManagement />;
      case "Home":
        return <Home />;

      default:
        return <Overview />;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setSelectedPage("Overview")}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              "Overview",
              "Manage Vehicles",
              "Manage Users",
              "Reports",
              "Locations & Branches",
              "Customer Support",
              "Fleet Management",
              //a new item that routes back to home page
              "Home",
            ].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                onClick={() => setSelectedPage(text)}
              >
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, marginLeft: `${drawerWidth}px` }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {renderPage()}
        </Container>
      </Box>
    </Box>
  );
}
