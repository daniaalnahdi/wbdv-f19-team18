const RECIPE_API_URL = ``

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
        return fetch(RECIPE_API_URL, {
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
        /* return this.courses;*/
        return fetch(RECIPE_API_URL)
            .then(response => response.json());
    }

    /**
     * Retrieves recipes whose id is recipeId
     * @param recipeId
     * @returns {Promise<any>}
     */
    findRecipeById = (recipeId) => {
        return fetch(RECIPE_API_URL + `${recipeId}`)
            .then(response => response.json());
    }

    /**
     * Updates recipe whose id is recipeId.
     * @param recipeId
     * @param newRecipe
     * @returns {Promise<any>}
     */
    updateRecipe(recipeId, newRecipe) {
        return fetch(RECIPE_API_URL + `${recipeId}`, {
            method: 'PUT',
            body: JSON.stringify(newRecipe),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
    }

    /**
     * Removes course whose id is courseId
     * @param courseId
     * @returns {Promise<any>}
     */
    deleteRecipe = (courseId) => {
        return fetch(RECIPE_API_URL + `${courseId}`, {
            method: 'DELETE'
        }).then(response => response.json())
    }
}
