import React from "react";
import {
  HomeRounded,
  Face4,
  BorderColor,
  EmailRounded,
  DataObjectRounded,
  ChatRounded,
} from "@mui/icons-material";

export const tabsData = () => {
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  const tabItems = [
    {
      lable: "صفحه اصلی",
      icon: <HomeRounded sx={{ color: "custom.dark" }} />,
      ...tabProps(0),
    },
    {
      lable: "درباره من",
      icon: <Face4 sx={{ color: "custom.dark" }} />,
      ...tabProps(1),
    },
    {
      lable: "رزومه من",
      icon: <BorderColor sx={{ color: "custom.dark" }} />,
      ...tabProps(2),
    },
    // {
    //   lable: "نمونه کارهای من",
    //   icon: <DataObjectRounded sx={{ color: "custom.dark" }} />,
    //   ...tabProps(3),
    // },
    // {
    //   lable: "نظرات کارفرمایان",
    //   icon: <ChatRounded sx={{ color: "custom.dark" }} />,
    //   ...tabProps(4),
    // },
    // {
    //   lable: "تماس با من",
    //   icon: <EmailRounded sx={{ color: "custom.dark" }} />,
    //   ...tabProps(5),
    // },
  ];
  return tabItems;
};

