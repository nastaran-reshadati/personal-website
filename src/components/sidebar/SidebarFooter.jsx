import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import { Favorite } from "@mui/icons-material";

const SidebarFooter = () => {
  return (
    <>
      <Divider sx={{ m: 1.5}}variant="middle" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: 2,
        }}
      >
        <Typography sx={{ mx: 1 }}>طراحی شده با</Typography>
        <Favorite sx={{ color: "red", verticalAlign: "middle" }} />
      </Box>
    </>
  );
};

export default SidebarFooter;
