import React from 'react'
import {Link} from 'react-router-dom';

const LocalRecipeComponent = ({recipes, deleteRecipe}) =>
    <ul className="list-group">
        {
            recipes && recipes.map(recipe =>
                <li key={recipe.title}
                    className="list-group-item">
                    <Link to={`/editor/${recipe._id}`}>
                    {recipe.title}
                    </Link>
                    <button
                        onClick={() => deleteRecipe(recipe._id)}
                        className="float-right">
                        {/*<i className="fa fa-times"></i>*/}
                        X
                    </button>
                </li>)
        }
    </ul>


export default LocalRecipeComponent
