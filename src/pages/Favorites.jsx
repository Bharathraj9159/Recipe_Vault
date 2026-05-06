import { useFavorites } from "../context/FavoritesContext";
import RecipeCard from "../components/RecipeCard";
import { useSearchParams } from "react-router-dom";

// importing the favt module styles
import styles from "../pages/styles/Favorites.module.css";

// adding the react icons for no favt items
import { FaHeartCrack } from "react-icons/fa6";

function Favorites() {
  const { favorites } = useFavorites();
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  // Filter favorites by category if selected
  const filteredFavorites = category
    ? favorites.filter(
        (meal) => meal.strCategory === category
      )
    : favorites;

  return (
    <>
      <h1>Favorites</h1>

      <div className={styles.grid}>

        {filteredFavorites.length === 0 && (

          // if there is no meal data its shows this
          <p className={styles.emptyState}>
            <span className={styles.emptyIcon}><FaHeartCrack/></span>
            <strong>No favorites found</strong>
            <span className={styles.emptyHint}>
              {category
                ? `No favorites in "${category}" category.`
                : "Browse recipes and add your favorites to see them here."}
            </span>
          </p>

        )}

        {/* if we have meal data then that recipe shwon in cards */}
        {filteredFavorites.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </>
  );
}

export default  Favorites;