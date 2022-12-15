import { SET_VISIBILITY_FILTER } from 'store/types.actions';

const selectFilter = (filter) => ({ type: SET_VISIBILITY_FILTER, filter });
export default selectFilter;
