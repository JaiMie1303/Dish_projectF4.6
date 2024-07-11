import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Recipes from './Recipes.jsx';
import Categories from './Categories.jsx';
import Header from './Header.jsx';
import Recipe from './Recipe.jsx';
import Category from './Category.jsx';
import Footer from './Footer.jsx';
import RecipesByCategory from './RecipesByCategory.jsx';
import '../components/styles/App.css';
import '../index.css';

function App() {
  return (
    <>
      <Header />
      <div className='app-container'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/recipes/:recipeId" element={<Recipe />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/category/:categoryId" element={Category} />
              <Route path="/categories/:categoryId/recipes" element={<RecipesByCategory />}/>
            </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;