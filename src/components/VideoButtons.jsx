import {
  ExpandMore,
  NotificationsActive,
  NotificationsOffOutlined,
  NotificationsOutlined,
  PersonRemove,
  ThumbDown,
  ThumbDownOutlined,
  ThumbUp,
  ThumbUpOutlined,
} from "@mui/icons-material";
import { Box, Button, Menu, MenuItem, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture, demoSubscribers } from "../utils/constants";
import { formatNumber } from "../utils/functions";
import MoreOptionsButton from "./moreOptionsButton";

const VideoButtons = (props) => {
  const [likeState, setLikeState] = useState(false);
  const [disLikeState, setDisLikeState] = useState(false);
  const likeToggler = () => {
    if (!likeState && !disLikeState) {
      setLikeState(true);
    }
    if (!likeState && disLikeState) {
      setLikeState(true);
      setDisLikeState(false);
    }
    if (likeState && !disLikeState) {
      setLikeState(false);
    }
  };

  const disLikeToggler = () => {
    if (!likeState && !disLikeState) {
      setDisLikeState(true);
    }
    if (likeState && !disLikeState) {
      setDisLikeState(true);
      setLikeState(false);
    }
    if (!likeState && disLikeState) {
      setDisLikeState(false);
    }
  };
  const { channelDetail, videoDetail } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (props) => {
    setAnchorEl(null);
  };

  return (
    <Stack
      direction="row"
      mt={2}
      sx={{
        borderBottom: "solid 1px #3F3F3F",
        paddingBottom: "16px",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      <Link to={`/channel/${props.channelDetail?.id}`}>
        <img
          alt="profile"
          style={{ borderRadius: "50%", border: "none" }}
          width="50px"
          height="50px"
          src={
            channelDetail?.snippet?.thumbnails?.default?.url ||
            demoProfilePicture
          }
        />
      </Link>
      <Box ml={2} pr={2}>
        <Typography
          variant="subtitle1"
          color="#fff"
          sx={{
            fontSize: {
              xs: "13px",
              sm: "18px",
              md: "22px",
              marginRignt: "100%",
            },
          }}
        >
          {videoDetail?.snippet?.channelTitle}
        </Typography>
        <Typography variant="subtitle2" color="gray">
          {`${formatNumber(
            channelDetail?.statistics?.subscriberCount,
            1
          )} Subscribers` || demoSubscribers}
        </Typography>
      </Box>

      <Stack direction="row" sx={{ mt: 2, flexBasis: "100%" }}>
        <Button
          className="button-hider2"
          variant="contained"
          sx={{
            height: "36.5px",
            bgcolor: "#F1F1F1",
            color: "#616161",
            borderRadius: 20,
            mr: 1,
            "&:hover": {
              bgcolor: "#D9D9D9",
            },
          }}
        >
          Join
        </Button>
        <Button
          className="button-hider2"
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="contained"
          sx={{
            mr: "auto",
            height: "36.5px",
            bgcolor: "#272727",
            color: "white",
            borderRadius: 20,
            "&:hover": {
              bgcolor: "#5d5d5d",
            },
          }}
        >
          <NotificationsOutlined sx={{ marginRight: 1 }} />
          Subscribe
          <ExpandMore sx={{ marginLeft: 1 }} />
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          placement="bottom-start"
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bot",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
            <NotificationsActive sx={{ marginRight: 1 }} /> All
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
            <NotificationsOutlined sx={{ marginRight: 1 }} /> Personalized
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
            <NotificationsOffOutlined sx={{ marginRight: 1 }} /> None
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
            <PersonRemove sx={{ marginRight: 1 }} /> Subscribe
          </MenuItem>
        </Menu>

        <Stack
          sx={{
            height: "36.5px",
            bgcolor: "#272727",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 20,
            mr: "8px",
            ml: { xs: "auto", md: "none" },
          }}
        >
          <Button
            variant="contained"
            sx={{
              height: "100%",
              flex: 3,
              boxShadow: "none",
              bgcolor: "#272727",
              color: "white",
              borderRadius: "160px 0 0 160px",
              "&:hover": {
                bgcolor: "#5d5d5d",
              },
            }}
          >
            {likeState ? (
              <ThumbUp sx={{ marginRight: "8px" }} onClick={likeToggler} />
            ) : (
              <ThumbUpOutlined
                sx={{ marginRight: "8px" }}
                onClick={likeToggler}
              />
            )}
            {formatNumber(videoDetail?.statistics?.likeCount, 0)}
            {/* <ThumbUpOutlined /> */}
          </Button>
          <Box sx={{ height: "50%", width: "1px", bgcolor: "gray" }} />

          <Button
            variant="contained"
            sx={{
              height: "100%",
              paddingRight: "25px",
              flex: 1,
              boxShadow: "none",
              bgcolor: "#272727",
              color: "white",
              borderRadius: "0 160px 160px 0",
              "&:hover": {
                bgcolor: "#5d5d5d",
              },
            }}
          >
            {disLikeState ? (
              <ThumbDown onClick={disLikeToggler} />
            ) : (
              <ThumbDownOutlined onClick={disLikeToggler} />
            )}
            {/* <ThumbDownOutlined onClick={()=> setDisLikeState(true)} /> */}
          </Button>
        </Stack>
        <Button
          className="button-hider2"
          variant="contained"
          sx={{
            mr: 1,
            height: "36.5px",
            boxShadow: "none",
            bgcolor: "#272727",
            color: "white",
            borderRadius: 20,
            "&:hover": {
              bgcolor: "#5d5d5d",
            },
          }}
        >
          Share
        </Button>
        <MoreOptionsButton />
      </Stack>
    </Stack>
  );
};

export default VideoButtons;
