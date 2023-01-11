import { createContext } from "react";

interface Context {
  sideMenuOpen: boolean;
  openSidebarMenu: () => void;
  closeSidebarMenu: () => void;
}

export const UIContext = createContext({} as Context);
