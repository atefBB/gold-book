import React from "react";
import { Button } from "react-bootstrap";

export function Register() {
  const [username, setUsername] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [input, setInput] = React.useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = React.useState({
    password: "",
    confirmPassword: "",
  });

  const HandleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const HandlePassword = (e: any) => {
    setPassword(e.target.value);
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };
  const HandleName = (e: any) => {
    setUsername(e.target.value);
  };

  const validateInput = (e: any) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "password":
          if (!value) {
            stateObj["password"] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj["confirmPassword"] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  async function handleFormRegisterEvent() {
    const body = { username, email, password };
    await fetch(`${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error === false) {
          alert("register successful !");
        } else {
          alert(data.data);
        }
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
        <h1>Register</h1>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="name"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="nameHelp"
            onChange={HandleName}
            style={{ width: "20rem" }}
            placeholder="Enter Name"
          />
        </div>
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
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            value={input.password}
            onChange={HandlePassword}
            style={{ width: "20rem" }}
            placeholder="Enter password"
            onBlur={validateInput}
          />
          {error.password && <span className="err">{error.password}</span>}
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            id="exampleInputPassword1"
            value={input.confirmPassword}
            onChange={HandlePassword}
            style={{ width: "20rem" }}
            placeholder="Confirm your Password"
            onBlur={validateInput}
          />
          {error.confirmPassword && (
            <span className="err">{error.confirmPassword}</span>
          )}
        </div>

        <Button
          onClick={() => {
            if (
              email !== "" &&
              password !== "" &&
              username !== "" &&
              input.confirmPassword === input.password
            ) {
              handleFormRegisterEvent();
            } else {
              alert("no");
            }
          }}
          className="btn btn-primary"
        >
          Register
        </Button>
      </div>
    </div>
  );
}
