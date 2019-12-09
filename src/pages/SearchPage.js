import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchResultList from "../components/SearchResultList";

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: this.props.searchName
    };
  }

  searchNameChanged = event =>
    this.setState({
      searchName: event.target.value
    });


  render() {
    return (
      <Router>
        <div>
          <div className="input-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a recipe"
              onChange={this.searchNameChanged}
            />
            <div className="input-group-append">
              <Link to={`/search/${this.state.searchName}`}>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => {
                    this.props.searchRecipeByName(this.state.searchName);
                  }}
                >
                  Search Online Recipes
                </button>
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={() => 
                    //TODO implement search
                    {return null}}
                >
                  Search Admin Recipes
                </button>
              </Link>
            </div>
          </div>
          {/*<SearchResultList recipes={this.props.recipes}/>*/}
          <Route
            path="/search/:searchName"
            render={() => <SearchResultList recipes={this.props.recipes} />}
          />
        </div>
      </Router>
    );
  }
}
