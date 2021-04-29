import { useState, useEffect } from "react";

import axios from "axios";

const UserAPI = () => {
  const [user, setUser] = useState([]);
  const [errorM, setErrorM] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("https://randomuser.me/api/?results=50");
      setUser(res.data.results);
    };
    getUsers();
  }, []);

  console.log(user);

  return {
    user: [user, setUser],
    errorM: errorM,
  };
};

export default UserAPI;
