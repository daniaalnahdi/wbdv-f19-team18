import React from "react";
import { Link } from "react-router-dom";
import RecipeDetailsReviewForm from "./RecipeDetailsCommentsForm";

class RecipeDetailsReview extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      newComment: {
        recipeId: this.props.recipeId,
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
      `${this.state.newComment.name} added ${this.state.newComment.heading}: ${this.state.newComment.body} for recipe ${this.state.newComment.recipeId}`
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
      if (this.props.admin) {
        return delButton;

        //else, add button if logged in user = review author
      } else {
        if (this.props.user.id === authorId) {
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
                    Comment By:
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
              heading={this.state.newComment.heading}
              body={this.state.newComment.body}
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
