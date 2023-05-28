import React from "react";
import { Avatar, Typography } from "@mui/material";
import myImage from "../../asset/IMG_6409.jpeg";

const SidebarHeader = () => {
  return (
    <>
      <Avatar
        sx={{
          height: "180px",
          width: "180px",
          margin: "1px auto",
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          },
        }}
        src={myImage}
      >
        NR
      </Avatar>
      <Typography sx={{ color: "custom.dark" }} variant="h6">
        نسترن رشادتی
      </Typography>
      <Typography variant="caption">برنامه نویس جونیور فرانت اند</Typography>
    </>
  );
};

export default SidebarHeader;
