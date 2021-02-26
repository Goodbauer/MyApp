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

export const signUpSuccess = () => {
  return {
    type: "SIGN_UP_SUCCESS",
    payload: true
  }
};
