import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../components/styles/Recipes.css';

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/v1/recipes/')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  }, []);

  return (
    <div className="recipes-container">
      <h2 className='recipes-header'>Recipes:</h2>
      <div className="recipes-list">
        {recipes.map(recipe => (
          <Link to={`/recipes/${recipe.id}`} key={recipe.id} className="recipe-card-small">
            <img src={recipe.image} alt={recipe.name} className="recipe-image-small" />
            <div className="recipe-details">
              <h3>{recipe.name}</h3>
              <p>Category: {recipe.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Recipes;