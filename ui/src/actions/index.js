export const setToken = token => {
    return {
        type: 'TOKEN_SET',
        payload: token
    }
};

export const setUserData = data => {
    return {
        type: 'SET_USER_DATA',
        payload: data
    }
};
