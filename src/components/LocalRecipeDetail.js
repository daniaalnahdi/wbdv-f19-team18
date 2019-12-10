import React from "react";
import localRecipeService from "../service/LocalRecipeService";
import {Link} from "react-router-dom";

const service = localRecipeService.getInstance()

class LocalRecipeDetail extends React.Component{

    constructor(props) {
        super(props);
        console.log("recipeId")
        const recipeId = this.props.match.params.recipeId
        console.log(recipeId)
        this.state = {
            title: '',
            preparationMinutes: '',
            cookingMinutes: '',
            readyInMinutes: '',
            servings: '',
            instructions: '',
            image: '',
            diets: '',
            interactions: null
        }
    }

    componentDidMount() {
        const recipeId = this.props.match.params.recipeId
        console.log("recipe_id in component did mount")
        if ((recipeId != null)) {
            service.findRecipeById(recipeId).then(recipe => {
                console.log(recipe)
                this.setState({
                    // recipe: {
                    _id: recipe._id,
                    title: recipe.title,
                    preparationMinutes: recipe.preparationMinutes,
                    cookingMinutes: recipe.cookingMinutes,
                    readyInMinutes: recipe.readyInMinutes,
                    servings: recipe.servings,
                    instructions: recipe.instructions,
                    image: recipe.image,
                    diets: recipe.diets,
                    interactions: recipe.interactions
                    // }
                })
            })
        }
    }



    render = () => {
        return (
            <div>
                <h1 className="text-center">
                    {this.state.title}
                </h1>
                <img
                    className="my-5 mx-auto d-block"
                    alt=""
                    src={this.state.image}
                />
                <div className="row">
                    <h5 className="col-4 text-center">
                        Prep Time: {this.state.preparationMinutes}
                    </h5>
                    <h5 className="col-4 text-center">
                        Cook Time: {this.state.cookingMinutes}
                    </h5>
                    <h5 className="col-4 text-center">
                        Serves: {this.state.servings}
                    </h5>
                </div>
                <div className="m-3">
                    <h4>Instructions:</h4>
                    <p>{this.state.instructions}</p>
                </div>

                <Link to={`/localRecipes`}>
                    <div className="form-group row">
                        <button className="form-control btn btn-primary">
                            Back to recipe list
                        </button>
                    </div>
                </Link>

            </div>
        )}
}

export default LocalRecipeDetail;
