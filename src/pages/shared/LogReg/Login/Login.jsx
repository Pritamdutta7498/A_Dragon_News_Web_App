
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";


const Login = () => {
  const {signInUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log('login page location', location);
  const from = location.state?.from?.pathname || '/category/0';


  const handleLogin = event =>{
   

    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
   
    // console.log(email, password);

    // create user
    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(result);
        navigate(from, {replace:true});
      })
      .catch((error) => {
        console.error(error);
      });

     
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
