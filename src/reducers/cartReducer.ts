const initState = {
  loading: false,
};

const CartReducer = (state:any = initState, action: any) => {
  switch (action.type) {
    case "LOADING_T": {
      state = {
        ...state,
        loading: true
      };
      break;
    }

    case "LOADING_F": {
      state = {
        ...state,
        loading: false
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
export default CartReducer;
