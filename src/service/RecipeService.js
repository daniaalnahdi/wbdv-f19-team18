const key = "d36e2f36f3e44818967b12d4bdb6d7ac";

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
}
