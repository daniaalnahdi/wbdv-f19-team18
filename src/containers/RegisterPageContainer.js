import {connect} from 'react-redux';
import RegisterPage from "../pages/RegisterPage";
import UserService from "../service/UserService";
import AdminService from "../service/AdminService";


const stateToPropertyMapper = (state, ownProps) => {
    return {
        user: state.user
    };
};

const userService = UserService.getInstance();

const dispatcherToPropertyMapper = (dispatch) => {
    return {
        createUser: (user) => {
            userService.createUser(user)
                .then(user => {
                    dispatch({
                        type: 'CREATE_USER',
                        user: user
                    }
                    );
                });
        },
    };
};

const RegisterPageContainer =
    connect(stateToPropertyMapper, dispatcherToPropertyMapper)(RegisterPage);

export default RegisterPageContainer;