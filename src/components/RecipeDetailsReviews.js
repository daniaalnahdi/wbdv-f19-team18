import React from "react";
import { Link } from "react-router-dom";

class RecipeDetailsReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalReviews: this.props.totalReviews,
      reviews: this.props.reviews
    };
  }

  render() {
    return (
      <div className="border">
        <h4>Total Reviews: {this.state.totalReviews}</h4>
        <h4>Reviews:</h4>
        <ul className="list-group">
          {this.state.reviews &&
            this.state.reviews.map(review => {
              return (
                <li className="list-group-item">
                  <h3>{review.heading}</h3>
                  Reviewed By:
                  <Link to={`/profile/${review.author.username}`}>
                    {review.author.name}
                  </Link>
                  <p>{review.body}</p>
                  <ul>
                    {review.replies &&
                      review.replies.map(reply => {
                        return (
                          <li>
                            <Link to={`/profile/${reply.author.username}`}>
                              {reply.author.name}
                            </Link>
                            : {reply.body}
                          </li>
                        );
                      })}
                  </ul>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default RecipeDetailsReview;
