import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FavoriteContextProvider } from "./store/favorite-context";
import {ToastContainer} from 'react-toastify';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoriteContextProvider>
    <ToastContainer/>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FavoriteContextProvider>
);
