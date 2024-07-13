import * as React from "react";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";
import Overview from "./Overview";
import ManageVehicles from "./ManageVehicles";
import ManageUsers from "./ManageUser";
import Reports from "./Reports";
import LocationsBranches from "./LocationBr";
import CustomerSupport from "./CustomerSupport";
import FleetManagement from "./FleetMng";

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
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <SwipeableTemporaryDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {renderPage()}
        </Container>
      </Box>
    </Box>
  );
}
