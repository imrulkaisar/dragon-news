import React, { useContext } from "react";
import LeftSidebar from "../Layouts/LeftSidebar";
import RightSidebar from "../Layouts/RightSidebar";
import Heading2 from "../Components/Heading2";
import Article from "../Components/Article";
import { MainContext } from "../Context/MainContext";

const Home = () => {
  const { blogs } = useContext(MainContext);

  return (
    <div className="grid md:grid-cols-4 gap-8">
      <LeftSidebar />
      <div className="col-span-2">
        <Heading2>Dragon News Home</Heading2>
        <div className="articles py-5 space-y-8">
          {blogs ? (
            blogs.map((blog) => <Article key={blog._id} data={blog} />)
          ) : (
            <p>News are loading ...</p>
          )}
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default Home;
