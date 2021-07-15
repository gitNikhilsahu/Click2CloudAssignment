const initState = {
    user: {
        name: 'Lorem Ipsum',
        email: 'lorem.ipsum@gmail.com',
        address: 'San Francisco, USA',
        dob: 'Jan 02, 1999',

    },
  };
  
  const AccountReducer = (state:any = initState, action: any) => {
    switch (action.type) {
      case "ADD_USER_DETAIL": {
          const {name, email} = action.payload;
        state = {
          ...state,
          user: {...state.user, name:name, email:email}
        };
        break;
      }
      
      default: {
        state = { ...state };
        break;
      }
    }
    return state;
  };
  export default AccountReducer;
  