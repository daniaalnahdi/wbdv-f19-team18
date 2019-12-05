import React from 'react';
import './App.css';
import { createStore } from "redux";
import SearchPageReducer from "./reducers/SearchPageReducer";
import { BrowserRouter as Router } from "react-router-dom";
import HomePageContainer from "./containers/HomePageContainer";
import { Provider } from "react-redux";
import HomePageReducer from "./reducers/HomePageReducer";

const App = () => {
    const store = createStore(HomePageReducer);
    return (
        <Router>
            <Provider store={store}>
                <HomePageContainer/>
            </Provider>
        </Router>
    );
};

export default App;
