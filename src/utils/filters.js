import { VisibilityFilters } from '../store/types.actions';

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.CHEAPEST:
      return todos.slice().sort((a, b) => a.price - b.price);
    case VisibilityFilters.FASTEST:
      return [...todos.sort((a, b) => a.segments[0] + a.segments[1] - (b.segments[0] + b.segments[1]))];
    case VisibilityFilters.OPTIMAL:
      return [
        ...todos.sort(
          (a, b) =>
            a.price +
            a.segments[0].duration +
            a.segments[1].duration -
            (b.price + b.segments[0].duration + b.segments[1].duration)
        ),
      ];
    default:
      return todos;
  }
};

export const getVisibleNumTransfers = (todos, checkboxes, checkbox) => {
  let VisibleItems = [...todos];
  if (checkbox === 0) {
    return checkboxes[0] ? VisibleItems : [];
  }
  if (checkboxes[checkbox] && checkbox === 1) {
    VisibleItems = VisibleItems.filter(
      (ticket) => ticket?.segments[0]?.stops?.length === 0 && ticket?.segments[1]?.stops?.length === 0
    ).concat(VisibleItems);
  }
  if (checkboxes[checkbox] && checkbox === 2) {
    VisibleItems = VisibleItems.filter(
      (ticket) => ticket?.segments[0]?.stops?.length === 1 && ticket?.segments[1]?.stops?.length === 1
    ).concat(VisibleItems);
  }
  if (checkboxes[checkbox] && checkbox === 3) {
    VisibleItems = VisibleItems.filter(
      (ticket) => ticket?.segments[0]?.stops?.length === 2 && ticket?.segments[1]?.stops?.length === 2
    ).concat(VisibleItems);
  }
  if (checkboxes[checkbox] && checkbox === 4) {
    VisibleItems = VisibleItems.filter(
      (ticket) => ticket?.segments[0]?.stops?.length === 3 && ticket?.segments[1]?.stops?.length === 3
    ).concat(VisibleItems);
  }
  return VisibleItems;
};
