import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";

const Login = () => {
  const { signInUser, resetPassword } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();
  // console.log('login page location', location);
  const from = location.state?.from?.pathname || "/category/0";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);

    // create user
    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setSuccess("User Login Successfully!");
        setError("");
        // console.log(result);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message)
        // console.error(error);
      });

      //function for reset password
 
  };
  const handleResetPassword = e =>{
    // console.log(emailRef.current.value);
    const email = emailRef.current.value;
    if(!email){
      alert('Please write your email address then click reset password link!');
      return;
    };
    resetPassword(email)
    .then((result) =>{
      alert('Please check your email!');
    })
    .catch((err)=>{
      alert(err.message)
    })

  }

  return (
    <div className="hero min-h-screen">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <h2 className="text-2xl font-bold text-center">Login your account</h2>
          <hr className="my-7" />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              ref={emailRef}
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
                className="text-blue-700  link-hover"
              >
                register
              </Link>
            </div>
            

          </div>
          <div className="">
            <p className="text-success font-semibold">{success}</p>
            <p className="text-error font-semibold">{error}</p>
          </div>
          <div className="form-control my-3">
            <input
              type="submit"
              className="btn btn-active hover:btn-error"
              value="Login"
            />
          </div>
          <div >
            Forget your password? <button onClick={handleResetPassword} className=" btn-link ">reset password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
