import React from "react";
import { Link } from "react-router-dom";

class RecipeDetailsReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews
    };
  }

  renderDeleteButton(authorId) {
    if (this.props.isLoggedIn) {
      //if admin, add delete for all reviews
      if (this.props.admin) {
        return <button>Delete</button>;

        //else, add button if logged in user = review author
      } else {
        if (this.props.userId === authorId) {
          return <button>Delete</button>;
        }
      }
    }
    //if not logged in, don't add delete button at all
  }

  createReview(reviewId) {}

  deleteReview(reviewId) {}

  render() {
    return (
      <div className="border">
        <h4>Total Reviews: {this.state.reviews.length}</h4>
        <h4>Reviews:</h4>
        <ul className="list-group">
          {this.state.reviews &&
            this.state.reviews.map(review => {
              return (
                //TODO - seperate into individual component with unique ID
                // give delete ability for admin to delete
                <li className="list-group-item">
                  <h3>{review.heading}</h3>
                  Reviewed By:
                  <Link to={`/profile/${review.user.username}`}>
                    {review.user.name}
                  </Link>
                  <p>{review.body}</p>
                  {this.renderDeleteButton(review.user.userId)}
                  {/* <ul>
                    {review.replies &&
                      review.replies.map(reply => {
                        return (
                          <li>
                            <Link to={`/profile/${reply.user.username}`}>
                              {reply.user.name}
                            </Link>
                            : {reply.body}
                          </li>
                        );
                      })}
                  </ul> */}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default RecipeDetailsReview;
