import React from "react";
import { Link } from "react-router-dom";

export default class HomePageReviewsFeed extends React.Component {
  render() {
    let loginPrompt = "";

    if (!this.props.isLoggedIn) {
      loginPrompt = (
        <Link to="login">Login to see your friends' recent reviews!</Link>
      );
    }
    return (
      <div className="container-fluid">
        <div className=" list-group-item">
          <h3>
            {this.props.isLoggedIn
              ? "Recent Comments By Friends"
              : "Recent Comments by Everyone"}
          </h3>
          {loginPrompt}
          <ul className="list-group">
            {this.props.reviews &&
              this.props.reviews.map(review => {
                return (
                  <li className="list-group-item">
                    <Link to={`/profile/${review.user.username}`}>
                      {review.user.name}
                    </Link>
                    Commented on
                    <Link to={`/details/${review.recipeId}`}>
                      {review.recipeTitle}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}
