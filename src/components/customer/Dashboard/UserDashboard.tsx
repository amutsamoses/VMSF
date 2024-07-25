import * as React from "react";
import { Link } from "react-router-dom";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { alpha } from "@mui/material/styles";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import AccountSettings from "./AccountSettings";
import BookingHistory from "../../bookings/BookingHistroy";
import BrowseVehicle from "../../bookings/BrowseVehicle";
import CurrentBooking from "../../bookings/CurrentBooking";
import MyTickets from "./MyTickets";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import BookingPage from "../../bookings/BookingPage";
import { InboxIcon, MailIcon } from "lucide-react";

const drawerWidth = 270;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 8,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "1000%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "70%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const data = [
  { name: "Jan", rentals: 30 },
  { name: "Feb", rentals: 20 },
  { name: "Mar", rentals: 50 },
  { name: "Apr", rentals: 40 },
  { name: "May", rentals: 70 },
  { name: "Jun", rentals: 60 },
  { name: "Jul", rentals: 90 },
  { name: "Aug", rentals: 100 },
  { name: "Sep", rentals: 80 },
  { name: "Oct", rentals: 60 },
  { name: "Nov", rentals: 50 },
  { name: "Dec", rentals: 70 },
];

const analyticsData = {
  totalTimeSpent: "350 hours",
  averageRentals: "45 rentals",
  annualRentals: "540 rentals",
  monthlyRentals: "45 rentals",
};

export default function UserDashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [view, setView] = React.useState("Overview");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItems = [
    { text: "Overview", icon: <InboxIcon />, view: "Overview" },
    {
      text: "Browse Vehicle",
      icon: <DirectionsCarIcon />,
      view: "Browse Vehicle",
    },
    { text: "Current Booking", icon: <InboxIcon />, view: "Current Booking" },
    { text: "Booking History", icon: <MailIcon />, view: "Booking History" },
    { text: "My Tickets", icon: <MailIcon />, view: "My Tickets" },
    { text: "Account Settings", icon: <InboxIcon />, view: "Account Settings" },
  ];

  const renderContent = () => {
    switch (view) {
      case "Overview":
        return (
          <>
            <Typography variant="h3">Analytics Overview</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ flex: 1 }}>
                <ResponsiveContainer width="90%" height={500}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="rentals"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Typography variant="h3">Key Metrics</Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Box sx={{ flex: 1, p: 2 }}>
                  <Typography variant="subtitle1">Total Time Spent:</Typography>
                  <Typography variant="body1">
                    {analyticsData.totalTimeSpent}
                  </Typography>
                </Box>
                <Box sx={{ flex: 1, p: 2 }}>
                  <Typography variant="subtitle1">Average Rentals:</Typography>
                  <Typography variant="body1">
                    {analyticsData.averageRentals}
                  </Typography>
                </Box>
                <Box sx={{ flex: 1, p: 2 }}>
                  <Typography variant="subtitle1">Annual Rentals:</Typography>
                  <Typography variant="body1">
                    {analyticsData.annualRentals}
                  </Typography>
                </Box>
                <Box sx={{ flex: 1, p: 2 }}>
                  <Typography variant="subtitle1">Monthly Rentals:</Typography>
                  <Typography variant="body1">
                    {analyticsData.monthlyRentals}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </>
        );
      case "Browse Vehicle":
        return (
          <>
            <Typography variant="body1">Browse Vehicle Content</Typography>
            <BrowseVehicle />
          </>
        );
      case "Booking Form":
        return (
          <>
            <Typography variant="body1">Booking Form Content</Typography>
            <BookingPage />
          </>
        );
      case "Current Booking":
        return (
          <>
            <Typography variant="body1">Current Booking Content</Typography>
            <CurrentBooking />
          </>
        );
      case "Booking History":
        return (
          <>
            <Typography variant="body1">Booking History Content</Typography>
            <BookingHistory />
          </>
        );
      case "My Tickets":
        return (
          <>
            <Typography variant="body1">My Tickets Content</Typography>
            <MyTickets />
          </>
        );
      case "Account Settings":
        return (
          <>
            <Typography variant="body1">Account Settings Content</Typography>
            <AccountSettings />
          </>
        );
      default:
        return (
          <Typography variant="body1">Welcome to your dashboard!</Typography>
        );
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 6,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            User Dashboard
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <IconButton color="inherit" component={Link} to="/">
            <HomeIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/vehicles">
            <DirectionsCarIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/logout">
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={true}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => setView(item.view)}
                sx={{
                  minHeight: 60,
                  justifyContent: "initial",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 3,
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: 1 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, pl: 7, mb: 100 }}>
        <DrawerHeader />
        <Typography variant="h4" gutterBottom>
          {view}
        </Typography>
        {renderContent()}
      </Box>
    </Box>
  );
}
