import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const PageTemplate = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default PageTemplate;
