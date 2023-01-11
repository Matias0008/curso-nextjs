import { createContext } from "react";
import { Entry } from "../../interfaces";

interface Context {
  entries: Entry[];
}

export const EntriesContext = createContext({} as Context);
