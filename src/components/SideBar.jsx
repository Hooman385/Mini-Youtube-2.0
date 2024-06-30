import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      sx={{
        flexDirection: { xs: "row", md: "column" },
        overflowY: "auto",
        height: { xs: "auto", md: "90%" },
      }}
    >
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category.name)}
          className="category-btn"
          style={{
            background: category.name === selectedCategory ? "#272727" : null,
            color: "white",
          }}
          key={category.name}
        >
          <span
            style={{
              marginRight: "15px",
              paddingTop: "5px",
              color: category.name === selectedCategory ? "white" : "red",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
      <Typography
        className="copyright"
        variant="body2"
        sx={{ color: "#fff", mt: 4 }}
      >
        Copyright 2023 Dreadwing
      </Typography>
    </Stack>
  );
};

export default SideBar;
