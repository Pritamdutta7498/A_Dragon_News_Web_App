import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";

const Registration = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [user, setUser] = useState('');
  console.log(user);

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    const displayName = form.name.value;
    const photoURL = form.photo.value;
    console.log(email, password, displayName, photoURL);

  
//! Not Working!
    // updateUserProfile(displayName, photoURL)
    // .then(() => {
    //   console.log('profile updated');
    //   return user;
    // }).catch((error) => {
    //   console.log(error);
    // });
    

    // create user
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        console.log(createdUser);
      })
      .catch((error) => {
        console.error(error);
      });
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
            <div>
              Already have an account?{" "}
              <Link to="/login" className="text-error font-semibold link-hover">
                Login
              </Link>
            </div>
          </div>
          
          <Form.Check
          onClick={handleAccepted}
            type="checkbox"
            label={
              <>
                Accept <Link to="/terms">Terms And Condition</Link>{" "}
              </>
            }
          />
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn btn-active hover:btn-error"
              value="Register"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
