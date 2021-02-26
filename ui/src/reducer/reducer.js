const initialStateToken = {
  hasToken: false,
  authenticated: false,
  userData: null
};

const reducer = (state = {...initialStateToken}, action) => {
  // const accessToken = localStorage.getItem('accessToken');
  // state = {
  //   ...state,
  //   hasToken: accessToken !== null,
  // };

  switch (action.type) {
    case 'TOKEN_SET':
      return {...state, hasToken: action.payload !== null};
    case 'SET_USER_DATA':
      return {...state, userData: action.payload !== null};
    case 'SIGN_UP_SUCCESS':
      return {...state, authenticated: action.payload};
    default:
      return state;
  }
};

export default reducer;