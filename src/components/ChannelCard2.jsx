import React from "react";

import { Box, CardMedia, CardContent, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  demoProfilePicture,
} from "../utils/constants";

import { addComma } from "../utils/functions";

const ChannelCard = (props) => {
  return (
    <Box
      sx={{
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "358px",
        height: "100%",
        marginTop: `${props.marginTop}`,
      }}
    >
      <Link to={`/channel/${props?.channel?.id}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            image={
              props?.channel?.snippet?.thumbnails?.medium?.url ||
              demoProfilePicture
            }
            sx={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              mb: 2,
            }}
          />
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {props?.channel?.snippet?.title}
            <CheckCircle
              sx={{
                fontSize: "15px",
                color: "gray",
                ml: "5px",
                verticalAlign: "middle",
              }}
            />
          </Typography>
          <Typography variant="subtitle2" color="gray">
            {props?.channel?.statistics?.subscriberCount
              ? `${addComma(
                  props.channel.statistics.subscriberCount
                )} subscribers`
              : null}
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
