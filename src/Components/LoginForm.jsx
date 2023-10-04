const LoginForm = () => {
  return (
    <div>
      <form className="space-y-5">
        <div className="form-group flex flex-col gap-2">
          <label htmlFor="email">Email address</label>
          <input
            className="border px-5 py-3 bg-grayBg focus:outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
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
          />
        </div>
        <div className="form-group flex flex-col gap-2">
          <input
            className="border px-5 py-3 bg-heading text-white focus:outline-none"
            type="submit"
            value="Login"
            id="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
