import React from "react";
import { useState, useEffect } from "react";
import { Typography, Stack, Box } from "@mui/material";
import { SideBar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loading from "./Loading";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const videoData = await fetchFromAPI(
        `search?part=snippet&q=${selectedCategory}`
      );
      setVideos(videoData.items);

      setIsLoading(false);
    };
    getData();
  }, [selectedCategory]);
  if (isLoading) return <Loading />;
  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          width: { xs: "auto", md: "250px" },
          height: { xs: "auto", md: "100vh" },
          borderRight: "solid 1px #3d3d3d",
          px: { xs: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          mb={2}
          fontWeight="bold"
          sx={{ color: "white", fontSize: { xs: "20px", sm: "25px" } }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
