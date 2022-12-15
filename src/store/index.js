import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import loadTickets from './load-tickets/load-tickets.actions';
import checkFilterNumTransfers from './check-filter/check-filter.actions';
import selectFilter from './tabs-filter/tabs-filter.actions';
import rootReducer from './rootReducer';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export { checkFilterNumTransfers, loadTickets, selectFilter };

const state = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default state;
