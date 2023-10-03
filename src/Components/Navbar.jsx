import React from "react";
import { Link, NavLink } from "react-router-dom";

import user from "../assets/user.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <span className="w-36"></span>
      <ul className="flex gap-5 text-text">
        <li>
          <NavLink className="hover:text-heading" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-heading" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-heading" to="/career">
            Career
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-3">
        <img className="w-10 h-10" src={user} alt="user" />
        <Link to="/login">
          <button className="px-6 py-2 bg-heading text-white">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
