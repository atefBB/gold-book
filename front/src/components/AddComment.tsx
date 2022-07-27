import React from "react";
import "../App.css";

export function AddComment() {
  const [comment, setComment] = React.useState("");

  const handleFormOnSubmitEvent = async () => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/add_comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          comment: comment,
          id_user: localStorage.getItem("user_id"),
        }),
      });
      alert("Comment added successfully");
    } catch (err) {
      console.error(err);
    }
  };
  const images = [
    "https://ccrealtors.com/wp-content/uploads/2018/04/Events.jpg",
    "https://media-exp1.licdn.com/dms/image/C4D1BAQFAC3o2eHS_vA/company-background_10000/0/1565182814457?e=2147483647&v=beta&t=sCkDT2L5namPFKkbA-3Heuv_MiVew4iK7JfnBingAmo",
    "https://media-exp1.licdn.com/dms/image/C561BAQE-51J-8KkMZg/company-background_10000/0/1548357920228?e=2147483647&v=beta&t=wrOVYN8qrGon9jILrMQv78FsyOV4IMQxr_3UjYtUREI",
    "https://www1.chester.ac.uk/sites/default/files/styles/hero/public/Events%20Management%20festival%20image.jpg?itok=eJ3k-5R6",
    "https://media.istockphoto.com/photos/man-speaking-at-a-business-conference-picture-id499517325?k=20&m=499517325&s=612x612&w=0&h=0IabrPJJAkIE35TvYFVLjr9Lc6U2unn0X3YeamZarqw=",
  ];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(
        currentIndex === images.length - 1 ? 0 : currentIndex + 3
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <React.Fragment>
      <img src={images[currentIndex]} className="images" alt="logo" />

      <form className="form">
        <input
          type="text"
          placeholder="comment.."
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
    </React.Fragment>
  );
}
