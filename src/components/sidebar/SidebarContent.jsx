import React from "react";
import { Box, Divider } from "@mui/material";

import { SidebarHeader, SidebarFooter, SidebarTabs } from ".";

const SidebarContent = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 3,
      }}
    >
      <SidebarHeader />

      <Divider
        variant="middle"
        sx={{ m: 1.5}}
      />

      <SidebarTabs />

      <SidebarFooter />
    </Box>
  );
};

export default SidebarContent;
