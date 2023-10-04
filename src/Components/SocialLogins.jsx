import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import Heading2 from "./Heading2";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const SocialLogins = () => {
  const { user, loginWithGoogle, loginWithGithub } = useContext(UserContext);

  if (user) {
    return;
  }

  return (
    <div>
      <Heading2>Login With</Heading2>
      <div className="login-btns mt-5 space-y-3">
        <button
          onClick={loginWithGoogle}
          className="flex justify-center items-center gap-2 text-center border border-blue-500 text-blue-600 rounded-lg p-2 w-full"
        >
          <AiOutlineGoogle /> <span>Login with Google</span>
        </button>
        <button
          onClick={loginWithGithub}
          className="flex justify-center items-center gap-2 text-center border border-heading text-heading rounded-lg p-2 w-full"
        >
          <AiFillGithub /> <span>Login with Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogins;
