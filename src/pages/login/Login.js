import React, { useState } from "react";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";
import "./login.css";
import { useForm } from "react-hook-form";
import image from "../../images/login/login.jpg";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();
  const { googleSignIn, RegisterWithEmail, logIn } = useAuth();
  const [logedIn, setLogedIn] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (logedIn) {
      SignIn(data.email, data.password);
    } else {
      Register(data.email, data.password);
    }
  };

  const handleLogedToggle = () => {
    setLogedIn(!logedIn);
  };

  // register
  const Register = (email, password) => {
    RegisterWithEmail(email, password)
      .then((result) => {
        setErrMsg("");
        // sweet alert func
        Swal.fire("Congratulation!", "New Regestraion completed!", "success");
        history.push("/");
      })
      .catch((error) => {
        setErrMsg(error.message);

        // sweet alert func
        Swal.fire("Opps!", "Regestraion Failed! Please Try Again", "error");
      });
  };

  // log in with email and password
  const SignIn = (email, password) => {
    logIn(email, password)
      .then((result) => {
        history.push("/");
        setErrMsg("");
        // sweet alert func
        Swal.fire("Congratulation!", "User Log In successful!", "success");
      })
      .catch((error) => {
        setErrMsg(error.message);

        // sweet alert func
        Swal.fire("Opps!", "Log In Failed! Please Try Again", "error");
      });
  };

  // google sign in function
  const googleLogIn = () => {
    googleSignIn()
      .then((result) => {
        setErrMsg("");
        history.push("/");
        Swal.fire("Yooo!", "You Signed In Successfully", "success");
      })
      .catch((error) => {
        setErrMsg(error.message);
        // sweet alert func
        Swal.fire("Opps!", "Sign In Failed! Please Try Again", "error");
      });
  };

  return (
    <div className="login">
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="login-img" src={image} alt="" />
          </div>
          <div className="col-md-6 mt-1 mt-md-5">
            {logedIn ? (
              <div className="register">
                <h1 className="mb-3 mb-md-5">Please Log In</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className="form-control  mb-3"
                    type="email"
                    placeholder="Your Email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  <input
                    className="form-control  mb-3"
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />

                  <div className=" mb-5 mb-md-5 ">
                    <button
                      className="btn btn-outline-success me-3 "
                      type="submit"
                    >
                      Log In
                    </button>
                    <button
                      onClick={googleLogIn}
                      className=" btn btn-outline-success"
                    >
                      Log In With Google
                    </button>
                  </div>
                </form>

                <a onClick={handleLogedToggle} className="isLogedIn mt-3">
                  New User? Please Register
                </a>

                <p className="text-danger">{errMsg}</p>
              </div>
            ) : (
              <div className="register">
                <h1 className="mb-2 mb-md-5">Please Register</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className="form-control mb-3 "
                    type="text"
                    placeholder="Your Name"
                    {...register("name", { required: false, maxLength: 80 })}
                  />
                  <input
                    className="form-control  mb-3"
                    type="email"
                    placeholder="Your Email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  <input
                    className="form-control  mb-3"
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  {/* <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Photo url"
                    {...register("photo", {})}
                  /> */}
                  <div className=" mb-5 mb-md-5 ">
                    <button
                      className="btn btn-outline-success me-3 "
                      type="submit"
                    >
                      Register
                    </button>
                    <button
                      onClick={googleLogIn}
                      className=" btn btn-outline-success"
                    >
                      Google Sign In
                    </button>
                  </div>
                </form>

                <a onClick={handleLogedToggle} className="isLogedIn mt-3">
                  Already Registered? Please log In
                </a>
                <p className="text-danger">{errMsg}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
