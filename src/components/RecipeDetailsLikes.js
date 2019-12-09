import React from "react";
import { Link } from "react-router-dom";

class RecipeDetailsLikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likedBy: this.props.likedBy
    };
  }

  render() {
    return (
      <div className="border">
        <h4>Total Likes: {this.state.likedBy.length}</h4>
        <h4>Liked By:</h4>
        <ul className="list-group list-group-horizontal">
          {this.state.likedBy &&
            this.state.likedBy.map(user => {
              return (
                <Link to={`/profile/${user.username}`}>
                  <li className="list-group-item">{user.name}</li>
                </Link>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default RecipeDetailsLikes;
