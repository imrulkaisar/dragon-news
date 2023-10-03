import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const Logo = ({ className }) => {
  return (
    <div className={`${className}`}>
      <Link to="/">
        <img className="inline" src={logo} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
