import React from "react";
import Logo from "../Components/Logo";
import ContainerArea from "../Components/ContainerArea";
import Today from "../Components/Today";
import Ticker from "../Components/Ticker";
import { useLocation } from "react-router-dom";
import Spacer from "../Components/Spacer";

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <header className="text-center py-10">
      <ContainerArea className="space-y-3">
        <Logo />
        <p>Journalism Without Fear or Favour</p>
        <Today />
        <Spacer height="20px" />
        {pathname === "/" && <Ticker />}
      </ContainerArea>
    </header>
  );
};

export default Header;
