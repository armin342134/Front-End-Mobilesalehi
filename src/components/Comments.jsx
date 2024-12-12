import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

export default function Comments({ productId, productTitle }) {
  const [user, setUser] = useState("");
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchComments();
  }, [productId]);

  const fetchComments = async () => {
    try {
      await fetch(`http://localhost:5000/comments?productId=${productId}`)
        .then((res) => res.json())
        .then((data) => setComments(data));
    } catch (error) {
      console.log("error fetching comments", error);
    }
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://mobilesalehi.onrender.com/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, productTitle, user, content }),
      });
      fetchComments();
      setUser("");
      setContent("");
    } catch (error) {
      console.log("error saving comments", error);
    }
  };

  return (
    <div>
      <Form
        onSubmit={handelSubmit}
        style={{ borderBottom: "solid 1px white", padding: "15px" }}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label> ایمیل :</Form.Label>
          <Form.Control
            type="email"
            placeholder="ایمیل"
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>دیدگاه شما :</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </Form.Group>
        <Button type="submit" className="btn-danger ">
          ثبت
        </Button>
      </Form>
      <ul style={{ listStyle: "none", marginTop: "20px" }}>
        <h2> مجموعه دیدگاه ها ({comments.length})</h2>
        {comments.map((item) => (
          <li
            key={item._id}
            style={{
              border: "solid 1px white",
              marginTop: "20px",
              padding: "20px",
            }}
          >
            <h6>{item.user}</h6> <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
