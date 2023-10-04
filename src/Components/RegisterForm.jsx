import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const RegisterForm = () => {
  const { createUser, updateUser } = useContext(UserContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const { name, photoURL, email, password } = e.target;

    createUser(email.value, password.value)
      .then((response) => {
        console.log(response.user);
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
      });
    // updateUser({
    //   displayName: name.value,
    //   photoURL: photoURL.value,
    // });
  };

  return (
    <div>
      <form className="space-y-5" onSubmit={handleRegister}>
        <div className="form-group flex flex-col gap-2">
          <label htmlFor="name">Your name</label>
          <input
            className="border px-5 py-3 bg-grayBg focus:outline-none"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group flex flex-col gap-2">
          <label htmlFor="photoURL">Photo URL</label>
          <input
            className="border px-5 py-3 bg-grayBg focus:outline-none"
            type="text"
            name="photoURL"
            id="photoURL"
            placeholder="Enter the URL of your photo"
          />
        </div>
        <div className="form-group flex flex-col gap-2">
          <label htmlFor="email">Email address</label>
          <input
            className="border px-5 py-3 bg-grayBg focus:outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="form-group flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            className="border px-5 py-3 bg-grayBg focus:outline-none"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group flex gap-2">
          <input
            className=""
            type="checkbox"
            name="accept"
            id="accept"
            required
          />
          <label htmlFor="accept">Accept Term & Conditions</label>
        </div>
        <div className="form-group flex flex-col gap-2">
          <input
            className="border px-5 py-3 bg-heading text-white focus:outline-none"
            type="submit"
            value="Register"
            id="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
