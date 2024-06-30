import React from "react";
import loading from "../assets/loading.gif";
import { Box, Stack } from "@mui/material";

const Loading = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "95vh", backgroundColor: "black" }}
    >
      <img src={loading} alt="" />
    </Stack>
  );
};

export default Loading;
