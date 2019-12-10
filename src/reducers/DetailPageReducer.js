const initialState = {
  recipe: {}
};

const DetailPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIKE_RECIPE":
      return {
        recipe: action.recipe
      };
    case "UNLIKE_RECIPE":
      return {
        recipe: action.recipe
      };
    default:
      return state;
  }
};

export default DetailPageReducer;
