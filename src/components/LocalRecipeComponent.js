import React from "react";
import { Link } from "react-router-dom";

const LocalRecipeComponent = ({ recipes, deleteRecipe }) => (
  <ul className="list-group">
    {recipes &&
      recipes.map(recipe => (
        <li key={recipe.title} className="list-group-item">
          <Link to={`/localRecipes/${recipe._id}`}>{recipe.title}</Link>
          <button
            onClick={() => deleteRecipe(recipe._id)}
            className="float-right btn btn-danger "
          >
            {/*<i className="fa fa-times"></i>*/}X
          </button>
          <Link to={`/editor/${recipe._id}`}>
            <button className="float-right btn btn-info ">Update</button>
          </Link>
        </li>
      ))}
  </ul>
);

export default LocalRecipeComponent;
