# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

-Folder Structure
VEHICLE MANAGEMENT SYSTEM/
├── public/
│ ├── index.html
│ └── vite.svg
└── src/
├── assets/
│ ├── images/
│ ├── icons/
│ └── styles/
├── components/
│ ├── admin/
│ │ └── Dashboard/
│ │ ├── DashboarOverview.tsx
│ │ ├── ManageVehicles.tsx
│ │ ├── ManageUsers.tsx
│ │ ├── Reports.tsx
│ │ ├── LocationBranchs.tsx
│ │ ├── FleetManagement.tsx
│ │ ├── CustomerSupport.tsx
│ │ ├── Setting.tsx
│ │ └── Logout.tsx
│ ├── customer/
│ │ └── Dashboard/
│ │ ├── UserDashboard.tsx
│ │ ├── MyTickets.tsx
│ │ ├── NewTickets.tsx
│ │ └── Accountsettings.tsx
│ ├── booking/
│ │ ├── BrowseVehicle.tsx
│ │ ├── BookingForm.tsx
│ │ ├── BookingHistory.tsx
│ │ └── CurrentBooking.tsx
│ ├── common/
│ │ ├── Navbar.tsx
│ │ ├── Footer.tsx
│ │ ├── Sidebar.tsx
│ │ ├── LoadingSpinner.tsx
│ │ ├── ProtectedRoute.tsx
│ │ └── PrivateRoute.tsx
│ ├── authentication/
│ │ ├── Login.tsx
│ │ ├── Register.tsx
│ │ ├── Logout.tsx
│ │ └── Profile.tsx
│ └── home/
│ ├── LandingPage.tsx
│ ├── FeaturedVehicles.tsx
│ └── About.tsx
├── context/
│ └── AuthContext.tsx
├── hooks/
│ └── useAuth.ts
├── types/
│ ├── models.ts
│ └── index.ts
├── pages/
│ ├── Home.tsx
│ ├── Login.tsx
│ ├── Register.tsx
│ ├── VehicleDetails.tsx
│ ├── AdminLogin.tsx
│ ├── CustomerLogin.tsx
│ └── Error.tsx
├── redux/
│ ├── store.ts
│ └── slice/
│ ├── authSlice.ts
│ ├── vehicleSlice.ts
│ ├── bookingSlice.ts
│ ├── userSlice.ts
│ └── supportSlice.ts
├── services/
│ ├── api.ts
│ ├── stripe.ts
│ └── authService.ts
├── styles/
│ ├── global.scss
│ └── variables.scss
├── utils/
│ ├── helpers.ts
│ ├── constants.ts
│ └── validators.ts
└── routes/
└── Routes.tsx
