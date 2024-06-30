import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchFromAPI.js";
import Loading from "./Loading.jsx";
import { formatNumber } from "../utils/functions";

import { Videos } from "./";

import VideoButtons from "./VideoButtons.jsx";

const VideoDetail = () => {
  const [videos, setVideos] = useState([]);
  const [videoDetail, setVideoDetail] = useState(null);
  const [channelDetail, setChannelDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      const relatedVideos = await fetchData(
        `search?relatedToVideoId=${params.id}&part=id,snippet&type=video&maxResults="50"`
      );
      const videoData = await fetchData(
        `videos?part=snippet,statistics&id=${params.id}`
      );
      const channelData = await fetchData(
        `channels?snippet&id=${videoData.data.items[0].snippet.channelId}`
      );

      setVideos(relatedVideos.data.items);
      setVideoDetail(videoData.data.items[0]);
      setChannelDetail(channelData.data.items[0]);
      setIsLoading(false);
    };

    getData();
  }, [params.id]);

  if (isLoading) return <Loading />;

  return (
    <Box
      sx={{
        margin: "0 auto",
        maxWidth: "1700px",
        width: "100%",
        minHeight: "100vh",
        px: { xs: 0, lg: 2 },
      }}
    >
      <Stack
        sx={{
          flexDirection: { xs: "column", lg: "row" },
          flexWrap: "nowrap",
          gap: 4,
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box>
            <Box
              sx={{
                px: { xs: 1, md: 1, lg: "40px" },
                aspectRatio: "16/9",
                minWidth: "300px",
              }}
            >
              <ReactPlayer
                width="100%"
                height="100%"
                controls
                url={`https://www.youtube.com/watch?v=${params.id}`}
              />
            </Box>
          </Box>

          <Stack
            sx={{ px: { xs: "8px", md: 1, lg: 5 } }}
            mt={3}
            direction="column"
          >
            <Typography
              sx={{ fontSize: { xs: "17px", sm: "23px", md: "26px" } }}
              variant="h5"
              color="#fff"
            >
              {videoDetail?.snippet?.title}
            </Typography>
            <VideoButtons
              videoDetail={videoDetail}
              channelDetail={channelDetail}
            />

            <Typography
              variant="body2"
              color="#fff"
              sx={{
                mt: 3,
                bgcolor: "#272727",
                borderRadius: "10px",
                padding: "15px 10px",
                lineHeight: "25px",
              }}
            >
              {`${formatNumber(videoDetail?.statistics?.viewCount)} views`}
              <br />
              {`Published at ${videoDetail?.snippet?.publishedAt}`}
              <br />
              <br />
              {videoDetail?.snippet?.description}
            </Typography>
          </Stack>
        </Box>
        <Box
          flex={1}
          sx={{
            width: "100%",
            paddingRight: { xs: 1, lg: "56px" },
            boxSizing: "border-box",
          }}
        >
          <Videos videos={videos} channelDetail={channelDetail} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
