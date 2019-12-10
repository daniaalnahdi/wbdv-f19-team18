import {connect} from 'react-redux';
import HomePage from "../pages/HomePage";
import UserService from "../service/UserService";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        likesFeed: state.likes,
        commentsFeed: state.comments
    };
};

const service = UserService.getInstance();

const dispatcherToPropertyMapper = (dispatch, ownProps) => {
    return {
        login: (username, password) => {
            service.login(username, password)
                .then(() => {
                    dispatch({
                        type: 'FIND_ALL_LIKES',
                        likesFeed: state.likes
                    });
                });
        },
    };
};

const HomePageContainer =
    connect(stateToPropertyMapper, dispatcherToPropertyMapper)(HomePage);

export default HomePageContainer;