import React, { useContext } from "react";
import { MainContext } from "../Context/MainContext";
import Marquee from "react-fast-marquee";
import { FiCommand } from "react-icons/fi";

const Ticker = () => {
  const { blogs } = useContext(MainContext);

  // Check if blogs data is available
  if (!blogs || blogs.length === 0) {
    // Render a loading indicator or placeholder text
    return (
      <div className="bg-grayBg py-2 px-4 flex items-center">
        <span className="bg-highlighter text-white px-5 py-2 mr-4">Latest</span>
        <p>Loading...</p>
      </div>
    );
  }

  const marqueeText = blogs.map((blog) => blog.title).join(" ✳️ ");

  return (
    <div className="bg-grayBg py-2 px-4 flex items-center">
      <span className="bg-highlighter text-white px-5 py-2 mr-4">Latest</span>
      <div className="text-text">
        <Marquee>{marqueeText}</Marquee>
      </div>
    </div>
  );
};

export default Ticker;
