import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import userImg from "../assets/user.png";
import { UserContext } from "../Context/UserContext";

const Navbar = () => {
  const { user, logOut } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/login");
  };

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
        <img className="w-10 h-10" src={userImg} alt="user" />
        {user ? (
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-heading text-white"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="px-6 py-2 bg-heading text-white">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
