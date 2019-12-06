import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import SearchPageContainer from "../containers/SearchPageContainer";
import React from "react";
import { createStore } from "redux";
import SearchPageReducer from "../reducers/SearchPageReducer";
//UI Elements
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
//Pages
import DetailPage from "../pages/DetailPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "./ProfilePage";
import PrivacyPolicyPage from "./PrivacyPolicyPage";


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
            render={props => <DetailPage recipeId={props.match.params.id} />}
          />
          <Route
            path="/profile/:id"
            render={props => <ProfilePage userId={props.match.params.id} />}
          />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
};

export default HomePage;
