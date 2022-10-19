import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Post() {
  let { id } = useParams();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComments] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      });

    axios
      .get(`${process.env.REACT_APP_URL_API}/comments/${id}`)
      .then((response) => {
        setComments(response.data);
      });
  }, []);

  const addComment = () => {
    axios
      .post(
        `${process.env.REACT_APP_URL_API}/comments`,
        {
          content: newComment,
          PostId: id,
        },
        {
          headers: {
            accessToken: sessionStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          const commentToAdd = { content: newComment };
          setComments([...comments, commentToAdd]);
          setNewComments("");
        }
      });
  };

  return (
    <h3 className={"container my-5"}>
      <div className={"row"}>
        <div className={"col"}>
          <div>name: {post.name}</div>
          <div>description: {post.description}</div>
          <div>content: {post.content}</div>
        </div>
        <div className={"col"}>
          <div>
            <input
              type="text"
              value={newComment}
              placeholder="comment...."
              onChange={(event) => {
                setNewComments(event.target.value);
              }}
            />
            <button onClick={addComment}>gui</button>
          </div>
          <hr></hr>
          <div>
            <div>
              {comments.map((value) => {
                return (
                  <div key={value.id}>
                    <div>{value.content}</div>
                    <hr></hr>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </h3>
  );
}

export default Post;
