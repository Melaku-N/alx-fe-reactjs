import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';
import recipeData from './data.json';

function App() {
  const [recipes, setRecipes] = useState(recipeData);

  const handleAddRecipe = (newRecipe) => {
    const id = recipes.length ? recipes[recipes.length - 1].id + 1 : 1;
    setRecipes([...recipes, { ...newRecipe, id }]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Switch>
          <Route path="/" exact>
            <HomePage recipes={recipes} />
          </Route>
          <Route path="/recipe/:id" component={RecipeDetail} />
          <Route path="/add-recipe">
            <AddRecipeForm onAddRecipe={handleAddRecipe} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;