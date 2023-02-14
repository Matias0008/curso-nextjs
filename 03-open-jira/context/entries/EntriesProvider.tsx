import { useReducer, useEffect } from "react";
import { useSnackbar } from "notistack";

import { EntriesContext, entriesReducer } from "./";
import { Entry } from "../../interfaces";
import { entriesApi } from "../../api";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

interface ProviderProps {
  children: React.ReactNode;
}

export const EntriesProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);
  const { enqueueSnackbar } = useSnackbar();

  const addNewEntry = async (description: string) => {
    // Hago una peticion post en el backend
    const { data } = await entriesApi.post<Entry>("/entries", { description });
    // Con un dispatch actualizo mis entries en el frontend
    dispatch({
      type: "[Entry] - AddEntry",
      payload: data,
    });
  };

  const updateEntry = async (
    { _id, description, status }: Entry,
    showSnackBar = true
  ) => {
    try {
      const { data } = await entriesApi.put(`/entries/${_id}`, {
        description,
        status,
      });

      dispatch({
        type: "[Entry] - EntryUpdated",
        payload: data,
      });

      if (showSnackBar) {
        enqueueSnackbar("Entrada actualizada", {
          variant: "success",
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      }
    } catch (error) {}
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>("/entries");
    dispatch({ type: "[Entry] - InitialEntryLoad", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
