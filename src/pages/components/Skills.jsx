import React from "react";
import { Typography, Chip, Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

const Skills = ({ name, color, icon, precent }) => {
  console.log(precent);

  return (
    <Box sx={{ margin: "20px", display: "flex", alignItems: "center" }}>
      <Box sx={{ marginLeft: "5px" }}>
        <Typography sx={{ color: color }} variant="body1" mx="10">
          {Math.round(precent)}%
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          value={precent}
          variant="determinate"
          sx={{
            padding: "4px",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        />
      </Box>
      <Box>
        <Chip
          label={<h2>{name}</h2>}
          sx={{
            color: color,
            textAlign: "center",
            p: 3,
            borderRadius: 10,
          }}
          icon={<Box component="img" sx={{ height: "30px" }} src={icon} />}
        />
      </Box>
    </Box>
  );
};

export default Skills;
