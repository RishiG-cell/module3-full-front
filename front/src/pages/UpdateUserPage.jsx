import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

import Sidebar from "../components/Sidebar";

const UpdateUserPage = () => {
  const { currentUser, isLoading, loggedIn } = useContext(AuthContext);
  const [profileUser, setProfileUser] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:5005/profile/user/${currentUser._id}`)
      .then((res) => {
        setProfileUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  if (!profileUser) {
    return <p>Loading..</p>;
  }

  return (
    <div className="profilepage">
      <Sidebar />
      <div>Loading</div>
    </div>
  );
};

export default UpdateUserPage;
