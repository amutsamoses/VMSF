import { configureStore, combineReducers, Reducer } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../slices/authSlice";
import { vehiclesApi } from "../vehicleAPI";
import { usersApi } from "../usersAPI";
import { locationsApi } from "../locationAPI";
import { fleetApi } from "../fleetAPI";
import { bookingsApi } from "../bookingAPI";
import { registerLoginApi } from "../RegisterLoginAPI";
import { customerSupportApi } from "../customerAPI";
import { setupListeners } from "@reduxjs/toolkit/query";
import { paymentsApi } from "../paymentAPI";

// persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// root reducer
const rootReducer: Reducer = combineReducers({
  auth: authReducer,
  [vehiclesApi.reducerPath]: vehiclesApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [locationsApi.reducerPath]: locationsApi.reducer,
  [fleetApi.reducerPath]: fleetApi.reducer,
  [bookingsApi.reducerPath]: bookingsApi.reducer,
  [registerLoginApi.reducerPath]: registerLoginApi.reducer,
  [customerSupportApi.reducerPath]: customerSupportApi.reducer,
  [paymentsApi.reducerPath]: paymentsApi.reducer,
});

//persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

//root state type
export type RootState = ReturnType<typeof rootReducer>;

//app dispatch type that dispatches actions from the store
export type AppDispatch = typeof store.dispatch;

//store
export const store: ReturnType<typeof configureStore> = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      vehiclesApi.middleware,
      usersApi.middleware,
      locationsApi.middleware,
      fleetApi.middleware,
      bookingsApi.middleware,
      registerLoginApi.middleware,
      customerSupportApi.middleware,
      paymentsApi.middleware
    ),
});

//persistor
export const persistedStore = persistStore(store);

//listen to store changes
setupListeners(store.dispatch);
