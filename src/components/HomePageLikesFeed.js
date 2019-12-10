import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class HomePageLikesFeed extends React.Component {
  render() {
    let loginPrompt = "";

    if (!this.props.isLoggedIn) {
      loginPrompt = (
        <Link to="login">Login to see your friends' recent likes!</Link>
      );
    }
    return (
      <div className="container-fluid">
        <div className=" list-group-item">
          <h3>
            {this.props.isLoggedIn
              ? "Recently Liked By Who You Follow"
              : "Recently Liked By Everyone"}
          </h3>
          {loginPrompt}
          <ul className="list-group">
            {this.props.likes &&
              this.props.likes.map(like => {
                return (
                  <li className="list-group-item">
                    <Link to={`/profile/${like.user.username}`}>
                      {like.user.name}
                    </Link>
                    Liked
                    <Link to={`/details/${like.recipeId}`}>
                      {like.recipeTitle}
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

export default withRouter(HomePageLikesFeed);
