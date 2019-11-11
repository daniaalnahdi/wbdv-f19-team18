import {connect} from 'react-redux';
import SearchPage from "../components/SearchPage";
import RecipeService from "../service/RecipeService";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        recipes: state.recipes/*[{ id: 1, name: "Curried Coconut Chicken" }]*/
    };
};

const service = RecipeService.getInstance();

const dispatcherToPropertyMapper = (dispatch, ownProps) => {
    return {
        searchRecipeByName: name => {
            service.searchRecipeByName(name)
                .then(recipes => {
                    dispatch({
                        type: 'UPDATE_ALL_RECIPES',
                        recipes: recipes
                    });
                });
        },
        searchRecipeById: id => {
            service.searchRecipeInfoById(id)
                .then(recipe => {
                    dispatch({
                        type: 'FIND_RECIPE',
                        recipe: recipe
                    });
                });
        }
    };
};

const SearchPageContainer =
    connect(stateToPropertyMapper, dispatcherToPropertyMapper)(SearchPage);

export default SearchPageContainer;