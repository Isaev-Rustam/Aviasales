import { VisibilityFilters } from '../store/types.actions';

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.CHEAPEST:
      return todos.slice().sort((a, b) => a.price - b.price);
    case VisibilityFilters.FASTEST:
      return [...todos.sort((a, b) => a.segments[0] - b.segments[0])];
    case VisibilityFilters.OPTIMAL:
      return [...todos.sort((a, b) => a.price + a.segments[0].duration + (b.price + b.segments[0].duration))];
    default:
      return todos;
  }
};
export const getVisibleNumTransfers = (data, state) => {
  const items = [...data];
  let visibleItems = [];
  if (state.every((i) => i === true)) {
    return items;
  }
  if (state.every((i) => i === false)) {
    return [];
  }
  if (state[1]) {
    visibleItems = [
      ...visibleItems,
      ...items.filter((ticket) => ticket?.segments[0]?.stops?.length === 0 && ticket?.segments[1]?.stops?.length === 0),
    ];
  }
  if (state[2]) {
    visibleItems = [
      ...visibleItems,
      ...items.filter((ticket) => ticket?.segments[0]?.stops?.length === 1 && ticket?.segments[1]?.stops?.length === 1),
    ];
  }
  if (state[3]) {
    visibleItems = [
      ...visibleItems,
      ...items.filter((ticket) => ticket?.segments[0]?.stops?.length === 2 && ticket?.segments[1]?.stops?.length === 2),
    ];
  }
  if (state[4]) {
    visibleItems = [
      ...visibleItems,
      ...items.filter((ticket) => ticket?.segments[0]?.stops?.length === 2 && ticket?.segments[1]?.stops?.length === 3),
    ];
  }
  return visibleItems;
};
