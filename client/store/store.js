import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware, syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

// reducers
import authentication from './Authentication/reducer';
import map from './Map/reducer';
import profile from './Profile/reducer';

const defaultState = {
  authentication: {},
  map: { data: {} },
  profile: { data: {} }
};

const appReducer = combineReducers({
  authentication,
  map,
  profile,
  routing: routerReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(browserHistory))
  )
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
