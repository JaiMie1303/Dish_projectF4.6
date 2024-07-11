import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../components/styles/Categories.css';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/v1/categories/') 
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Ошибка при получении категорий:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      axios.get(`http://127.0.0.1:8000/api/v1/categories/${selectedCategory.id}/recipes/`)
        .then(response => {
          setRecipes(response.data);
        })
        .catch(error => {
          console.error('Ошибка при получении рецептов:', error);
        });
    }
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    const categoryId = parseInt(event.target.value);
    const category = categories.find(category => category.id === categoryId);
    setSelectedCategory(category);
  };

  return (
    <div className='list-container'>
      <h2 className='header-categories'>Recipe Categories:</h2>
      <select onChange={handleCategoryChange}>
        <option value="">Выберите категорию</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      
      {selectedCategory && (
        <div className='food-container'>
          <h3 className='header-recipe-categories'>Блюда в категории "{selectedCategory.name}":</h3>
          <ul className='food-list'>
            {recipes.map(recipe => (
              <li key={recipe.id}>
                <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Categories;