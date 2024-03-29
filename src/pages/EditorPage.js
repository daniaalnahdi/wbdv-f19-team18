import React from "react";
import localRecipeService from "../service/LocalRecipeService";
import {Link} from "react-router-dom";

const service = localRecipeService.getInstance()

class EditorPage extends React.Component {

    constructor(props) {
        super(props);
        console.log("recipeId")
        const recipeId = this.props.match.params.recipeId
        console.log(recipeId)
        const isUpdateMode = (recipeId != null)
        console.log(isUpdateMode)
        this.state = {
            // recipe: {
            title: '',
            preparationMinutes: '',
            cookingMinutes: '',
            readyInMinutes: '',
            servings: '',
            instructions: '',
            image: '',
            diets: '',
            interactions: null
            // }

        }
    }

    componentDidMount() {
        const recipeId = this.props.match.params.recipeId
        if ((recipeId != null)) {
            service.findRecipeById(recipeId).then(recipe => {
                console.log(recipe)
                console.log(recipe.title)
                console.log(recipe._id)
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

    recipeNameUpdated = event =>
        this.setState({
            // recipe: {title: event.target.value}
            title: event.target.value
        })

    prepTimeUpdated = event =>
        this.setState({
            // recipe: {preparationMinutes: event.target.value}
            preparationMinutes: event.target.value
        })

    cookTimeUpdated = event =>
        this.setState({
            // recipe: {cookingMinutes: event.target.value}
            cookingMinutes: event.target.value
        })

    servingsUpdated = event =>
        this.setState({
            // recipe: {servings: event.target.value}
            servings: event.target.value
        })

    instructionsUpdated = event =>
        this.setState({
            // recipe: {instructions: event.target.value}
            instructions: event.target.value
        })

    imageUrlUpdated = event =>
        this.setState({
            //recipe: {image: event.target.value}
            image: event.target.value
        })

    createRecipe = recipe => {
        console.log(recipe)
        // console.log(JSON.stringify(recipe))
        service.createRecipe(recipe).then(recipe => console.log(recipe))
        // fetch("https://wbdv-t18-server-node.herokuapp.com/api/recipes", {
        //     method: 'post',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(recipe)
        // }).then(response => console.log(response.json()))
    }
    updateRecipe = recipe => {
        console.log(recipe)
        console.log(recipe._id)
        service.updateRecipe(recipe._id, recipe).then(recipe => console.log(recipe))
    }


    render = () => {
        return (
            <div className="container-fluid">
                <h1>RecipeEditor</h1>
                <div className="form-group">
                    <div className="form-group row">
                        <label htmlFor="recipeName" className="col-sm-2 col-form-label">
                            Recipe Name
                        </label>
                        <div className="col-sm-10">
                            <input value={this.state.title}
                                   onChange={this.recipeNameUpdated}
                                   className="form-control"
                                   id="name"
                                   placeholder="Beef Roast"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="prepTime" className="col-sm-2 col-form-label">
                            Preparation Time
                        </label>
                        <div className="col-sm-10">
                            <input value={this.state.preparationMinutes}
                                   onChange={this.prepTimeUpdated}
                                   className="form-control"
                                   id="prepTime"
                                   placeholder="10"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="cookTime" className="col-sm-2 col-form-label">
                            Cook Time
                        </label>
                        <div className="col-sm-10">
                            <input value={this.state.cookingMinutes}
                                   onChange={this.cookTimeUpdated}
                                   className="form-control"
                                   id="cookTime"
                                   placeholder="20"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="Serving" className="col-sm-2 col-form-label">
                            Servings
                        </label>
                        <div className="col-sm-10">
                            <input
                                value={this.state.servings}
                                onChange={this.servingsUpdated}
                                className="form-control"
                                id="serving"
                                placeholder="4"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="widgetName" className="col-sm-2 col-form-label">
                            Instructions </label>
                        <div className="col-sm-10">
                           <textarea value={this.state.instructions}
                                     onChange={this.instructionsUpdated}
                                     id="instruction"
                                     className="form-control"
                                     placeholder="Heat olive oil in a large stockpot or Dutch oven over medium high heat..."
                                     rows="5"
                           >
                           </textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="ImageSrc" className="col-sm-2 col-form-label">
                            Image URL </label>
                        <div className="col-sm-10">
                            <input
                                value={this.state.image}
                                onChange={this.imageUrlUpdated}
                                className="form-control"
                                placeholder="Image URL"/>
                        </div>
                    </div>
                    {
                        this.props.match.params.recipeId == null ?

                                <div className="form-group row">
                                    <button
                                        onClick={() => {this.createRecipe({
                                            // recipe: {
                                            title: this.state.title,
                                            preparationMinutes: this.state.preparationMinutes,
                                            cookingMinutes: this.state.cookingMinutes,
                                            readyInMinutes: this.state.readyInMinutes,
                                            servings: this.state.servings,
                                            instructions: this.state.instructions,
                                            image: this.state.image,
                                            diet: this.state.diet,
                                            interaction: this.state.interaction
                                            // }
                                        }); alert('Recipe Created')}}
                                        className="form-control btn btn-primary">
                                        Add Recipe
                                    </button>
                                </div>
                            :
                                <div className="form-group row">

                                    <button
                                        onClick={() => {this.updateRecipe({
                                            // recipe: {
                                            _id: this.state._id,
                                            title: this.state.title,
                                            preparationMinutes: this.state.preparationMinutes,
                                            cookingMinutes: this.state.cookingMinutes,
                                            readyInMinutes: this.state.readyInMinutes,
                                            servings: this.state.servings,
                                            instructions: this.state.instructions,
                                            image: this.state.image,
                                            diet: this.state.diet,
                                            interaction: this.state.interaction
                                            // }
                                        });alert('Recipe updated')}}
                                        className="form-control btn btn-primary">
                                        Update Recipe
                                    </button>

                                </div>

                    }
                    <Link to={`/localRecipes`}>
                        <div className="form-group row">
                            <button
                                className="form-control btn btn-primary">
                                Return to Recipe List
                            </button>
                        </div>
                    </Link>
                </div>
            </div>

        )
    }

}

export default EditorPage;
