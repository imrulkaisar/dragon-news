import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import MainRouters from "./Routes/MainRoute";
import MainContextProvider from "./Context/MainContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainContextProvider>
      <RouterProvider router={MainRouters} />
    </MainContextProvider>
  </React.StrictMode>
);
