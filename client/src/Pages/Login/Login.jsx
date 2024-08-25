import Axios from "axios";
import { useEffect, useState } from "react";
import "./Login.css";
import "../../App.css";
import video from "../../Assets/intro.mp4";
import logo from "../../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { FaSignInAlt } from "react-icons/fa";
// import { useState } from "react";
const Login = () => {
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigateTo = useNavigate();

  const [loginStatus, setLoginStatus] = useState();
  const [statusHolder, setStatusHolder] = useState("mesage");

  const loginUSer = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      LoginUserName: loginUserName,
      LoginPassword: loginPassword,
    }).then((response) => {
      console.log();

      if (response.data.message) {
        navigateTo("/");
        setLoginStatus(`Credentials don't match!`);
      } else {
        navigateTo("/landing");
      }
    });
  };

  useEffect(() => {
    if (loginStatus !== "") {
      setStatusHolder("showMessage");
      setTimeout(() => {
        setStatusHolder("message");
      }, 4000);
    }
  }, [loginStatus]);

  const onsubmit = () => {
    setLoginUserName("");
    setLoginPassword("");
  };

  // let loginstatus = "";
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/login",
  //       formData
  //     );
  //     loginstatus = "Login successful";
  //     localStorage.setItem("token", response.data.token);
  //   } catch (error) {
  //     loginstatus = "Error logging in";
  //   }
  // };

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Fuel with Future</h2>
            <p>Pay By Plate!</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Donot having an account ?</span>
            <Link to={"/register"}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
          <div className="footer2Div flex">
            <span className="text">Admin Login</span>
            <Link to={"/adminlogin"}>
              <button className="btn">Sign IN</button>
            </Link>
          </div>
        </div>
        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo" />
            <h3>Welcome Back!</h3>
          </div>
          <form onSubmit={onsubmit} action="" className="form grid">
            <span className={statusHolder}>{loginStatus}</span>
            <div className="inputDiv">
              <label htmlFor="username">UserName</label>
              <div className="input flex">
                <FaUser className="icon" />
                <input
                  type="text"
                  id="username"
                  onChange={(event) => {
                    setLoginUserName(event.target.value);
                  }}
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">PassWord</label>
              <div className="input flex">
                <MdPassword className="icon" />
                <input
                  type="text"
                  id="password"
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <Link to={"/home"}>
              <button onClick={loginUSer} type="submit" className="btn flex">
                <span>Login</span>
                <FaSignInAlt className="icon" />
              </button>
            </Link>

            <span className="forgotPassword">
              Forgot your password? <a href="">click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
