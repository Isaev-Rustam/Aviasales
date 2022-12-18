import { VisibilityChange } from 'store/types.actions';

const initialState = [false, true, false, false, false];

const checkFilter = (state = initialState, { type, index } = {}) => {
  let itemsState;
  switch (type) {
    case VisibilityChange.ALL:
      return state.map((check, i, array) => !array[0]);
    case VisibilityChange.NON_STOP:
    case VisibilityChange.ONE_TRANSFER:
    case VisibilityChange.TWO_TRANSFER:
    case VisibilityChange.THREE_TRANSFERS:
      itemsState = state.map((check, i) => (i !== index ? check : !check));
      itemsState[0] = itemsState.slice(1).every((check) => check === true);
      return itemsState;
    default:
      return [...state];
  }
};

export default checkFilter;
