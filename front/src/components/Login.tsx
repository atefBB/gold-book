import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const HandleEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const HandlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  let navigate = useNavigate();
  function handleFormLoginEvent() {
    const body = { email, password };
    fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error === false && data.data.role === "User") {
          navigate("/home");
        } else if (data.error === false && data.data.role === "admin") {
          alert("admin");
          navigate("/listComments");
        } else {
          alert("Verify!!");
        }
        localStorage.setItem("user_id", email);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      className="container"
    >
      <div className="screen">
        <h1>Log In</h1>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            onChange={HandleEmail}
            aria-describedby="emailHelp"
            style={{ width: "20rem" }}
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={HandlePassword}
            style={{ width: "20rem" }}
            placeholder="Enter password"
          />
        </div>
        <div>
          <Button
            className="d-flex justify-content-center"
            onClick={() => {
              if (email !== "" && password !== "") {
                handleFormLoginEvent();
              }
            }}
          >
            Login
          </Button>
          <br /> <br />
          <a href="/register">Create one!</a>
        </div>
      </div>
    </div>
  );
}
