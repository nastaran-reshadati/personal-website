import { createContext } from "react";

export const mainContext = createContext({
  pageNumber: 0,
  handlePageNumber: () => {},
  drawerOpen: false,
  setDrawerOpen: () => {},
});
