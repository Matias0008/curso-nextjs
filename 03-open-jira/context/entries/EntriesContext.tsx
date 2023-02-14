import { createContext } from "react";
import { Entry } from "../../interfaces";

interface Context {
  entries: Entry[];
  addNewEntry: (description: string) => void;
  updateEntry: (entry: Entry, showSnackBar: boolean) => void;
}

export const EntriesContext = createContext({} as Context);
