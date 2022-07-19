import React from "react";
import "../App.css";

export function AddComment() {
  const [comment, setComment] = React.useState("");

  const handleFormOnSubmitEvent = async () => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/add_comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment: comment }),
      });
      console.log("added");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="form">
      <input
        type="text"
        placeholder="comment"
        className="form--input"
        onChange={(e: any) => {
          setComment(e.target.value);
        }}
      />
      <button
        type="button"
        className="form--button"
        onClick={handleFormOnSubmitEvent}
      >
        Send
      </button>
    </form>
  );
}
