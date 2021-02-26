export const setUserData = data => {
    return {
        type: 'SET_USER_DATA',
        payload: data
    }
};

export const signInSuccess = () => {
    return {
        type: "SIGN_IN_SUCCESS",
        payload: true
    }
};

export const signUpSuccess = () => {
    return {
        type: "SIGN_UP_SUCCESS",
        payload: true
    }
};
