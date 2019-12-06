import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import SearchPageContainer from "../containers/SearchPageContainer";
import React from "react";
import { createStore } from "redux";
import SearchPageReducer from "../reducers/SearchPageReducer";
//UI Elements
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RecipeLikesFeed from "../components/RecipeLikesFeed";
//Pages
import DetailPage from "../pages/DetailPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "./ProfilePage";
import PrivacyPolicyPage from "./PrivacyPolicyPage";

//TODO - use real data

const anonUser = {
  allRecentLikes: [
    {
      recipeTitle: "Beef Burgundy",
      recipeId: 101141,
      user: {
        name: "User 1",
        username: "username1"
      }
    },
    {
      recipeTitle: "Apple Bread",
      recipeId: 466266,
      user: {
        name: "User 3",
        username: "username3"
      }
    }
  ],
  allRecentReviews: [
    {
      recipeTitle: "Apple Bread",
      recipeId: 466266,
      user: {
        name: "User 3",
        username: "username3"
      }
    }
  ]
};

const loggedInUser = {
  friendsRecentLikes: [
    {
      recipeTitle: "Beef Burgundy",
      recipeId: 101141,
      user: {
        name: "User 1",
        username: "username1"
      }
    },
    {
      recipeTitle: "Apple Bread",
      recipeId: 466266,
      user: {
        name: "User 3",
        username: "username3"
      }
    }
  ],
  friendsRecentReviews: [
    {
      recipeTitle: "Beef Burgundy",
      recipeId: 101141,
      user: {
        name: "User 2",
        username: "username2"
      }
    }
  ]
};

// TODO -- check if use is actually logged in
const LoggedIn = true;

const store = createStore(SearchPageReducer);

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: LoggedIn
    };
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/privacy-policy">
              <PrivacyPolicyPage />
            </Route>
            <Route
              path="/search/:searchName?"
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
              render={props => (
                <DetailPage
                  recipeId={props.match.params.id}
                  isLoggedIn={this.state.isLoggedIn}
                />
              )}
            />
            <Route
              path="/profile/:id"
              render={props => <ProfilePage userId={props.match.params.id} />}
            />
          </Switch>
          <RecipeLikesFeed
            isLoggedIn={this.state.isLoggedIn}
            likes={
              this.state.isLoggedIn
                ? anonUser.allRecentLikes
                : loggedInUser.friendsRecentLikes
            }
          />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default HomePage;
