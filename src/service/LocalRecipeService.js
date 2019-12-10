const RECIPE_API_URL = `https://wbdv-t18-server-node.herokuapp.com/api`

export default class localRecipeService {
    static instance = null;
    static getInstance = () => {
        if (this.instance == null) {
            this.instance = new localRecipeService()
        }
        return this.instance
    }

    /**
     * Creates a new recipe instance
     * @param recipe
     */
    createRecipe = (recipe) => {
        return fetch(`${RECIPE_API_URL}/recipes`, {
            method: 'POST',
            body: JSON.stringify(recipe),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }


    /**
     * Retrieves all recipes.
     * @returns {Promise<any>}
     */
    findAllRecipes = () => {
        return fetch(`${RECIPE_API_URL}/recipes`)
            .then(response => response.json());
    }

    /**
     * Retrieves recipes whose id is recipeId
     * @param recipeId
     * @returns {Promise<any>}
     */
    findRecipeById = (recipeId) => {
        return fetch(`${RECIPE_API_URL}/recipes/${recipeId}`)
            .then(response => response.json());
    }

    /**
     * Updates recipe whose id is recipeId.
     * @param recipeId
     * @param newRecipe
     * @returns {Promise<any>}
     */
    updateRecipe(recipeId, newRecipe) {
        return fetch(`${RECIPE_API_URL}/recipes/${recipeId}`, {
            method: 'PUT',
            body: JSON.stringify(newRecipe),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
    }

    /**
     * Removes recipe whose id is recipeId
     * @param recipeId
     * @returns {Promise<any>}
     */
    deleteRecipe = (recipeId) => {
        return fetch(`${RECIPE_API_URL}/recipes/${recipeId}`, {
            method: 'DELETE'
        }).then(response => response.json())
    }
}
