import { NavLink, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

// importing the sidebar css style
import "../components/styles/Sidebar.css";

// for using the react icons
import { PiBowlFoodBold } from "react-icons/pi";
import { FaPersonRays } from "react-icons/fa6";

function Sidebar() {

  // using the useStates for the categories adn filter search
  const [categories, setCategories] = useState([]);
  const [params, setParams] = useSearchParams();

  const selectedCategory = params.get("category");

  // Fetching the api data by using the useEffect hooks

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories || []));
  }, []);

  return (
    
    <aside className="sidebar">
      <h2 className="logo"> Recipe Vault <PiBowlFoodBold/></h2>

      <nav className="menu">
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/logout">Logout</NavLink>
      </nav>

      {/* for the categories section */}

      <div className="categories">

        <h4>CATEGORIES</h4>

        <button
          className={!selectedCategory ? "active-cat" : ""}
          onClick={() => setParams({})}>
          All
        </button>

        {categories.slice(0, 14).map((cat) => (

          <button
            key={cat.idCategory}
            className={
              selectedCategory === cat.strCategory ? "active-cat" : ""
            }
            onClick={() => setParams({ category: cat.strCategory })}
          >
            {cat.strCategory}
          </button>

        ))}
      </div>

      {/* For that last profile section */}

      <div className="profile">
        <div className="avatar"><FaPersonRays/></div>
        <div>
          <strong>Bharath </strong>
          <span>Home Chef</span>
        </div>
      </div>
      
    </aside>
  );
}

export default  Sidebar;