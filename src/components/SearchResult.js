import React from 'react';
import '../css/SearchPage.css';

const SearchResult = ({recipe}) => {
    return (
        <div className="row">
            <img className="g18-search-result-image rounded"
                 alt=""
                 src={`https://spoonacular.com/recipeImages/${recipe.image}`}/>
            <div className="col-6 g18-search-result-text">
                <b>{recipe.title}</b>
            </div>
            <div className="col-2 g18-search-result-text">
                {recipe.readyInMinutes}
            </div>
            <div className="col-2 g18-search-result-text">
                {recipe.servings}
            </div>
        </div>
    );
};

export default SearchResult;