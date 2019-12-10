const key = "d36e2f36f3e44818967b12d4bdb6d7ac";
const rootUrl = "https://wbdv-t18-server-node.herokuapp.com/api";

export default class RecipeService {
    static myInstance = null;

    static getInstance() {
        if(RecipeService.myInstance == null) {
            RecipeService.myInstance = new RecipeService()
        }
        return this.myInstance
    }

  searchRecipeByName = name => {
    return fetch(
      `https://api.spoonacular.com/recipes/search?apiKey=${key}&query=${name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(response => response.json())
        .then(responseObject => responseObject.results);
  };

  searchRecipeInfoById = id => {
    return fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(response => response.json());
  };

  searchAdminRecipeByName = name => {
      return fetch(`${rootUrl}/recipes?title=${name}`)
          .then(response => response.json());
  };

  getAdminRecipeById = id => {
      return fetch(`${rootUrl}/recipes/${id}`)
          .then(response => response.json());
  };

  createRecipe = recipe => {
      return fetch(`${rootUrl}/recipes`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(recipe)
      })
          .then(response => response.json());
  };

  updateRecipe = (id, recipe) => {
      return fetch(`${rootUrl}/recipes${id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(recipe)
      })
          .then(response => response.json());
  };

  likeRecipe = (userId, recipeId) => {
      return fetch(`${rootUrl}/recipes${recipeId}?likedBy=${userId}`, { method: 'PUT' })
          .then(response => response.json());
  };

  unlikeRecipe = (userId, recipeId) => {
      return fetch(`${rootUrl}/recipes${recipeId}?unlikedBy=${userId}`, { method: 'PUT' })
          .then(response => response.json());
  };

  deleteRecipe = id => {
      return fetch(`${rootUrl}/recipes${id}`, { method: 'DELETE' })
          .then(response => response.json());
  };
}
