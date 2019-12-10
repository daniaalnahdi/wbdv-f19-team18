import React from 'react';
import SearchResultItem from "./SearchResultItem";
import { Link } from "react-router-dom";

const SearchResultList = ({recipes}) => {
    if (recipes) {
        return (
            <ul className="list-group my-3">
                {
                    recipes && recipes.map(recipe => {
                        return (
                            <Link key={recipe.id}
                                  to={`./details/${recipe.id}`}>
                                <li className="list-group-item">
                                    <SearchResultItem recipe={recipe}/>
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