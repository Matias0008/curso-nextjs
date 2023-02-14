import { createContext } from "react";

interface Context {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
  startDragging: () => void;
  endDragging: () => void;
  openSidebarMenu: () => void;
  closeSidebarMenu: () => void;
  setIsAddingEntry: (value: boolean) => void;
}

export const UIContext = createContext({} as Context);
