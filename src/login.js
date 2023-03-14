import React, { useState } from "react";
import loginpic from "./Images/loginpic.png";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
export default function Login({ setUserDetails }) {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    // const { name, value } = event.target;
    setInput(() => ({
      ...input,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
      // [name]: value,
    }));
    // setInput()
  };
  const submitButton = (e) => {
    e.preventDefault();
    //  console.log(input);
    const user = axios
      .post("http://localhost:5000/login", input)
      .then((res) => {
        //  console.log(res.data.result);
        console.log(res.data.message);
        if (res.data.message !== "failed") {
          alert("Login");
          setUserDetails(res.data.result);
          navigate("/user");
        } else {
          alert("No data found , invalid username and password");
          navigate("/login");
        }
      });
    //console.log(user);
  };
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="login-img">
            <div className="container2-img">
              <img src={loginpic} alt="loginpic" />
            </div>
          </div>
          <form action="/login" method="POST">
            <div>
              <h1 className="Login">Login</h1>
              <div className="input-field2">
                <label>
                  <i class="zmdi zmdi-account"></i> User name
                </label>
                <input
                  value={input.username}
                  onChange={handleChange}
                  type="userID"
                  placeholder="username"
                  required
                  name="username"
                ></input>
              </div>
              <div className="input-field2">
                <label>
                  <i class="zmdi zmdi-lock"></i> Password
                </label>
                <input
                  value={input.password}
                  onChange={handleChange}
                  type="Password"
                  placeholder="password"
                  required
                  name="password"
                ></input>
              </div>
              <button
                type="submit"
                onClick={submitButton}
                className="loginbutton"
              >
                <span>Login</span>
              </button>
              <NavLink className="navlinklogin" to="/signup">
                Not Registered? Create an account
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
