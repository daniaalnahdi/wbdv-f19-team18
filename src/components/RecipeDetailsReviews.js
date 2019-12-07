import React from "react";
import { Link } from "react-router-dom";
import RecipeDetailsReviewForm from "./RecipeDetailsReviewForm";

class RecipeDetailsReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      newReview: {
        recipeId: this.props.recipeId,
        name: this.props.user.name,
        username: this.props.user.username,
        heading: '',
        body: ''
      }
    };
  }

  updateNewReviewHeading(heading) {
    this.setState(prevState => {
      return {
        ...prevState,
        newReview: {
          ...prevState.newReview,
          heading: heading
        }
      };
    });
  }

  updateNewReviewBody(body) {
    this.setState(prevState => {
      return {
        ...prevState,
        newReview: {
          ...prevState.newReview,
          body: body
        }
      };
    });
  }

  //TO DO - add functionality
  createReview() {
    console.log(
      `${this.state.newReview.name} added ${this.state.newReview.heading}: ${this.state.newReview.body} for recipe ${this.state.newReview.recipeId}`
    );

    //Empty form
    this.setState(prevState => {
      return {
        ...prevState,
        newReview: {
          ...prevState.newReview,
          heading: "",
          body: ""
        }
      };
    });
  }

  //TO DO - delete functionality
  deleteReview(reviewId) {
    console.log("delete review with id " + reviewId);
  }

  renderDeleteButton(authorId, reviewId) {
    const delButton = (
      <button className="btn btn-danger" onClick={() => this.deleteReview(reviewId)}>Delete</button>
    );

    if (this.props.isLoggedIn) {
      //if admin, add delete for all reviews
      if (this.props.user.admin) {
        return delButton;

        //else, add button if logged in user = review author
      } else {
        if (this.props.user.userId === authorId) {
          return delButton;
        }
      }
    }
    //if not logged in, don't add delete button at all
  }

  render() {
    return (
      <div>
        <div className="border">
          <h4>Total Reviews: {this.state.reviews.length}</h4>
          <h4>Reviews:</h4>
          <ul className="list-group">
            {this.state.reviews &&
              this.state.reviews.map(review => {
                return (
                  <li className="list-group-item">
                    <h3>{review.heading}</h3>
                    Reviewed By:
                    <Link to={`/profile/${review.user.username}`}>
                      {review.user.name}
                    </Link>
                    <p>{review.body}</p>
                    {this.renderDeleteButton(
                      review.user.userId,
                      review.reviewId
                    )}
                  </li>
                );
              })}
          </ul>
          {this.props.isLoggedIn && (
            <RecipeDetailsReviewForm
              heading={this.state.newReview.heading}
              body={this.state.newReview.body}
              updateHeading={heading => this.updateNewReviewHeading(heading)}
              updateBody={body => this.updateNewReviewBody(body)}
              createReview={() => this.createReview()}
            />
          )}
        </div>
      </div>
    );
  }
}

export default RecipeDetailsReview;
