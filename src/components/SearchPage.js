import React from "react";
import SearchResultList from "../components/SearchResultList";

export default class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchName: ''
        }
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
                        onChange={this.searchNameChanged}/>
                    <div className="input-group-append">
                        <button className="btn btn-primary"
                                type="button"
                                onClick={() => {this.props.searchRecipeByName(this.state.searchName)}}>
                            Search
                        </button>
                    </div>
                </div>
                <SearchResultList recipes={this.props.recipes}/>
            </div>
        );
    }
};


