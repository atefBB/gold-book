import React from "react";
//components
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Comments } from "./components/Comments";
import { Main } from "./components/Main";
import { ToastContainer } from "react-toastify";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { ListComments } from "./components/ListComments";

export function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Main />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/listComments" element={<ListComments />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
