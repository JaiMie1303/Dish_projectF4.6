import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function RecipesByCategory() {
  const location = useLocation();
  const categoryId = location.pathname.split('/')[2]; 

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/v1/categories/${categoryId}/recipes`)
      .then(response => {
        setRecipes(response.data.recipes);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  }, [categoryId]);

  return (
    <div>
      <h1>Recipes by Category {categoryId}</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipesByCategory;