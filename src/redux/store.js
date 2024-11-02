import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { actionTypeLogger, payloadLogger } from './middlewares';
import { composeWithDevTools } from 'redux-devtools-extension';

// Create the store with middleware applied
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(actionTypeLogger, payloadLogger))
);

export default store;
