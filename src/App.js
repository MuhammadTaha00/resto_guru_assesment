import React, { useState } from "react";
import RecipeList from "./components/RecipeList";
import RecipeDetailCard from "./components/RecipeDetails"; 
import recipesData from "./data/recipesData"; 

import "./App.css";

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [userFavorites, setUserFavorites] = useState([]);

  const toggleFavorite = (recipeId) => {
    if (userFavorites.includes(recipeId)) {
      setUserFavorites((prevFavorites) =>
        prevFavorites.filter((id) => id !== recipeId)
      );
    } else {
      setUserFavorites((prevFavorites) => [...prevFavorites, recipeId]);
    }
  };

  return (
    <div className="App">
      <div className="content-container">
        <RecipeList recipes={recipesData} onSelectRecipe={setSelectedRecipe} />
        <RecipeDetailCard
          recipe={selectedRecipe}
          onToggleFavorite={toggleFavorite}
          userFavorites={userFavorites}
        />
        {userFavorites.length > 0 && (
          <div className="user-favorites">
            <h2>Your Favorite Recipes</h2>
            {userFavorites.map((favoriteId) => {
              const favoriteRecipe = recipesData.find(
                (recipe) => recipe.id === favoriteId
              );
              return (
                <li key={favoriteId}>
                  {favoriteRecipe ? favoriteRecipe.title : "Recipe not found"}
                </li>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
