import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import { Provider } from "react-redux";
import SearchPageContainer from "../containers/SearchPageContainer";
import React from "react";
import { createStore } from "redux";
import SearchPageReducer from "../reducers/SearchPageReducer";
import NavBar from "../components/NavBar";
import LoginPage from "../pages/LoginPage";

const HomePage = ({}) => {
  const store = createStore(SearchPageReducer);
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route
            path="/search"
            render={() => (
              <div className="container-fluid my-3">
                <Provider store={store}>
                  <SearchPageContainer />
                </Provider>
              </div>
            )}
          />
          <Route
            path="/recipe/:id"
            render={props => <DetailPage recipeId={props.match.params.id} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default HomePage;
