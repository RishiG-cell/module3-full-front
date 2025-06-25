import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const CreatePostPage = () => {
  const { currentUser } = useContext(AuthContext);
  return <div>CreatePostPage</div>;
};

export default CreatePostPage;
