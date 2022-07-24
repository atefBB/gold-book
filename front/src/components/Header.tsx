import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export function Header() {
  const navigate = useNavigate();

  function onNavigateComments() {
    navigate("/comments");
  }
  function onNavigateLogin() {
    navigate("/");
    localStorage.clear()
  }
  return (
    <header className="header">
      <img src={"../assets/react-logo.png"} className="header--image" alt="logo" />

      <h2 className="header--title">GOLD BOOK</h2>
      <Button className="form--button">HOME</Button>
      <Button className="form--button" onClick={onNavigateComments}>
        COMMENTS
      </Button>
      <Button className="form--button" onClick={onNavigateLogin}>
        DISCONNECT
      </Button>
    </header>
  );
}
