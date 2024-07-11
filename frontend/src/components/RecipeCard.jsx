import React from "react";
import "./styles/RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card-container">
      <div className="recipe-card">
        <h2>{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.title} />
        <p>Category: {recipe.category}</p>
        <p>Ingredients: {recipe.ingredients}</p>
        <p>Instructions: {recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
