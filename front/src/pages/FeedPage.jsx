import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import NewPost from "../components/NewPost";

const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5005/post/feed")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="feedpage">
      <Sidebar />
      <div className="feed-container">
        <div className="feed-card">
          <NewPost posts={posts} setPosts={setPosts} />
        </div>
        {posts.map((onePost) => {
          return (
            <div className="feed-card" key={onePost._id}>
              <h3>{onePost.user.username}</h3>
              <img src={onePost.image} />
              <div>
                <h1>{onePost.post}</h1>
              </div>
              <button>Like</button>
              <button>comment</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeedPage;
