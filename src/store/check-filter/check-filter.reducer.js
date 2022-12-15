import { VisibilityChange } from 'store/types.actions';

const initialState = {
  checkboxes: [false, true, false, false, false],
  checkbox: 1,
};

const checkFilter = ({ checkboxes, checkbox } = initialState, { type, index = 1 } = {}) => {
  let itemsState;
  switch (type) {
    case VisibilityChange.ALL:
      itemsState = checkboxes.map((check, i, array) => !array[index]);
      return { checkboxes: itemsState, checkbox: index };
    case VisibilityChange.NON_STOP:
    case VisibilityChange.ONE_TRANSFER:
    case VisibilityChange.TWO_TRANSFER:
    case VisibilityChange.THREE_TRANSFERS:
      itemsState = checkboxes.map((check, i) => (i !== index ? check : !check));
      itemsState[0] = itemsState.slice(1).every((check) => check === true);
      if (itemsState[0]) {
        return { checkboxes: itemsState, checkbox: 0 };
      }
      return { checkboxes: itemsState, checkbox: index };
    default:
      return { checkboxes, checkbox };
  }
};

export default checkFilter;
