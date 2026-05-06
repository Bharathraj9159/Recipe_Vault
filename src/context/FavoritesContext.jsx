// iport the hooks from react
import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const toggleFavorite = (meal) => {
    setFavorites((prev) =>
      prev.find((m) => m.idMeal === meal.idMeal)
        ? prev.filter((m) => m.idMeal !== meal.idMeal)
        : [...prev, meal]
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);