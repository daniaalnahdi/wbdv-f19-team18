
const SearchPageReducer = (prevState = {recipes: []}, action) => {
    switch (action.type) {
        case 'UPDATE_ALL_RECIPES':
            return {
                recipes: action.recipes
            };
        case 'FIND_RECIPE':
            return {
                recipes: [action.recipe]
            };
        default:
            return prevState;
    }
};

export default SearchPageReducer;