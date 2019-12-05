const HomePageReducer = (prevState = {user: null}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.user
            };
        default:
            return prevState;
    }
};

export default HomePageReducer;