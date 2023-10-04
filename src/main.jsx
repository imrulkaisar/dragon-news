import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import MainRouters from "./Routes/MainRoute";
import MainContextProvider from "./Context/MainContext";
import UserContextProvider from "./Context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainContextProvider>
      <UserContextProvider>
        <RouterProvider router={MainRouters} />
      </UserContextProvider>
    </MainContextProvider>
  </React.StrictMode>
);
