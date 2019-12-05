import { Route, Switch } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import { Provider } from "react-redux";
import SearchPageContainer from "../containers/SearchPageContainer";
import React from "react";
import { createStore } from "redux";
import SearchPageReducer from "../reducers/SearchPageReducer";

const HomePage = ({}) => {
    const store = createStore(SearchPageReducer);
    return (
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
    );
};

export default HomePage