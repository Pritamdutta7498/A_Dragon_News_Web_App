import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  // console.log(user);

  const handleRegistration = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    const displayName = form.name.value;
    const photoURL = form.photo.value;
    // console.log(email, password, displayName, photoURL);

    // simple-validation
    if (password.length < 8) {
      setError("password must has 8 character!");
      return;
    }
    else if(!/(?=.*[A-Z])/.test(password)){
      setError('password must has one uppercase letter!')
      return;
    }

    // create user
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        // console.log(createdUser);
        setSuccess("User Created Successfully!");
        setError("");

        form.reset();
      })
      .catch((err) => {
        setError(err.message);
        setSuccess("");
      });
  };

  // function for accept term and condition---------

  const handleAccepted = (event) => {
    // console.log(event.target.checked);
    setAccepted(event.target.checked);
  };
  

  return (
    <div className="hero min-h-screen">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleRegistration} className="card-body">
          <h2 className="text-2xl font-bold text-center">
            Register your account
          </h2>
          <hr className="my-5" />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
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
          </div>
          <div onClick={handleAccepted} className="form-control mt-2 ">
            <label className="cursor-pointer flex items-center gap-2">
              <input
                type="checkbox"
                name="accept"
                className="checkbox w-4 h-4 checkbox-success"
              />
              <span>
                {
                  <>
                    Accept{" "}
                    <Link to="/term" className="link-hover font-semibold">
                      Terms & Condition
                    </Link>
                  </>
                }
              </span>
            </label>
          </div>
          <div className="my-3">
            <p className="text-success font-semibold">{success}</p>
            <p className="text-error font-semibold">{error}</p>
          </div>

          <div className="form-control mt-3 ">
            <input
              type="submit"
              disabled={!accepted}
              className="btn btn-active hover:btn-error"
              value="Register"
            />
          </div>
          
          <div>
            Already have an account?{" "}
            <Link to="/login" className="text-error font-semibold link-hover">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
