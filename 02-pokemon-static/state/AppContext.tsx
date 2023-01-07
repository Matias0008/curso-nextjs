import { createContext, useState, useContext, useEffect } from "react";

interface Context {
  state: {
    theme: string;
    favorites: string[];
  };
  actions: {
    toggleTheme: () => void;
    toggleFavorite: (id: string) => void;
  };
}

interface Props {
  children: React.ReactNode;
}

const AppContext = createContext({} as Context);

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<string>("dark");
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")!) || []);
  }, []);

  function toggleTheme() {
    setTheme(theme === "dark" ? "white" : "dark");
  }

  // En nuestro array de favoritos almacenaremos las IDS de cada pokemon.
  function toggleFavorite(id: string) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((_id) => _id !== id));
      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites.filter((_id) => _id !== id))
      );
    } else {
      setFavorites([...favorites, id]);
      localStorage.setItem("favorites", JSON.stringify([...favorites, id]));
    }
  }

  return (
    <AppContext.Provider
      value={{
        state: { theme, favorites },
        actions: { toggleTheme, toggleFavorite },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useTheme(): [
  Context["state"]["theme"],
  Context["actions"]["toggleTheme"]
] {
  const { state, actions } = useContext(AppContext);
  return [state.theme, actions.toggleTheme];
}

export function useFavorites(): [
  Context["state"]["favorites"],
  Context["actions"]["toggleFavorite"]
] {
  const { state, actions } = useContext(AppContext);
  return [state.favorites, actions.toggleFavorite];
}
