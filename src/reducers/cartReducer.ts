const initState = {
  cart: [],
  wishlist: []
};

const CartReducer = (state:any = initState, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      state = {
        ...state,
        cart: [action.payload, ...state.cart]
      };
      break;
    }
    
    case "ADD_TO_WISHLIST": {
      state = {
        ...state,
        wishlist: [action.payload, ...state.wishlist]
      };
      break;
    }

    case "HANDLE_QTY_TO_CART": {
      const {i,v} = action.payload;
      state = {
        ...state,
        cart: state.cart.map((item:any,index:number) => index===i ? {price: item.price, description: item.description, image: item.image, qty: v} : item)
      };
      break;
    }

    case "DELETE_TO_CART": {
      state = {
        ...state,
        cart: state.cart.filter((_item:any, index:any)=>index!==action.payload)
      };
      break;
    }

    case "DELETE_TO_WISHLIST": {
      state = {
        ...state,
        wishlist: state.wishlist.filter((_item:any, index:any)=>index!==action.payload)
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
