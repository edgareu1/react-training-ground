import React, { useState } from "react";
import Recipe from "./components/Recipe";

function App(props) {
  const APP_ID = '5b82e715';
  const APP_KEY = '2e4b43adf6d0f870b97747e637895db5';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  function getRecipes() {
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then(response => response.json())
    .then(data => {
      let recipesList = data.hits.map(recipe => {
        return (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={Math.round(recipe.recipe.calories)}
            image={recipe.recipe.image}
          />
        );
      });
      setRecipes(recipesList);
    });
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div>
      <h1>Recipe App</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" className="search-bar" onChange={handleChange}/>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes}
      </div>
    </div>
  );
}

export default App;
