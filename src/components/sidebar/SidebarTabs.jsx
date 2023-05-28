import React from "react";
import { Tabs, Tab, Grow } from "@mui/material";
import { useContext } from "react";
import { mainContext } from "../../context";
import { tabsData } from "../data/SidebarTabsData";

const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(mainContext);
  const data = tabsData();
  return (
    <Grow in={true}>
      <Tabs
        scrollButtons="auto"
        variant="scrollable"
        orientation="vertical"
        allowScrollButtonsMobile
        pageNumber={pageNumber}
        onChange={handlePageNumber}
        aria-label="full width tabs example"
      >
        {data.map((item, index) => (
          <Tab
            key={index}
            label={item.lable}
            icon={item.icon}
            iconPosition="end"
            onClick={() => setDrawerOpen(false)}
            sx={{
              overflow: "visible",
              color: "text.primary",
              margin: "4px 0",
              "&.MuiTab-root": {
                minHeight: 78,
              },
            }}
            {...item}
          />
        ))}
      </Tabs>
    </Grow>
  );
};

export default SidebarTabs;
