// imporitng react router and hooks

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

// mporting the useFav context
import { useFavorites } from "../context/FavoritesContext";

// importing the recipedetail seprate css
import "../pages/styles/RecipeDetail.css";

// adding the react icon go back arrow
import { RiArrowGoBackFill } from "react-icons/ri";


 function RecipeDetail() {
  const { id } = useParams();
  const { toggleFavorite, favorites } = useFavorites();
  const [meal, setMeal] = useState(null);

  const isFav = favorites.some((item) => item.idMeal === id);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  return (
    <div className="detail-clean">

      {/* back button for the recipe detail page */}
      <Link to="/recipes" className="back-btn-clean">
        <RiArrowGoBackFill/> Back to recipes
      </Link>

      {/* image secion */}
      <div className="detail-image-clean">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>

      {/* contetn for cooking */}
      <div className="detail-content-clean">
        <div className="detail-title-row">
          <h1>{meal.strMeal}</h1>


          {/* for adding to the fav section */}
          <button
            className={`fav-btn-clean ${isFav ? "active" : ""}`}
            onClick={() => toggleFavorite(meal)}
          >
            {isFav ? "Added to Favorites" : " + Add to Favorites"}
          </button>
        </div>

        <h3>Instructions</h3>
        <p>{meal.strInstructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;