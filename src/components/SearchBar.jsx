import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue) {
      navigate(`/search/${searchValue}`);
      setSearchValue("");
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          backgroundColor: "#181818",
          borderRadius: "160px",
          border: "solid 1px #404040",
          paddingLeft: "16px",
          boxShadow: "none",
          maxWidth: "450px",
          width: "100%",
          height: "45px",
        }}
      >
        <input
          style={{
            backgroundColor: "#181818",
            color: "white",
            "&:placeholder": { fontSize: "100px" },
          }}
          className="search-bar"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div
          className="search-icon-div"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            background: "#272727",
            flexBasis: "20%",
            height: "45px",
            borderRadius: "0 160px 160px 0",
            borderRight: "solid 1px #303030",
            marginBottom: "1px",
            marginRight: "0.5px",
            cursor: "pointer",
          }}
        >
          <Search
            sx={{
              height: "60%",
              width: "60%",
              color: "white",
              fontSize: "10px",
            }}
          />
        </div>
      </form>
    </>
  );
};

export default SearchBar;
