import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import SearchPageContainer from "../containers/SearchPageContainer";
import React from "react";
import { createStore } from "redux";
import SearchPageReducer from "../reducers/SearchPageReducer";
//UI Elements
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HomePageLikesFeed from "../components/HomePageLikesFeed";
import HomePageReviewsFeed from "../components/HomePageReviewsFeed";

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
  userId: 123,
  name: "User 1",
  username: "username1",
  password: "password",
  admin: false,
  likedRecipes: [
    {
      recipeTitle: "Beef Burgundy",
      recipeId: 101141
    },
    {
      recipeTitle: "Kale Soup",
      recipeId: 702741
    }
  ],
  reviewedRecipes: [],
  friendsRecentLikes: [
    {
      recipeTitle: "Beef Burgundy",
      recipeId: 101141,
      user: {
        userId: 234,
        name: "User 2",
        username: "username2"
      }
    },
    {
      recipeTitle: "Apple Bread",
      recipeId: 466266,
      user: {
        userId: 345,
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
        userId: 234,
        name: "User 2",
        username: "username2"
      }
    }
  ]
};

// TODO -- check if user is actually logged in
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
                  user={this.state.isLoggedIn ? loggedInUser : anonUser}
                />
              )}
            />
            <Route
              path="/profile/:id"
              render={props => <ProfilePage userId={props.match.params.id} />}
            />
            <Route path="/">
              <HomePageLikesFeed
                isLoggedIn={this.state.isLoggedIn}
                likes={
                  this.state.isLoggedIn
                    ? anonUser.allRecentLikes
                    : loggedInUser.friendsRecentLikes
                }
              />
              <HomePageReviewsFeed
                isLoggedIn={this.state.isLoggedIn}
                reviews={
                  this.state.isLoggedIn
                    ? anonUser.allRecentReviews
                    : loggedInUser.friendsRecentReviews
                }
              />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default HomePage;
