import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useRecipeStore } from "./components/recipeStore";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

const App = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    const fetchedRecipes = [
      {
        id: 1,
        title: "Spaghetti Bolognese",
        description: "A classic Italian dish",
      },
      {
        id: 2,
        title: "Chicken Curry",
        description: "Spicy and delicious chicken curry",
      },
      {
        id: 3,
        title: "Vegetable Stir Fry",
        description: "Healthy and quick stir fry",
      },
    ];

    setRecipes(fetchedRecipes);
  }, [setRecipes]);

  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
        <FavoritesList /> {}
        <RecommendationsList /> {}
      </div>
    </Router>
  );
};

export default App;
