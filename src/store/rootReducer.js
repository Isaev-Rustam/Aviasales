import { combineReducers } from 'redux';

import checkFilter from './check-filter/check-filter.reducer';
import tickets from './load-tickets/load-tickets.reducer';
import selectFilter from './tabs-filter/tabs-filter.reducer';

export default combineReducers({ checkFilter, tickets, selectFilter });
