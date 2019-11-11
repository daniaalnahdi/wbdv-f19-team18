import React from 'react';
import './App.css';
import SearchPageContainer from "./containers/SearchPageContainer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import SearchPageReducer from "./reducers/SearchPageReducer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailPage from "./components/DetailPage";

const App = () => {
    const store = createStore(SearchPageReducer);
    return (
        <Router>
            <Switch>
                <Route path="/recipe/:id"
                       render={(props) => <DetailPage recipeId={props.match.params.id}/>}/>
                <Route path="*"
                       render={() =>
                           <div className="container-fluid my-3">
                               <Provider store={store}>
                                   <SearchPageContainer/>
                               </Provider>
                           </div>
                       }/>
            </Switch>
        </Router>
    );
};

export default App;
