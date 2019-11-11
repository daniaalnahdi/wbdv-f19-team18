import React from 'react';
import SearchResult from "./SearchResult";
import { Link } from "react-router-dom";

const SearchResultList = ({recipes}) => {
    if (recipes) {
        return (
            <ul className="list-group my-3">
                {
                    recipes && recipes.map(recipe => {
                        return (
                            <Link key={recipe.id}
                                  to={`./recipe/${recipe.id}`}>
                                <li className="list-group-item">
                                    <SearchResult recipe={recipe}/>
                                </li>
                            </Link>
                        );
                    })
                }
            </ul>
        );
    }
};

export default SearchResultList;