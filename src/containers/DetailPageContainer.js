import RecipeService from "../service/RecipeService"
import {connect} from 'react-redux'
import DetailPage from "../pages/DetailPage";

const service = RecipeService.getInstance()

const stateToPropertyMapper = (state, ownProps) => {
    return {
        recipe: state.recipe,
    }
}

const dispatcherToPropertyMapper = dispatch => {
    return {
        likeRecipe: (userId, recipeId) => {
            service.likeRecipe(userId, recipeId)
                .then(recipe => dispatch({
                    type: 'LIKE_RECIPE',
                    recipe: recipe
                }))
        },
        unlikeRecipe: (userId, recipeId) => {
            service.unlikeRecipe(userId, recipeId)
                .then(recipe => dispatch({
                    type: 'UNLIKE_RECIPE',
                    recipe: recipe
                }))
        }
}
}


const DetailPageContainer =
    connect(stateToPropertyMapper, dispatcherToPropertyMapper)(DetailPage)


export default DetailPageContainer;
