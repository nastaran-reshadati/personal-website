import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "tanha",
    button: {
      fontFamily: "tahoma",
      fontSize: "1rem",
    },
  },
  palette: {
    text: {
      primary: "rgba(202,203,206)",
      secondary: "#46505A",
      orange: "oranged",
    },
    mode: "dark",
    primary: {
      main: "#bd93f9",
    },
    secondary: {
      main: "#141850",
    },
    custom: {
      light: "#ffc938",
      main: "#f57c00",
      dark: "#fa2356",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
  },
});
