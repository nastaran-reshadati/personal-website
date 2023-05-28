import { MenuRounded } from "@mui/icons-material";
import { useContext } from "react";
import { mainContext } from "../../context";
import { Fab, Box } from "@mui/material";

const DrawerActionButton = () => {
  const { setDrawerOpen } = useContext(mainContext);
  return (
    <Box
      sx={{
        position: "absolute",
        m: 2,
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
    >
      <Fab
        aria-label="Sidebar"
        size="small"
        onClick={() => setDrawerOpen(true)}
      >
        <MenuRounded />
      </Fab>
    </Box>
  );
};

export default DrawerActionButton;
