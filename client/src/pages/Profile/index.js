import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import className from "classnames/bind";

import { AuthContext } from "../../helpers/AuthContext.js";
import styles from "./Profile.module.scss";

const cl = className.bind(styles);

function Profile() {
  const [posts, setPosts] = useState([]);
  const [liked, setLiked] = useState([]);
  const { auth } = useContext(AuthContext);

  let navigate = useNavigate();

  useEffect(() => {
    if (!auth.status) {
      axios.get(`${process.env.REACT_APP_URL_API}/posts`).then((response) => {
        setPosts(response.data.listOfPosts);
        setLiked(
          response.data.likedPosts.map((like) => {
            return like.PostId;
          })
        );
      });
    } else {
      axios
        .get(`${process.env.REACT_APP_URL_API}/posts/auth`, {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        })
        .then((response) => {
          setPosts(response.data.listOfPosts);
          setLiked(
            response.data.likedPosts.map((like) => {
              return like.PostId;
            })
          );
        });
    }
  }, []);

  const likeAPost = (postId) => {
    if (!auth.status) {
      navigate("/login");
    } else {
      axios
        .post(
          `${process.env.REACT_APP_URL_API}/likes`,
          {
            PostId: postId,
          },
          {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          }
        )
        .then((response) => {
          setPosts(
            posts.map((post) => {
              if (post.id === postId) {
                if (response.data.liked) {
                  return { ...post, Likes: [...post.Likes, 0] };
                } else {
                  const likesArray = post.Likes;
                  likesArray.pop();
                  return { ...post, Likes: likesArray };
                }
              } else {
                return post;
              }
            })
          );

          if (liked.includes(postId)) {
            setLiked(
              liked.filter((id) => {
                return id !== postId;
              })
            );
          } else {
            setLiked([...liked, postId]);
          }
        });
    }
  };

  return (
    <div className={"container"}>
      {posts.map((value, key) => {
        return (
          <div key={value.id}>
            <div
              onClick={() => {
                navigate(`/post/${value.id}`);
              }}
            >
              name: {value.name}
            </div>
            <div>name: {value.description}</div>
            <div>name: {value.content}</div>
            <button
              onClick={() => {
                likeAPost(value.id);
              }}
            >
              <div
                className={cl(
                  liked.includes(value.id) ? "unlikedbtn" : "likebtn"
                )}
              >
                like
              </div>
            </button>

            <div>{value.Likes.length}</div>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}

export default Profile;
