import { SET_VISIBILITY_FILTER, VisibilityFilters } from 'store/types.actions';

const initialState = VisibilityFilters.CHEAPEST;

const selectFilter = (state = initialState, { type, filter } = {}) => {
  switch (type) {
    case SET_VISIBILITY_FILTER:
      return filter;
    default:
      return state;
  }
};

export default selectFilter;
