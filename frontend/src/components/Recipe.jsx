import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard.jsx';

const Recipe = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/v1/recipes/${recipeId}`)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.error('Error fetching recipe:', error);
      });
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading recipe...</div>;
  }

  return (
    <RecipeCard recipe={recipe} />
  );
};

export default Recipe;