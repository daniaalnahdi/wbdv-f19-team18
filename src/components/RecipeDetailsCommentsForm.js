import React from "react";

class RecipeDetailsReviewForm extends React.Component {
  render() {
    return (
      <div className="border">
        <h4>Leave a Comment</h4>
        <form>
          <div class="form-group">
            <label for="title">Title</label>
            <input
              className="form-control"
              placeholder="Your comment title here..."
              value={this.props.heading}
              onChange={e => {
                this.props.updateHeading(e.target.value);
              }}
            />
            <label for="body">Message Body</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Write your comment here..."
              value={this.props.body}
              onChange={e => this.props.updateBody(e.target.value)}
            ></textarea>
          </div>
          <button className="btn btn-primary"
            onClick={e => {
              e.preventDefault();
              this.props.createReview();
            }}
          >
            Post
          </button>
        </form>
      </div>
    );
  }
}
export default RecipeDetailsReviewForm;
