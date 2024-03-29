import {connect} from 'react-redux';
import LoginPage from "../pages/LoginPage";
import UserService from "../service/UserService";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        user: state.user
    };
};

const service = UserService.getInstance();

const dispatcherToPropertyMapper = (dispatch) => {
    return {
        login: (username, password) => {
            return service.login(username, password)
                .then(user => {
                    const dispatchObj = dispatch({
                        type: 'LOGIN',
                        user: user
                    });
                    return dispatchObj.user;
                });
        },
    };
};

const LoginPageContainer =
    connect(stateToPropertyMapper, dispatcherToPropertyMapper)(LoginPage);

export default LoginPageContainer;