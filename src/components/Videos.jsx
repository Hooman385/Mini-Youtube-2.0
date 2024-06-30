import React from "react";

import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = (props) => {
  return (
    <Stack
      gap={5}
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      direction={props.direction || "row"}
      px={props.px}
    >
      {props.videos.map((item, index) => {
        if (item.id.videoId) {
          return (
            <Box key={index}>
              <VideoCard video={item} />
            </Box>
          );
        }
        if (item.id.channelId) {
          return (
            <Box key={index}>
              <ChannelCard channel={item} />
            </Box>
          );
        }
      })}
    </Stack>
  );
};

export default Videos;
