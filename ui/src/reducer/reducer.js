const reducer = (state, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case 'SET_USER_INFO':
            const userData = {
                name: state.name,
                role: state.userRole
            };
            return {userData};

        default:
            return state;
    }
};

export default reducer;