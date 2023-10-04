import Heading2 from "../Components/Heading2";
import { Link } from "react-router-dom";
import LoginForm from "../Components/LoginForm";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const Login = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-grayBg py-36 flex justify-center">
      <div className="w-full max-w-xl bg-white p-16 space-y-8">
        <Heading2 className="text-center md:text-3xl">
          Login your account
        </Heading2>
        <hr />

        <LoginForm />

        <p className="text-center font-semibold">
          Dont’t Have An Account?{" "}
          <Link to="/register">
            <span className="text-highlighter">Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
