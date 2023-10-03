import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import ContainerArea from "../Components/ContainerArea";

const PageTemplate = () => {
  return (
    <div>
      <Header />
      <main className="py-10">
        <ContainerArea>
          <Outlet />
        </ContainerArea>
      </main>
    </div>
  );
};

export default PageTemplate;
