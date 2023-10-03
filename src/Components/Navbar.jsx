import React from "react";
import { NavLink } from "react-router-dom";

import user from "../assets/user.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <span className="w-36"></span>
      <ul className="flex gap-5">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/career">Career</NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-3">
        <img className="w-10 h-10" src={user} alt="user" />
        <button className="px-6 py-2 bg-heading text-white">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
