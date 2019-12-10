
const EditorPageReducer = (state = {recipe:{}, recipes: []}, action) => {

    console.log(action);

    switch (action.type) {
        case 'CREATE_RECIPE':
            return {
                recipe: action.recipe,
            }
        case 'DELETE_RECIPE':
            return {
                recipe: action.recipe,
            }
        case 'UPDATE_RECIPE':
            console.log(action.recipe)
            return {
                recipe: action.recipe
            }
        case 'FIND_ALL_RECIPES':
            console.log(action.recipe)
            return {
                recipes: action.recipes
            }
        default:
            return state
    }
}

export default EditorPageReducer
