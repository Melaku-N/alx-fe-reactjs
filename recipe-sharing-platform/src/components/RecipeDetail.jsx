import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipeDetail = recipeData.find(item => item.id === parseInt(id));
    setRecipe(recipeDetail);
  }, [id]);

  if (!recipe) {
    return <div className="text-center">Recipe not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="rounded-lg h-64 w-full object-cover mb-4" />
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-5 mb-4">
          {}
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Cooking Instructions</h2>
        <p>{recipe.summary}</p>
        {}
        <p>1. Step one instruction.</p>
        <p>2. Step two instruction.</p>
        <p>3. Continue cooking until ready.</p>
      </div>
    </div>
  );
}

export default RecipeDetail;