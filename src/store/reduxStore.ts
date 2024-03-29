import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from 'src/reducers/rootReducer';

const reduxStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default reduxStore;