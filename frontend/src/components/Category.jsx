import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Category() {
  const [category, setCategory] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/v1/category/${categoryId}/`)
      .then(response => {
        setCategory(response.data);
      })
      .catch(error => {
        console.error('Error fetching category:', error);
      });
  }, [categoryId]);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{category.name}</h2>
      <p>{category.description}</p>
    </div>
  );
}

export default Category;