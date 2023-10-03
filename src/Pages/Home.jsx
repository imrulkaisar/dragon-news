import React from "react";
import LeftSidebar from "../Layouts/LeftSidebar";
import RightSidebar from "../Layouts/RightSidebar";
import Heading2 from "../Components/Heading2";

const Home = () => {
  return (
    <div className="grid md:grid-cols-4 gap-10">
      <LeftSidebar />
      <div className="col-span-2 border-2">
        <Heading2>Main page</Heading2>
      </div>
      <RightSidebar />
    </div>
  );
};

export default Home;
