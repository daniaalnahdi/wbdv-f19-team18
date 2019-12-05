import React from 'react';
import './App.css';
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import HomePageContainer from "./containers/HomePageContainer";
import { Provider } from "react-redux";
import HomePageReducer from "./reducers/HomePageReducer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faPlus, faGripHorizontal, faSortAlphaUp, faList, faEdit, faTimes, faArrowUp, faArrowDown }
    from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faPlus, faGripHorizontal, faSortAlphaUp, faList, faEdit, faTimes, faArrowUp, faArrowDown);

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
