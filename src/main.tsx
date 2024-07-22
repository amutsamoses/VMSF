import React from "react";
import App from "./App.tsx";
import "./index.css";
import { store, persistedStore } from "./redux/app/store.ts";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <ToastContainer />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
