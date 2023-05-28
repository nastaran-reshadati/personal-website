import React from "react";
import { Drawer } from "@mui/material";
import { SidebarContent } from "../sidebar";
import { useContext } from "react";
import { mainContext } from "../../context";

const PortfolioDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useContext(mainContext);

  return (
    <Drawer
      open={drawerOpen}
      variant="temporary"
      onClose={() => setDrawerOpen(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: 230,
        },
        display: {
          xs: "block",
          sm: "block",
          md: "block",
          lg: "none",
          xl: "none",
        },
      }}
    >
      <SidebarContent />
    </Drawer>
  );
};

export default PortfolioDrawer;
