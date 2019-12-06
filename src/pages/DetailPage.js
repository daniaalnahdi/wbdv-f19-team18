import React from "react";
import RecipeService from "../service/RecipeService";
import RecipeLikes from "../components/RecipeLikes";

const user = {
  likedRecipes: [
    {
      recipeTitle: "Beef Burgundy",
      recipeId: 101141
    },
    {
      recipeTitle: "Kale Soup",
      recipeId: 702741
    }
  ]
};

const likes = {
  totalLikes: 12,
  likedBy: [
    {
      name: "User 1",
      username: "username1"
    },
    {
      name: "User 2",
      username: "username2"
    }
  ]
};

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeId: this.props.recipeId,
      recipe: null,
      liked: this.isLiked()
    };
  }

  componentDidMount = () => {
    if (!this.state.recipe) {
      const recipeService = RecipeService.getInstance();
      recipeService.searchRecipeInfoById(this.props.recipeId).then(recipe => {
        this.setState(prevState => {
          return {
            recipeId: prevState.recipeId,
            recipe: recipe,
            isLiked: prevState.isLiked
          };
        });
      });
    }
  };

  //Checks if the recipe is liked by the user
  isLiked = () => {
    // need to iterate over user's list of liked recipes
    return false;
  };

  //Adds recipe
  likeRecipe = () => {
    console.log("liked");
    this.setState(prevState => {
      return {
        recipeId: prevState.recipeId,
        recipe: prevState.recipe,
        isLiked: true
      };
    });
  };

  //Unlike Recipe
  unlikeRecipe = () => {
    console.log("unlike");
    this.setState(prevState => {
      return {
        recipeId: prevState.recipeId,
        recipe: prevState.recipe,
        isLiked: false
      };
    });
  };

  renderLikeButton = () => {
    if (this.state.isLiked) {
      return (
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            this.unlikeRecipe();
          }}
        >
          Unlike
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            this.likeRecipe();
          }}
        >
          Like
        </button>
      );
    }
  };

  render = () => {
    const recipe = this.state.recipe;
    return (
      <div>
        <h1 className="text-center">
          {recipe ? recipe.title : "Recipe Title"}
        </h1>
        <img
          className="my-5 mx-auto d-block"
          alt=""
          src={recipe && recipe.image}
        />
        <div className="row">
          <h5 className="col-4 text-center">
            Prep Time: {recipe && recipe.preparationMinutes}
          </h5>
          <h5 className="col-4 text-center">
            Cook Time: {recipe && recipe.cookingMinutes}
          </h5>
          <h5 className="col-4 text-center">
            Serves: {recipe && recipe.servings}
          </h5>
        </div>
        <div className="m-3">
          <h4>Instructions:</h4>
          <p>{recipe && recipe.instructions}</p>
        </div>
        {this.renderLikeButton(this.state.isLiked)}
        <RecipeLikes totalLikes={likes.totalLikes} likedBy={likes.likedBy} />
      </div>
    );
  };
}

export default DetailPage;
