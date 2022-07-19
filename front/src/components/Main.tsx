import React from "react";
import { AddComment } from "./AddComment";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Main() {
  return (
    <React.Fragment>
      <Header />
      <AddComment />
      <Footer />
    </React.Fragment>
  );
}
