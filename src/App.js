import React, { useState, useEffect } from "react";
import "./App.css";
import RecipeContent from "./components/RecipeContent";

const FEATURED_API = "https://www.themealdb.com/api/json/v1/1/random.php";

const SEARCH_API = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipe, setRecipe] = useState([]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getRecipe(SEARCH_API + searchTerm);
    } else {
      getRecipe(FEATURED_API);
    }
    setSearchTerm("");
  };

  const getRecipe = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.meals);
        console.log(data.meals);
      });
  };

  useEffect(() => {
    getRecipe(FEATURED_API);
  }, []);

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="header">
        <h1 className="header__h1">Recipe App</h1>
        <form onSubmit={handleOnSubmit}>
          <input
            type="search"
            className="header__search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </div>
      <div className="recipe">
        {recipe?.length > 0 &&
          recipe?.map((recipe) => (
            <RecipeContent key={recipe.idMeal} {...recipe} />
          ))}
      </div>
    </>
  );
}

export default App;
