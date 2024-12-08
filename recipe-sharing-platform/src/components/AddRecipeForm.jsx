import React, { useState } from 'react';

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Recipe title is required.';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required.';
    if (!steps) newErrors.steps = 'Preparation steps are required.';
    
    const ingredientsList = ingredients.split(',').map(ingredient => ingredient.trim());
    if (ingredientsList.length < 2) {
      newErrors.ingredients = 'Please provide at least two ingredients.';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const ingredientsList = ingredients.split(',').map(ingredient => ingredient.trim());
    
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
      {errors.title && <div className="text-red-500 mb-2">{errors.title}</div>}
      {errors.ingredients && <div className="text-red-500 mb-2">{errors.ingredients}</div>}
      {errors.steps && <div className="text-red-500 mb-2">{errors.steps}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="title">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
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