import React from "react";
import { Link } from "react-router-dom";

export default class RecipeLikesFeed extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="border">
        <h3>
          {this.props.isLoggedIn
            ? "Recently Liked By Friends"
            : "Recently Liked By Community"}
        </h3>
        <ul className="list-group">
          {this.props.likes &&
            this.props.likes.map(like => {
              return (
                <li className="list-group-item">
                  <Link to={`/profile/${like.user.username}`}>
                    {like.user.name}
                  </Link>
                  Liked
                  <Link to={`/recipe/${like.recipeId}`}>
                    {like.recipeTitle}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
