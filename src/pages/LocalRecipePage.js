import React from "react";
import localRecipeService from "../service/LocalRecipeService";
import LocalRecipeComponent from "../components/LocalRecipeComponent";
import {Link} from 'react-router-dom';

class LocalRecipePage extends React.Component {

    constructor(props) {
        super(props);
        this.service = localRecipeService.getInstance()
        this.state = {
            recipes: []
        }
    }

    componentDidMount() {
        // fetch data and update state
        this.service.findAllRecipes()
            .then(recipes => this.setState({recipes: recipes}));
        console.log(this.state.recipes)

    }

    deleteRecipe = recipeId => {
        console.log(recipeId)
        this.service.deleteRecipe(recipeId)
            .then(recipes => this.setState(prevState => {
                return {recipes: recipes}
            }))
    }


    render = () => {
        return (
            <div className="container-fluid">
                <h1>Admin Recipes</h1>
                <Link to={`/editor`}>
                    <button className="form-control btn btn-primary">
                        Add Recipe
                    </button>
                </Link>
                <LocalRecipeComponent recipes={this.state.recipes} deleteRecipe={this.deleteRecipe}/>
            </div>
        )
    }

}

export default LocalRecipePage;
