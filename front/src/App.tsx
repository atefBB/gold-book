import React from "react";
//components
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Comments } from "./components/Comments";
import { Main } from "./components/Main";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </BrowserRouter>
  );
}
