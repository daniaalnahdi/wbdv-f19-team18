import React from "react";

class RecipeEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recipeName: '',
            prepTime: '',
            cookTime: '',
            servings: '',
            instructions: '',
            imageUrl: ''
        }
    }

    recipeNameUpdated = event =>
        this.setState({
            recipeName: event.target.value
        })

    prepTimeUpdated = event =>
        this.setState({
            prepTime: event.target.value
        })

    cookTimeUpdated = event =>
        this.setState({
            cookTime: event.target.value
        })

    servingsUpdated = event =>
        this.setState({
            servings: event.target.value
        })

    instructionsUpdated = event =>
        this.setState({
            instructions: event.target.value
        })

    imageUrlUpdated = event =>
        this.setState({
            imageUrl: event.target.value
        })


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
                            <input value={this.state.recipeId}
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
                            <input value={this.state.prepTime}
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
                            <input value={this.state.cookTime}
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
                                value={this.state.imageURL}
                                onChange={this.imageUrlUpdated}
                                className="form-control"
                                placeholder="Image URL"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <button
                        //     onClick={()=> this.props.createRecipe({
                        //     recipeName: this.state.recipeName,
                        //     prepTime: this.state.prepTime,
                        //     cookTime: this.state.cookTime,
                        //     servings: this.state.servings,
                        //     instructions: this.state.instructions,
                        //     imageUrl: this.state.imageUrl
                        // })}
                            className="form-control btn btn-primary">
                            Add Recipe
                        </button>
                    </div>
                </div>
            </div>)
    }

}

export default RecipeEditor;
