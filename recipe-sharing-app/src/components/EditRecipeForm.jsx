import { useState } from "react";
import { useRecipeStore } from "../recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ ...recipe, title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          required
        />
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description"
          required
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;