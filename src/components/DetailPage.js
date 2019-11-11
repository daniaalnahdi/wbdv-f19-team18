import React from 'react';
import RecipeService from "../service/RecipeService";

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeId: this.props.recipeId,
            recipe: null
        }
    }

    componentDidMount = () => {
        if (!this.state.recipe) {
            const recipeService = RecipeService.getInstance();
            recipeService.searchRecipeInfoById(this.props.recipeId)
                .then(recipe => {
                    this.setState(prevState => {
                        return {
                            recipeId: prevState.recipeId,
                            recipe: recipe
                        };
                    });
                });
        }
    };

    render = () => {
        const recipe = this.state.recipe;
        return (
            <div>
                <h1 className="text-center">{(recipe) ? recipe.title : "Recipe Title"}</h1>
                <img className="my-5 mx-auto d-block"
                     alt=""
                     src={recipe && recipe.image}/>
                <div className="row">
                    <h5 className="col-4 text-center">Prep Time: {recipe && recipe.preparationMinutes}</h5>
                    <h5 className="col-4 text-center">Cook Time: {recipe && recipe.cookingMinutes}</h5>
                    <h5 className="col-4 text-center">Serves: {recipe && recipe.servings}</h5>
                </div>
                <div className="m-3">
                    <h4>Instructions:</h4>
                    <p>{recipe && recipe.instructions}</p>
                </div>
            </div>
        );
    };
}

export default DetailPage;