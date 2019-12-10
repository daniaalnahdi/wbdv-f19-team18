import React from "react";
import SearchResultList from "../components/SearchResultList";
import RecipeService from "../service/RecipeService";

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: ""
    };
  }

  searchNameChanged = event =>
    this.setState({
      searchName: event.target.value
    });

  render() {
    return (
      <div>
        <div className="input-group col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a recipe"
            onChange={this.searchNameChanged}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              this.props.searchRecipeByName(this.state.searchName);
            }}
          >
            Search Online Recipes
          </button>
          <button className="btn btn-success" type="button" onClick={() => {
            this.props.searchAdminRecipeByName(this.state.searchName);
          }}>
            Search Exclusive Recipes
          </button>
        </div>
        <SearchResultList recipes={this.props.recipes} />
      </div>
    );
  }
}
