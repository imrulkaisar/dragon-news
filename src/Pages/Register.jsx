import Heading2 from "../Components/Heading2";
import { Link, useNavigate } from "react-router-dom";
import RegisterForm from "../Components/RegisterForm";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const Register = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  return (
    <div className="bg-grayBg py-36 flex justify-center">
      <div className="w-full max-w-xl bg-white p-16 space-y-8">
        <Heading2 className="text-center md:text-3xl">
          Register your account
        </Heading2>
        <hr />

        <RegisterForm />

        <p className="text-center font-semibold">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-highlighter">Login here</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
