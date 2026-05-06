// imporitng the hooks, react router
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// importing thr recipe card component
import RecipeCard from "../components/RecipeCard";

// importing the recipe seperate css file
import "../pages/styles/Recipes.css";


export default function Recipes() {

  const [params, setParams] = useSearchParams();
  const q = params.get("q") || "";
  const category = params.get("category") || "";

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);


  // by using the useEffect fetching that API

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const url = category
        ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        : `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`;
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.meals || []);
      setLoading(false);
    }
    fetchData();
  }, [q, category]);

  return (
    <>
      <h1>Recipes</h1>
      <input
        className="search" placeholder="Search your favorite food here..."
        value={q}
        onChange={(e) =>
          setParams(e.target.value ? { q: e.target.value } : {})
        }
      />

      {loading && <p>Loading...</p>}

      {!loading && recipes.length === 0 && (
        <div className="no-results">
          <h2>No results found</h2>
        </div>
      )}


      {/* adding the recipe card data */}
      <div className="grid">
        {recipes.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </>
  );
}