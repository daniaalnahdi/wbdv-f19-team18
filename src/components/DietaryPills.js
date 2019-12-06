import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const diets = [
    "gluten free",
    "ketogenic",
    "vegetarian",
    "lacto-vegetarian",
    "ovo-vegetarian",
    "vegan",
    "pescetarian",
    "paleo",
    "primal",
    "whole30"
];

const DietaryPills = ({editing, dietaryRestrictions}) => {
    return (
        <ul className="list-group list-group-horizontal">
            {
                dietaryRestrictions.map(restriction => {
                    if (editing) {
                        return (
                            <li className="list-group-item">
                                {restriction}
                                <button className="btn pl-3">
                                    <FontAwesomeIcon icon="times"/>
                                </button>
                            </li>
                        );
                    } else {
                        return (
                            <li className="list-group-item">{restriction}</li>
                        );
                    }
                })
            }
            {
                editing && (
                    <li className="list-group-item bg-success">
                        <select className="form-control-sm">
                            {
                                diets.map(diet => {
                                    if (!dietaryRestrictions.includes(diet)) {
                                        return (
                                            <option>{diet}</option>
                                        )
                                    }
                                })
                            }
                            <option>Default select</option>
                        </select>
                        <button className="btn pl-3">
                            <FontAwesomeIcon icon="plus"/>
                        </button>
                    </li>
                )
            }
        </ul>
    );
};

export default DietaryPills;