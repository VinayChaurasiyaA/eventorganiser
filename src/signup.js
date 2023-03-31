import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const [input, setInput] = useState({
    firstname: "",
    date: "",
    gender: "",
    contact: "",
    email: "",
    address: "",
    collegename: "",
    id: "",
    year: "",
    username: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((preInput) => {
      return {
        ...preInput,
        [name]: value,
      };
    });
  };
  const submitToBackend = (e) => {
    e.preventDefault();
    const newRegistration = {
      firstname: input.firstname,
      date: input.date,
      gender: input.gender,
      contact: input.contact,
      email: input.email,
      address: input.address,
      collegename: input.collegename,
      id: input.id,
      year: input.year,
      username: input.username,
      password: input.password,
      cpassword: input.cpassword,
    };
    axios
      .post("https://events-yv65.onrender.com/register", newRegistration)
      .then((res) => {
        console.log(res);
        if (res.data === "ok") {
          alert("registration done");
          navigate("/");
        }
      });
  };
  return (
    <>
      <div className="signup">
        <div className="container1">
          <header>Register</header>
          <form action="/register" method="POST">
            <div className="form first">
              <div className="Personal Details">
                <span className="title">Personal Details</span>
                <div className="fields">
                  <div className="input-field">
                    <label>Full Name</label>
                    <input
                      onChange={handleChange}
                      value={input.firstname}
                      type="text"
                      placeholder="Enter your name"
                      required
                      name="firstname"
                    ></input>
                  </div>

                  <div className="input-field">
                    <label>Date of Birth</label>
                    <input
                      onChange={handleChange}
                      value={input.date}
                      type="date"
                      placeholder="Enter Birth Date"
                      required
                      name="date"
                    ></input>
                  </div>

                  <div className="input-field">
                    <label>Gender</label>
                    <input
                      onChange={handleChange}
                      value={input.gender}
                      type="text"
                      placeholder="Your gender"
                      required
                      name="gender"
                    ></input>
                  </div>

                  <div className="input-field">
                    <label>Contact</label>
                    <input
                      onChange={handleChange}
                      value={input.contact}
                      type="text"
                      placeholder="Mobile Number"
                      required
                      name="contact"
                    ></input>
                  </div>

                  <div className="input-field">
                    <label>Email-Id</label>
                    <input
                      onChange={handleChange}
                      value={input.email}
                      type="email"
                      placeholder="Your Email"
                      required
                      name="email"
                    ></input>
                  </div>

                  <div className="input-field">
                    <label>Address</label>
                    <input
                      onChange={handleChange}
                      value={input.address}
                      type="text"
                      placeholder="Your Address"
                      required
                      name="address"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="Personal Details">
                <span className="title">College Details</span>
                <div className="fields">
                  <div className="input-field">
                    <label>College Name</label>
                    <input
                      onChange={handleChange}
                      value={input.collegename}
                      type="text"
                      placeholder="Your college name"
                      required
                      name="collegename"
                    ></input>
                  </div>

                  <div className="input-field">
                    <label>Collge ID</label>
                    <input
                      onChange={handleChange}
                      value={input.id}
                      type="text"
                      placeholder="College Id number"
                      required
                      name="id"
                    ></input>
                  </div>

                  <div className="input-field">
                    <label>Studying Year and Stream</label>
                    <input
                      onChange={handleChange}
                      value={input.year}
                      type="text"
                      placeholder="Your current year"
                      required
                      name="year"
                    ></input>
                  </div>

                  <div className="input-field">
                    <label>
                      <i class="zmdi zmdi-account"></i> User name
                    </label>
                    <input
                      onChange={handleChange}
                      value={input.username}
                      type="text"
                      placeholder="Create user name"
                      required
                      name="username"
                    ></input>
                  </div>

                  <div className="input-field">
                    <label>
                      <i class="zmdi zmdi-lock"></i> Password
                    </label>
                    <input
                      onChange={handleChange}
                      value={input.password}
                      type="password"
                      placeholder="New password"
                      required
                      name="password"
                    ></input>
                  </div>

                  <div className="input-field">
                    <label>
                      <i class="zmdi zmdi-assignment-check"></i> Confirm
                      Password
                    </label>
                    <input
                      onChange={handleChange}
                      value={input.cpassword}
                      type="password"
                      placeholder="Confirm your password"
                      required
                      name="cpassword"
                    ></input>
                  </div>

                  <button
                    onClick={submitToBackend}
                    type="submit"
                    className="loginbutton"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
/* <button className="submit">
            <span className="submit">Submit</span> */
