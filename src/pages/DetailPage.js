import React from "react";
import { Link } from "react-router-dom";

import RecipeService from "../service/RecipeService";
import RecipeDetailsLikes from "../components/RecipeDetailsLikes";
import RecipeDetailsReviews from "../components/RecipeDetailsReviews";

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

const recipeInteractions = {
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
  ],
  totalReviews: 2,
  reviews: [
    {
      id: 123,
      author: {
        name: "User 1",
        username: "username1"
      },
      heading: "Review 1",
      body: "Yum",
      replies: [
        {
          author: {
            name: "User 1",
            username: "username1"
          },
          body: "I agree"
        }
      ]
    },
    {
      id: 1234,
      author: {
        name: "User 2",
        username: "username2"
      },
      heading: "Review 2",
      body: "Good",
      replies: []
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
    console.log(this.props.isLoggedIn);
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

  //TODO check if the recipe has been liked
  isLiked = () => {
    return false;
  };

  likeRecipe = () => {
    this.setState(prevState => {
      return {
        recipeId: prevState.recipeId,
        recipe: prevState.recipe,
        isLiked: true
      };
    });
  };

  unlikeRecipe = () => {
    this.setState(prevState => {
      return {
        recipeId: prevState.recipeId,
        recipe: prevState.recipe,
        isLiked: false
      };
    });
  };

  renderLikeButton = () => {
    if (!this.props.isLoggedIn) {
      return <Link to="/login">Login to Like!</Link>;
    } else {
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
        {this.renderLikeButton()}
        <RecipeDetailsLikes
          totalLikes={recipeInteractions.totalLikes}
          likedBy={recipeInteractions.likedBy}
        />
        <RecipeDetailsReviews
          totalReviews={recipeInteractions.totalReviews}
          reviews={recipeInteractions.reviews}
        />
      </div>
    );
  };
}

export default DetailPage;
