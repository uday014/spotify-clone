import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDataLayerValue } from "../DataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input placeholder="Search for Artists, Song or Albums" type="text" />
      </div>
      <div className="header_right">
        <AccountCircleIcon
          className="userimg"
          src={user?.images[0]?.url}
          alt="RQ"
        />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
