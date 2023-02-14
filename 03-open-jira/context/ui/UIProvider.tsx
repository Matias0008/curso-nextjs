import { useReducer } from "react";

import { UIContext, uiReducer } from "./";

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

export interface UIState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

interface ProviderProps {
  children: React.ReactNode;
}

export const UIProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSidebarMenu = () => {
    dispatch({ type: "[UI] - OpenSidebar" });
  };

  const closeSidebarMenu = () => {
    dispatch({ type: "[UI] - CloseSidebar" });
  };

  const setIsAddingEntry = (value: boolean) => {
    dispatch({ type: "[UI] - setIsAdding", payload: value });
  };

  const startDragging = () => {
    dispatch({ type: "[UI] - startDragging" });
  };

  const endDragging = () => {
    dispatch({ type: "[UI] - endDragging" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        startDragging,
        endDragging,
        setIsAddingEntry,
        openSidebarMenu,
        closeSidebarMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
