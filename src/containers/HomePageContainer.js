import {connect} from 'react-redux';
import HomePage from "../components/HomePage";
import RecipeService from "../service/RecipeService";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        recipes: state.recipes/*[{ id: 1, name: "Curried Coconut Chicken" }]*/
    };
};

const service = RecipeService.getInstance();

const dispatcherToPropertyMapper = (dispatch, ownProps) => {
    return {
        homeRecipeByName: name => {
            service.homeRecipeByName(name)
                .then(recipes => {
                    dispatch({
                        type: 'UPDATE_ALL_RECIPES',
                        recipes: recipes
                    });
                });
        },
        homeRecipeById: id => {
            service.homeRecipeInfoById(id)
                .then(recipe => {
                    dispatch({
                        type: 'FIND_RECIPE',
                        recipe: recipe
                    });
                });
        }
    };
};

const HomePageContainer =
    connect(stateToPropertyMapper, dispatcherToPropertyMapper)(HomePage);

export default HomePageContainer;