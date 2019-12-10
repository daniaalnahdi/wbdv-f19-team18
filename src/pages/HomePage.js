import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import SearchPageContainer from "../containers/SearchPageContainer";
import LoginPageContainer from "../containers/LoginPageContainer";
import DetailPageContainer from "../containers/DetailPageContainer";
import React from "react";
import { createStore } from "redux";
import SearchPageReducer from "../reducers/SearchPageReducer";
import EditorPageReducer from "../reducers/EditorPageReducer";
import EditorPageContainer from "../containers/EditorPageContainer";
import LoginPageReducer from "../reducers/LoginPageReducer";
import DetailPageReducer from "../reducers/LoginPageReducer";
//UI Elements
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HomePageLikesFeed from "../components/HomePageLikesFeed";
import HomePageReviewsFeed from "../components/HomePageReviewsFeed";
import PrivacyPolicyMessage from "../components/PrivacyPolicyMessage";

//Pages
import DetailPage from "../pages/DetailPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "./ProfilePage";
import PrivacyPolicyPage from "./PrivacyPolicyPage";
import EditorPage from "./EditorPage";
import ProfileLoginMessage from "../components/ProfileLoginMessage";
import LocalRecipePage from "./LocalRecipePage";

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

const searchStore = createStore(SearchPageReducer);
const loginStore = createStore(LoginPageReducer);
const detailStore = createStore(DetailPageReducer);
const editorPageStore = createStore(EditorPageReducer);

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      hidePolicyMessage: false,
      user: null,
      admin: false,
      userFirstName: ""
    };
  }

  loginUser(user) {
    console.log(user);
    let admin = false;

    if (user.__v == 1) {
      admin = true;
    }

    this.setState(prevState => {
      return {
        ...prevState,
        isLoggedIn: true,
        user: user,
        admin: admin,
        userFirstName: user.firstName
      };
    });
  }

  render() {
    let homePageDescription = <div className="container-fluid"><p>With Recipe Hunt, you can search, find, like, your favorite recipes! You can also interact with the members of our community in our recipe comments. Be sure to check out our exclusive Recipe Hunt recipes!</p></div>;

    let homePageMessage = "";
    let loginPrompt = (
      <h6>
        <Link to="login">Login</Link> to see your friends' recent likes and
        comments!
      </h6>
    );
    let userGreeting = <h4>Welcome back, {this.state.userFirstName}</h4>;

    homePageMessage = (
      <div className="container-fluid">
        <h2>Hi!</h2>
        {this.state.isLoggedIn ? userGreeting : loginPrompt}
      </div>
    );

    return (
      <div>
        <Router>
          <NavBar
            isLoggedIn={this.state.isLoggedIn}
            user={this.state.user}
          ></NavBar>
          <PrivacyPolicyMessage
            hidden={this.state.hidePolicyMessage}
            hide={() => {
              this.setState(prevState => {
                return {
                  ...prevState,
                  hidePolicyMessage: true
                };
              });
            }}
          />
          <Switch>
            <Route
              path="/login"
              render={props => (
                <div className="container-fluid my-3">
                  <Provider store={loginStore}>
                    <LoginPageContainer
                      loginUser={user => this.loginUser(user)}
                    />
                  </Provider>
                </div>
              )}
            />
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/privacy-policy">
              <PrivacyPolicyPage />
            </Route>
            <Route
              path="/search"
              render={() => (
                <div className="container-fluid my-3">
                  <Provider store={searchStore}>
                    <SearchPageContainer />
                  </Provider>
                </div>
              )}
            />
            <Route
              path="/details/:id"
              render={props => (
                <Provider store={detailStore}>
                  <DetailPageContainer
                    recipeId={props.match.params.id}
                    isLoggedIn={this.state.isLoggedIn}
                    user={this.state.user}
                    admin={this.state.admin}
                  />
                </Provider>
              )}
            />
            <Route
              path="/profile/:id?"
              render={props => (
                <ProfilePage
                  userId={props.match.params.id}
                  isLoggedIn={this.state.isLoggedIn}
                />
              )}
            />
            <Route
              path="/editor/:recipeId?"
              render={props => (
                //<Provider store={editorPageStore}>
                <EditorPage {...props} />
                //</Provider>
                // <EditorPage {...props} isLoggedIn={this.state.isLoggedIn} />
              )}
            />
            <Route
              path="/localRecipes"
              render={props => (
                // <Provider store={editorPageStore}>
                <LocalRecipePage />
                // </Provider>
              )}
            />
            <Route exact path="/">
              {homePageMessage}
              {homePageDescription}
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
