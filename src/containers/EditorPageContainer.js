import localRecipeService from "../service/LocalRecipeService"
import {connect} from 'react-redux'
import EditorPage from "../pages/EditorPage";

const service = localRecipeService.getInstance()

const stateToPropertyMapper = state => {
    return {
        recipe: state.recipe,
        recipes: state.recipes
    }
}


const dispatcherToPropertyMapper = dispatch => {
    return {
        addRecipe: (recipe) => {
            console.log("createRecipe")
            // service.createRecipe(recipe).then(recipe =>
            //     dispatch({
            //         type: 'CREATE_RECIPE',
            //         recipe: recipe
            //     }))
        },
        deleteRecipe: (id) => {
            service.deleteRecipe(id)
                .then(recipe => dispatch({
                    type: 'DELETE_RECIPE',
                    recipe: recipe
                }))
        },
        updateRecipe: (recipe) => {
            console.log(recipe)
            service.updateRecipe(recipe)
                .then(recipes => {
                    dispatch({
                        type: 'UPDATE_RECIPE',
                        recipe: recipe
                    })
                })
        },
        findAllRecipes: () =>
            service.findAllRecipes()
                .then(recipes => {
                    dispatch({
                        type: 'FIND_ALL_RECIPES',
                        recipes: recipes
                    })
                })
    }
}


const EditorPageContainer =
    connect(stateToPropertyMapper, dispatcherToPropertyMapper)(EditorPage)


export default EditorPageContainer
