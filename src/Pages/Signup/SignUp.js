import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/login/login.svg";

const SignUp = () => {
  const handleSignup = (event) => {
    event.preventDefault();
  };
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <div className="card  w-full shadow-2xl bg-base-100">
          <div className="text-center">
            <h1 className="text-3xl text-center font-bold">Sign Up!</h1>
          </div>
          <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center mb-4">
            Already Have An Account ?{" "}
            <Link to="/login" className="text-orange-600 font-bold">
              Login
            </Link>{" "}
          </p>
        </div>
        <div className=" w-full">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
