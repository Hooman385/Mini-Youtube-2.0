import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  BookmarkBorderOutlined,
  FileDownloadOutlined,
  FlagOutlined,
  NotificationsOutlined,
  ShareOutlined,
  SubscriptionsOutlined,
} from "@mui/icons-material";

export default function MoreOptionsButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          boxSizing: "border-box",
          padding: "10px 0 15px 0",
          width: 0,
          height: "36.5px",
          lineHeight: "100%",
          textAlign: "center",
          boxShadow: "none",
          backgroundColor: "#272727",
          color: "white",
          borderRadius: 20,
          border: "none",
          outline: "none",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          "&:hover": {
            bgcolor: "#5d5d5d",
          },
        }}
      >
        ...
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          sx={{ display: "none" , }}
          className="button-hider"
          onClick={handleClose}
        >
          <NotificationsOutlined sx={{ marginRight: 1 }} />
          Subscribe
        </MenuItem>
        <MenuItem
          sx={{ display: "none" }}
          className="button-hider"
          onClick={handleClose}
        >
          <SubscriptionsOutlined sx={{ marginRight: 1 }} />
          Join
        </MenuItem>
        <MenuItem
          sx={{ display: "none" }}
          className="button-hider"
          onClick={handleClose}
        >
          <ShareOutlined sx={{ marginRight: 1 }} />
          Share
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <BookmarkBorderOutlined sx={{ marginRight: 1 }} />
          Save
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FileDownloadOutlined sx={{ marginRight: 1 }} />
          Download
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FlagOutlined sx={{ marginRight: 1 }} />
          Report
        </MenuItem>
      </Menu>
    </div>
  );
}
