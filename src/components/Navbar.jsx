import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { Avatar, Badge, Stack, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import avatar from "../assets/661567.jpg";
import { NotificationsOutlined } from "@mui/icons-material";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      py={2}
      sx={{
        px: { xs: 1, sm: 4, md: 6 },
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "black",
        opacity: "1",
        position: "sticky",
        top: "0px",
        zIndex: "10",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img
          className="logo"
          src={logo}
          alt="logo"
          height={45}
          width={45}
          style={{ marginRight: "20px" }}
        />
        <Typography
          className="site-title"
          color="white"
          variant="h6"
          fontWeight="bold"
          ml={2}
        >
          Youtube 2.0
        </Typography>
      </Link>
      <SearchBar />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ boxSizing: "border-box" }}
      >
        <Badge
          badgeContent={4}
          color="error"
          sx={{
            mr: 3,
            cursor: "pointer",
            display: { xs: "none", sm: "block" },
          }}
        >
          <NotificationsOutlined sx={{ color: "white", fontSize: "30px" }} />
        </Badge>
        <Avatar alt="profile picture" src={avatar} sx={{marginLeft: "5px"}} />
      </Stack>
    </Stack>
  );
};

export default Navbar;
