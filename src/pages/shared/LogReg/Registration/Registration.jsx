import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="hero min-h-screen">
            
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <h2 className="text-2xl font-bold text-center">Register your account</h2>
          <hr className="my-5" />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              required
              placeholder="photo url"
              className="input input-bordered"
            />
          </div>
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
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-error font-semibold link-hover"
              >
                Login
              </Link>
            </div>
          </div>
          <div className="form-control mt-6">
            <input type="submit" className="btn btn-active hover:btn-error" value="Register" />
            
          </div>
        </form>
      </div>
    </div>
    );
};

export default Registration;