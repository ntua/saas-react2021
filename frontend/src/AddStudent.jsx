import React, { useState } from "react";
import StudentApi from "./StudentApi";
import { useHistory } from "react-router-dom";

const AddStudent = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      firstname !== "" &&
      lastname !== "" &&
      username !== "" &&
      email !== "" &&
      password !== ""
    ) {
      try {
        await StudentApi.post("/", {
          firstname,
          lastname,
          username,
          email,
          password,
        });
        history.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="container mb-4">
      <form action="">
        <div className="row mb-2">
          <div className="col-md-6">
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="form-control"
              placeholder="Firstname"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="form-control"
              placeholder="Lastname"
              required
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              placeholder="Username"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
