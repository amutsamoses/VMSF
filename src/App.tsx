import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Logout from "./components/authentication/Logout";
import AboutUs from "./components/home/AboutUs";
import Home from "./pages/Home";
import AdminLogin from "./components/authentication/AdminLogin";
import Dashboard from "./components/admin/dashboard/DashboardOverview";
import UserDashboard from "./components/customer/Dashboard/UserDashboard";
import VehicleList from "./components/vehicleList/VehicleList";
import ContactUs from "./pages/ContactUs";
import BookingPage from "./components/bookings/BookingPage";
import ManageVehicles from "./components/admin/dashboard/ManageVehicles";
import ProtectedRoute from "./services/ProtectedRoute";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={AboutUs} />
        <Route path="/login" Component={Login} />
        <Route path="/admin-login" Component={AdminLogin} />
        <Route path="/register" Component={Register} />
        <Route path="/logout" Component={Logout} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/user-dashboard" Component={UserDashboard} />
        <Route element={<ProtectedRoute />}>
          <Route path="/booking/:id" Component={BookingPage} />
        </Route>
        <Route path="/vehicles" Component={VehicleList} />
        <Route path="/contact" Component={ContactUs} />
        <Route path="/manage-vehicles" Component={ManageVehicles} />
      </Routes>
    </Router>
  );
};

export default App;
