import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { EntriesContext, entriesReducer } from "./";
import { Entry } from "../../interfaces";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "Pendiente: Enim incididunt in incididunt ullamco qui eiusmod pariatur officia duis in nostrud consectetur nisi ut.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "En-progreso: Enim magna amet esse non mollit reprehenderit tempor ullamco exercitation ipsum dolor eiusmod.",
      status: "in-progress",
      createdAt: Date.now() - 100,
    },
    {
      _id: uuidv4(),
      description:
        "Terminado: Dolore id voluptate exercitation amet aliqua et exercitation.",
      status: "finished",
      createdAt: Date.now() - 10,
    },
  ],
};

interface ProviderProps {
  children: React.ReactNode;
}

export const EntriesProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
