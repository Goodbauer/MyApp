const getTokenInfo = () =>{
    return localStorage.getItem('accessToken') ? true : false;
};

const initialState= {
    authenticated: getTokenInfo(),
    userData: null
};

const reducer = (state = {...initialState}, action) => {
    state = {
        ...state
    };
    console.log(action);
    switch (action.type) {
        case 'SET_USER_DATA':
            return {...state, userData: action.payload}
        case 'SIGN_UP_SUCCESS':
            return {...state, authenticated: action.payload};
        case 'SIGN_IN_SUCCESS':
            return {...state, authenticated: action.payload};
        default:
            return state;
    }
};

export default reducer;