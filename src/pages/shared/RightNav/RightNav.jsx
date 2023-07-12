import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import Qzone from "../Qzone/Qzone";
import bg from "../..//../assets/assets/bg.png";
import { AuthContext } from "../../../provider/AuthProvider";

const RightNav = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);

  // sign in with google
  const handleGoogleLogin = (event) => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGitHubLogin = (e) => {
    githubLogin()
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      console.error(error);
    });

  };
  return (
    <div>
      <div>
        <h3 className="font-bold text-2xl ">Login with</h3>
        <div className="my-5">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline btn-info w-full mb-3"
          >
            <FcGoogle className="text-2xl"></FcGoogle> Login with Google
          </button>

          <button
            onClick={handleGitHubLogin}
            className="btn btn-outline w-full"
          >
            <AiFillGithub className="text-2xl" /> Login with Github
          </button>
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-5">Find Us On:</h3>
          <button className="btn btn-outline btn-info w-full ">
            {" "}
            <BsFacebook className="text-xl" /> Facebook
          </button>

          <button className="btn btn-outline btn-secondary w-full my-1">
            {" "}
            <BsInstagram className="text-xl " /> Instagram
          </button>
          <button className="btn btn-outline btn-info w-full ">
            {" "}
            <BsTwitter className="text-xl" /> Twitter
          </button>
        </div>
      </div>
      {/* Qzone section */}
      <Qzone />
      <div className="relative">
        <img src={bg} alt="" />
        <p className="absolute font-semibold text-xl text-white inset-1/4">
          The world news we must read everyday for build our knowledge.
          <br />
          The news is based on business, politics,science, astrology etc...
        </p>
      </div>
    </div>
  );
};

export default RightNav;
