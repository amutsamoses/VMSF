import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
}

interface VehicleState {
  vehicles: Vehicle[];
}

const initialState: VehicleState = {
  vehicles: [],
};

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    setVehicles(state, action: PayloadAction<Vehicle[]>) {
      state.vehicles = action.payload;
    },
    addVehicle(state, action: PayloadAction<Vehicle>) {
      state.vehicles.push(action.payload);
    },
    removeVehicle(state, action: PayloadAction<number>) {
      state.vehicles = state.vehicles.filter(
        (vehicle) => vehicle.id !== action.payload
      );
    },
  },
});

export const { setVehicles, addVehicle, removeVehicle } = vehicleSlice.actions;

export default vehicleSlice.reducer as (
  state: VehicleState,
  action: PayloadAction<any>
) => VehicleState;
