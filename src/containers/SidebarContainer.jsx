import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

const SidebarContainer = ({ children }) => {
  return (
    <Grid
      xs={0}
      sm={0}
      md={3}
      lg={2}
      xl={2}
      sx={{
        bgcolor: "secondary.main",
        heigh: "100vh",
        color: "text.primary",
        overflowY: "auto",
        msOverflowX: "hidden",
      }}
    >
      {children}
    </Grid>
  );
};

export default SidebarContainer;
