import React from "react";
import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const videoData = await fetchFromAPI(
        `search?part=snippet&q=${params.searchTerm}`
      );
      setVideos(videoData.items);
      setIsLoading(false);
    };
    getData();
  }, [params.searchTerm]);

  if (isLoading) return <Loading />;
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        mb={2}
        fontWeight="bold"
        sx={{ color: "white", fontSize: { xs: "20px", sm: "25px" } }}
      >
        Search results for:{" "}
        <span style={{ color: "#F31503" }}>{params.searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
