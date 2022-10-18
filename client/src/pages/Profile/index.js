import React, { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      axios.get(`${process.env.REACT_APP_URL_API}/posts`).then((response) => {
        setPosts(response.data);
      });
    }, []);
    return (
      <div className={"container"}>
        {posts.map((value, key) => {
          return (
            <div key={value.id}>
              <div>name: {value.name}</div>
              <div>name: {value.description}</div>
              <div>name: {value.content}</div>
              <hr></hr>
            </div>
          );
        })}
      </div>
    );
}

export default Profile;