import React, { useContext, useState, useEffect } from "react";
import { GlobalState } from "../GlobalState";
import BasicTable from "./UserTable";

const SearchBar = () => {
  const state = useContext(GlobalState);
  const [res, setres] = useState("");
  const [ra, setRa] = useState([]);

  useEffect(() => {
    setRa(state.user[0]);
  }, [state.user[0]]);

  const handleSubmit = () => {
    if (res.includes("@")) {
      setRa(ra.filter((r) => r.email.toLowerCase() === res.toLowerCase()));
    } else {
      setRa(ra.filter((r) => r.name.first.toLowerCase() === res.toLowerCase()));
    }

    console.log(ra);
  };
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setres(e.target.value)}
      />
      <button className="sbutton" onClick={handleSubmit}>Search</button>
      <BasicTable ra={ra}></BasicTable>
    </div>
  );
};

export default SearchBar;
