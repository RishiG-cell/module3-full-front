import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ProfilePage = () => {
  const { currentUser, isLoading, loggedIn } = useContext(AuthContext);

  return <div>{currentUser.username}'s ProfilePage</div>;
};

export default ProfilePage;
