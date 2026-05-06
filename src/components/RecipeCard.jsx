// importing the reacter router 
import { Link } from "react-router-dom";

// importing the react icons
import { useFavorites } from "../context/FavoritesContext";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";


function RecipeCard({ meal }) {
  const { favorites, toggleFavorite } = useFavorites();

  const isFav = favorites.some((item) => item.idMeal === meal.idMeal);

  return (
    <Link to={`/recipes/${meal.idMeal}`} className="view-link">
      <div className="recipe-card">
        <div className="image-wrapper">
          <img src={meal.strMealThumb} alt={meal.strMeal} />

          <button
            className={`fav-btn ${isFav ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault(); // atop Link navigation
              e.stopPropagation(); // stop event bubbling
              toggleFavorite(meal);
            }}
          >
            {/* applying that react icon here with the style */}
            <FaRegHeart style={{ marginBottom: -3 }} />
          </button>
        </div>

        <div className="card-body">
          <span className="category">{meal.strCategory || "Recipe"}</span>

          <h3>{meal.strMeal}</h3>

          <p>
            View Recipe <IoIosArrowDropright style={{ marginBottom: -3 }} />
          </p>
          
        </div>
      </div>
    </Link>
  );
}


export default RecipeCard;