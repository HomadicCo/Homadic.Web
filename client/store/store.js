import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware, syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import persistState from 'redux-localstorage';

// reducers
import addListing from './addListing/reducer';
import authentication from './Authentication/reducer';
import filter from './Filter/reducer';
import listings from './Listing/reducer';
import map from './Map/reducer';
import profile from './Profile/reducer';
import ui from './UI/reducer';

// data
import { emptyListing, listingValidations, defaultFilter } from '../data';

const defaultState = {
  addListing: {
    nearbyResults: [],
    listing: emptyListing,
    valid: listingValidations,
    ui: {}
  },
  authentication: {},
  filter: defaultFilter,
  listings: {
    selected: {},
    data: [],
    fetching: false
  },
  map: {
    markers: [],
    addNewListingMode: false,
    filterMode: false
  },
  profile: { data: {} },
  ui: {
    loading: false,
    reviewEditorOpen: false,
    mapView: false
  }
};

const appReducer = combineReducers({
  addListing,
  authentication,
  filter,
  listings,
  map,
  profile,
  routing: routerReducer,
  ui
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(browserHistory)),
    persistState(['addListing'])
  )
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
