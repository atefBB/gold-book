import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../App.css";
export function Header() {
  const navigate = useNavigate();

  function onNavigateComments() {
    navigate("/comments");
  }
  function onNavigateLogin() {
    navigate("/");
    localStorage.clear();
  }
  function onNavigateHome() {
    navigate("/home");
  }
  return (
    <header className="header">
      <img src={logo} className="header--image" alt="logo" />

      <h1 className="header--title">GOLD BOOK</h1>
      <p className="text">Good morning {localStorage.getItem("username")}!</p>
      <button className="form--button" onClick={onNavigateHome}>
        HOME
      </button>
      <button className="form--button" onClick={onNavigateComments}>
        COMMENTS
      </button>
      <button className="form--button1" onClick={onNavigateLogin}>
        DISCONNECT
      </button>
    </header>
  );
}
