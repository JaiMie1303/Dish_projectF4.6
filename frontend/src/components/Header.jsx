import React from "react";
import { Link } from "react-router-dom";
import '../components/styles/App.css';

function Header() {
  return (
    <header>
      <Link to="/" className="header-link">
        Home
      </Link>
      <Link to="/recipes" className="header-link">
        Recipes
      </Link>
      <Link to="/categories" className="header-link">
        Categories
      </Link>
    </header>
  );
}

export default Header;
