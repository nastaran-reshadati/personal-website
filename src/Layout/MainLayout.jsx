import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { theme } from "../Layout/thems";
import Grid from "@mui/material/Unstable_Grid2";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({ children }) => {
  return (
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <Helmet>
              <title>وب سایت شخصی نسترن رشادتی</title>
            </Helmet>
            {/* Grid System */}
            <Grid container sx={{ height: "100vh" }}>
              {children}
            </Grid>
            {/* {children} */}
          </HelmetProvider>
        </ThemeProvider>
      </CacheProvider>
 
  );
};

export default MainLayout;
