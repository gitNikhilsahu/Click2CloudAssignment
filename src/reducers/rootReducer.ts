import { combineReducers } from 'redux';

import accountReducer from './accountReducer';
import cartReducer from './cartReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  account: accountReducer,
  cart: cartReducer,
  product: productReducer
});

export default rootReducer;