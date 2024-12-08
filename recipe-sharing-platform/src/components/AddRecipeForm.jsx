import React, { useState } from 'react';

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!title || !ingredients || !steps) {
      setError('All fields are required.');
      return;
    }

    const ingredientsList = ingredients.split(',').map(ingredient => ingredient.trim());
    if (ingredientsList.length < 2) {
      setError('Please provide at least two ingredients.');
      return;
    }

    onAddRecipe({
      title,
      ingredients: ingredientsList,
      steps: steps.split('\n').map(step => step.trim()),
    });

    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="title">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="ingredients">Ingredients (comma separated)</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
            rows="4"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="steps">Preparation Steps (one per line)</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
            rows="6"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md">
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;