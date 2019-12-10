import React from "react";
import { Link } from "react-router-dom";

import RecipeService from "../service/RecipeService";
import RecipeDetailsLikes from "../components/RecipeDetailsLikes";
import RecipeDetailsComments from "../components/RecipeDetailsComments";

// const recipeInteractions = {
//   likedBy: [
//     {
//       name: "User 1",
//       username: "username1"
//     },
//     {
//       name: "User 2",
//       username: "username2"
//     }
//   ],
//   reviews: [
//     {
//       reviewId: 1,
//       user: {
//         name: "User 1",
//         username: "username1",
//         userId: 123
//       },
//       heading: "Review 1",
//       body: "Yum"
//     },
//     {
//       reviewId: 2,
//       user: {
//         name: "User 2",
//         username: "username2",
//         userId: 234
//       },
//       heading: "Review 2",
//       body: "Good"
//     }
//   ]
// };

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    console.log("user:", this.props.user);
    this.state = {
      recipeId: this.props.recipeId,
      recipe: null,
      liked: false
    };
  }

  componentDidMount = () => {
    console.log("detail page Component did mount", this.state.recipeId);
    if (!this.state.recipe) {
      const recipeService = RecipeService.getInstance();
      recipeService.getAdminRecipeById(this.props.recipeId).then(recipe => {
        if (recipe.status === "incorrect recipe id") {
          recipeService.searchRecipeInfoById(this.props.recipeId).then(recipe => {
            recipeService.getRecipeInteractions(this.props.recipeId).then(interactions => {
              recipe = {
                ...recipe,
                interactions: interactions
              };
              console.log(recipe);
              this.setState(prevState => {
                return {
                  recipeId: prevState.recipeId,
                  recipe: recipe,
                  isLiked: this.isLiked()
                };
              });
            });
          });
        } else {
          this.setState(prevState => {
            return {
              recipeId: prevState.recipeId,
              recipe: recipe,
              isLiked: this.isLiked()
            };
          });
        }
      });
    }
  };

  // componentWillReceiveProps(nextProps){
  //   if(this.props.recipeId !== nextProps.recipeId){
  //     this.setState({
  //       recipeId: nextProps.recipeId,
  //       recipe: nextProps.recipe,
  //       liked: nextProps.liked
  //     })
  //   }
  // }

  /* LIKE FUNCTIONALITY */
  //TODO check if the recipe has been liked
  isLiked = () => {
    if (this.props.isLoggedIn && this.props.user.likedRecipes) {
      this.props.user.likedRecipes.forEach(recipe => {
        if (recipe.id === this.state.recipeId || recipe.id === this.state.recipeId) {
          return true;
        }
      });
      return false;
    }
  };

  likeRecipe = () => {
    console.log(this.props.user._id, this.state.recipeId);
    this.props.likeRecipe(this.props.user._id, this.state.recipeId);
    this.setState(prevState => {
      return {
        recipeId: prevState.recipeId,
        recipe: prevState.recipe,
        isLiked: true
      };
    });
  };

  unlikeRecipe = () => {
    this.props.unlikeRecipe(this.props.user._id, this.state.recipeId);
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
      return <Link to="/login">Login to Like or Review!</Link>;
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

  /* REVIEW FUNCTIONALITY */

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
        <RecipeDetailsLikes likedBy={(recipe && recipe.interactions.likedBy) ? recipe.interactions.likedBy : []} />
        <RecipeDetailsComments
          isLoggedIn={this.props.isLoggedIn}
          user={this.props.user}
          reviews={(recipe && recipe.interactions.comments) ? recipe.interactions.comments : []}
          recipeId={this.state.recipeId}
          admin={this.props.admin}
        />
      </div>
    );
  };
}

export default DetailPage;
