import { useReducer } from "react";

import { UIContext, uiReducer } from "./";

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
};

export interface UIState {
  sideMenuOpen: boolean;
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

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSidebarMenu,
        closeSidebarMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
