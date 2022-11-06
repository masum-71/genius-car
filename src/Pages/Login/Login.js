import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { loginWithEmail } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmail(email, password)
      .then((result) => {
        const user = result.user;

        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

        //get jwt token

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            localStorage.setItem("genius-token", data.token);
            navigate(from, { replace: true });
          });

        form.reset();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <div className="card  w-full shadow-2xl bg-base-100">
          <div className="text-center">
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
          </div>
          <form onSubmit={handleLogin} className="card-body">
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
                type="password"
                placeholder="password"
                name="password"
                required
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center mb-4">
            New to Genius Car ?{" "}
            <Link to="/signup" className="text-orange-600 font-bold">
              Sign Up
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

export default Login;
