import {connect} from 'react-redux';
import HomePage from "../pages/HomePage";
import UserService from "../service/UserService";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        user: state.user
    };
};

const service = UserService.getInstance();

const dispatcherToPropertyMapper = (dispatch, ownProps) => {
    return {
        login: (username, password) => {
            service.login(username, password)
                .then(user => {
                    dispatch({
                        type: 'LOGIN',
                        user: user
                    });
                });
        },
    };
};

const HomePageContainer =
    connect(stateToPropertyMapper, dispatcherToPropertyMapper)(HomePage);

export default HomePageContainer;