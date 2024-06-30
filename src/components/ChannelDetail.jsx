import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";

import { ChannelCard2, Videos } from "./";
import Loading from "./Loading";

const ChannelDetail = () => {
  const params = useParams();

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const channelData = await fetchFromAPI(
        `channels?part=snippet,statistics&id=${params.id}`
      );
      const videoData = await fetchFromAPI(
        `search?channelId=${params.id}&part=snippet,&order=date`
      );

      setChannelDetail(channelData.items[0]);
      setVideos(videoData.items);
      setIsLoading(false);
    };

    // (data) => setChannelDetail(data.items[0])

    // .then((data) => setVideos(data.items));
    getData();
  }, [params.id]);
  if (isLoading) return <Loading />;
  return (
    <Box sx={{ minHeight: "95vh" }}>
      <Box>
        <Box
          style={{
            background: "rgb(180,62,58)",
            background:
              "linear-gradient(90deg, rgba(180,62,58,1) 0%, rgba(253,243,29,1) 84%, rgba(252,241,69,1) 100%)",
            height: "300px",
          }}
        ></Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <ChannelCard2 channel={channelDetail} marginTop={"-93px"} />
        </Box>
        <Box display="flex" p={2}>
          {/* <Box sx={{ mr: { sm: "125px" } }}></Box> */}
          <Videos videos={videos} />
        </Box>
      </Box>
      Hello
    </Box>
  );
};

export default ChannelDetail;
