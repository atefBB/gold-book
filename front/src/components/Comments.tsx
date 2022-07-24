import React from "react";
import Button from "react-bootstrap/Button";

export function Comments() {
  const [comments, setComments] = React.useState([]);
  const [comment, setComment] = React.useState("");

  async function getComments() {
    await fetch(`${process.env.REACT_APP_API_URL}/user_comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_user: localStorage.getItem("user_id"),
      }),
    })
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
  const handleFormUpdateEvent = async (idc: any) => {
    try {
      const Response = await fetch(
        `${process.env.REACT_APP_API_URL}/update_comment`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: idc,
            comment: comment,
          }),
        }
      );
      console.log(Response);
      alert("Comment updated successfully");
    } catch (err) {
      console.error(err);
    }
  };
  const handleFormDeleteEvent = async (idc: any) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/deleteComment`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: idc }),
      });
      alert("Comment deleted successfully");
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    getComments();
  });

  console.log(comments);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Comment</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((Element: any) => (
            <tr key={Element.id}>
              <td>{Element.comment}</td>
              <td>
                <>
                  <Button
                    type="button"
                    className="btn btn-warning"
                    data-toggle="modal"
                    data-target={`#id${Element.id}`}
                    onClick={() => setComment(Element.comment)}
                  >
                    Edit
                  </Button>

                  <div className="modal" id={`id${Element.id}`}>
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title">Edit Comment</h4>
                          <Button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            onClick={() => setComment(Element.comment)}
                          >
                            &times;
                          </Button>
                        </div>

                        <div className="modal-body">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="edit comment"
                            value={comment}
                            onChange={(e: any) => setComment(e.target.value)}
                          />
                        </div>

                        <div className="modal-footer">
                          <Button
                            type="button"
                            className="btn btn-warning"
                            data-dismiss="modal"
                            onClick={(): any =>
                              handleFormUpdateEvent(Element.id)
                            }
                          >
                            Edit
                          </Button>
                          <Button
                            type="button"
                            className="btn btn-danger"
                            data-dismiss="modal"
                          >
                            Close
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </td>
              <td>
                <Button
                  className="btn btn-danger"
                  onClick={() => {
                    handleFormDeleteEvent(Element.id);
                    console.log(Element.id);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
