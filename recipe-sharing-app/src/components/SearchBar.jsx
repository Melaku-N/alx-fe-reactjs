import React from "react";
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    filterRecipes();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={handleSearchChange}
        style={{ padding: "8px", fontSize: "16px", marginBottom: "20px" }}
      />
    </div>
  );
};

export default SearchBar;
