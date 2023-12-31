import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Adduser() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const { firstname, lastname, email } = user;

  const ouInputchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:9191/user", user);
    navigate("/");
  };

  // const onSubmit=(e)=> {};

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-2 mt-2 shadow">
          <h2 className="text-center m-1"> Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-2">
              <label htmlFor="firstname" className="form-label">
                FirstName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the firstname"
                name="firstname"
                value={firstname}
                onChange={(e) => ouInputchange(e)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastname" className="form-label">
                LastName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the lastname"
                name="lastname"
                value={lastname}
                onChange={(e) => ouInputchange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type={"email"}
                className="form-control"
                placeholder="Enter the email"
                name="email"
                value={email}
                onChange={(e) => ouInputchange(e)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              submit
            </button>
            <Link className="btn btn-danger mx-2" to={"/"}>
              cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
