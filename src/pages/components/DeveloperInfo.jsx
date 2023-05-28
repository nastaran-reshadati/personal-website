import React from "react";
import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const DeveloperInfo = ({ children }) => {
  return (
    <Typography
      variant="body1"
      sx={{
        textAlign: "left",
        color: "black",
        my: "30px",
        py: "5px",
        border: "1px solid #DFDFDD",
        borderRadius: "10px",
      }}
    >
      {children}
      <KeyboardArrowLeftRounded
        sx={{ verticalAlign: "bottom", color: "custom.dark" }}
      />
    </Typography>
  );
};

export default DeveloperInfo;
