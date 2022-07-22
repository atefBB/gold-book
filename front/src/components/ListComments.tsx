import React from "react";

export function ListComments() {
  const [comments, setComments] = React.useState([]);
  
  async function getComments() {
    await fetch(`${process.env.REACT_APP_API_URL}/comments`)
      .then((res) => res.json())
      .then(
        (result) => {
          setComments(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  React.useEffect(() => {
    getComments();
  });
  console.log(comments);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>List of Comments</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((Element: any) => (
            <tr key={Element.id}>
              <td>{Element.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
