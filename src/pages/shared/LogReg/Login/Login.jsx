import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <h2 className="text-2xl font-bold text-center">Login your account</h2>
          <hr className="my-7" />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              required
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="password"
              className="input input-bordered"
            />
            <div>
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-error font-semibold link-hover"
              >
                Register
              </Link>
            </div>
          </div>
          <div className="form-control mt-6">
          <input type="submit" className="btn btn-active hover:btn-error" value="Login" />
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
