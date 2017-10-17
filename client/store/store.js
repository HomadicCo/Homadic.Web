import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware, syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

// reducers
import addListing from './addListing/reducer';
import authentication from './Authentication/reducer';
import homes from './Home/reducer';
import map from './Map/reducer';
import profile from './Profile/reducer';

// data
import { emptyListing } from '../data';

const defaultState = {
  authentication: {},
  addListing: {
    nearbyResults: [],
    listing: emptyListing,
    ui: {}
  },
  homes: {
    data: [],
    fetching: false,
    selected: {}
  },
  map: {
    markers: [],
    addNewListingMode: false
  },
  profile: { data: {} }
};

const appReducer = combineReducers({
  addListing,
  authentication,
  homes,
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
