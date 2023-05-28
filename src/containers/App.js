import MainLayout from "../Layout/MainLayout";
import { Sidebar } from "../components/sidebar";
import PageContainer from "./PageContainer";
import { useState } from "react";
import Page from "../pages/Page";
import { Typography, Box } from "@mui/material";
import SidebarContainer from "./SidebarContainer";
import { mainContext } from "../context";
import { DrawerActionButton } from "../components/drawer";
import SwipeableViews from "react-swipeable-views";
import { AboutMe, Home } from "../pages";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue);
  };

  return (
    <>
      <mainContext.Provider
        value={{
          pageNumber,
          handlePageNumber,
          drawerOpen,
          setDrawerOpen,
        }}
      >
        <MainLayout>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
          <DrawerActionButton />

          <PageContainer>
            <SwipeableViews index={pageNumber} onChangeIndex={handlePageNumber}>
              <Page pageNumber={pageNumber} index={0}>
                <Home />
              </Page>
              <Page pageNumber={pageNumber} index={1}>
                <AboutMe />
              </Page>
              <Page pageNumber={pageNumber} index={2}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  رزومه من
                </Typography>
              </Page>
              <Page pageNumber={pageNumber} index={3}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  نمونه کارها
                </Typography>
              </Page>
              <Page pageNumber={pageNumber} index={4}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  نظرات دانشجویان
                </Typography>
              </Page>
              <Page pageNumber={pageNumber} index={5}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  ارتباط با من
                </Typography>
              </Page>
            </SwipeableViews>
          </PageContainer>
        </MainLayout>
      </mainContext.Provider>
   
    </>
  );
}

export default App;
