const RegisterForm = () => {
  return (
    <div>
      <form className="space-y-5">
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
            type="email"
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
