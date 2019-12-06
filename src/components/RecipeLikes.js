import React from "react";
import { Link } from "react-router-dom";

class RecipeLikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalLikes: this.props.totalLikes,
      likedBy: this.props.likedBy
    };
  }

  render() {
    return (
      <div className="border">
        <h4>Total Likes: {this.state.totalLikes}</h4>
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

export default RecipeLikes;
