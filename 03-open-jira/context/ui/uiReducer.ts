import { UIState } from "./";

type UIActionType =
  | { type: "[UI] - OpenSidebar" }
  | { type: "[UI] - CloseSidebar" }
  | { type: "[UI] - setIsAdding"; payload: boolean }
  | { type: "[UI] - startDragging" }
  | { type: "[UI] - endDragging" };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "[UI] - OpenSidebar":
      return {
        ...state,
        sideMenuOpen: true,
      };
    case "[UI] - CloseSidebar":
      return {
        ...state,
        sideMenuOpen: false,
      };
    case "[UI] - setIsAdding":
      return {
        ...state,
        isAddingEntry: action.payload,
      };
    case "[UI] - startDragging":
      return {
        ...state,
        isDragging: true,
      };
    case "[UI] - endDragging":
      return {
        ...state,
        isDragging: false,
      };
    default:
      return state;
  }
};
