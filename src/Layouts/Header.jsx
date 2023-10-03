import React from "react";
import Logo from "../Components/Logo";
import ContainerArea from "../Components/ContainerArea";
import Today from "../Components/Today";

const Header = () => {
  return (
    <header className="text-center py-10">
      <ContainerArea className="space-y-3">
        <Logo />
        <p>Journalism Without Fear or Favour</p>
        <Today />
      </ContainerArea>
    </header>
  );
};

export default Header;
