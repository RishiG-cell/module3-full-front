import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import NewPost from "../components/NewPost";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const FeedPage = () => {
  const { currentUser } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const nav = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5005/post/feed")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5005/post/delete/${id}`)
      .then((res) => {
        nav("/profile");
      })
      .catch((error) => console.log(error));
  };

  function Counter() {
    const increment = () => {
      setCount(count + 1);
    };
    return (
      <>
        <div>
          <span>Likes: {count}</span>
          <Link onClick={increment}>⭐</Link>
        </div>
      </>
    );
  }

  return (
    <div className="feedpage">
      <Sidebar />
      <div className="feed-container">
        {posts.map((onePost) => {
          return (
            <div className="feed-card" key={onePost._id}>
              <h3>{onePost.user.username}</h3>
              <img src={onePost.image} />
              <div>
                <h1>{onePost.post}</h1>
              </div>
              <Counter />
              <button>comment</button>
              {onePost.user._id === currentUser._id ? (
                <button
                  onClick={() => {
                    handleDelete(onePost._id);
                  }}
                >
                  Delete
                </button>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="feed-post">
        <NewPost posts={posts} setPosts={setPosts} />
      </div>
    </div>
  );
};

export default FeedPage;
