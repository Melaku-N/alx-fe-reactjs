import React from 'react';
import { Link } from 'react-router-dom';
import recipeData from '../data.json';

function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipeData.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-lg h-32 w-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p>{recipe.summary}</p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="mt-2 inline-block text-blue-500 hover:underline"
            >
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;