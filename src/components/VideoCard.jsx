import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import {  CheckCircle } from "@mui/icons-material";

//functions
import { titleLengthFixer } from "../utils/functions";

//utils
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";

const VideoCard = (props) => {
  const {
    video: {
      id: { videoId },
      snippet,
    },
  } = props;
  return (
    <Card
      className="videoCard"
      sx={{
        width: {xs: "320px", sm: "358px"},
        maxWidth: "358px",
        borderRadius: "0",
        boxShadow: "none",
      }}
    >
      <Link to={`/video/${videoId}` || demoVideoUrl}>
        <CardMedia
          component="img"
          sx={{ height: "100%", aspectRatio: "16 / 9" }}
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title || demoVideoTitle}
        />
      </Link>
      <CardContent
        component="div"
        sx={{
          backgroundColor: "#1e1e1e",
          height: "106px",
          width: "358px",
        }}
      >
        <Link to={`video/${videoId}` || demoVideoUrl}>
          <Typography
            sx={{
              width: "300px",
            }}
            color="#fff"
            variant="subtitle1"
            fontWeight="bold"
          >
            {titleLengthFixer(snippet?.title || "")}
          </Typography>
        </Link>
        <Link to={`channel/${snippet?.channelId}` || demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle
              sx={{
                fontSize: "15px",
                color: "gray",
                ml: "5px",
                verticalAlign: "middle",
              }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
