import { Loading } from 'store/types.actions';

const initialState = {
  tickets: [],
  loading: true,
  loadingAll: [true, 0],
};

const tickets = (state = initialState, { type, tickets, loading, loadingAll } = {}) => {
  switch (type) {
    case Loading.DOWNLOAD_START:
      return { tickets: [...tickets], loading, loadingAll: [...loadingAll] };
    case Loading.DOWNLOAD_END:
      return { tickets: [...tickets], loading, loadingAll: [...loadingAll] };
    case Loading.LOADING:
      return { tickets: [...state.tickets], loading, loadingAll: [...loadingAll] };
    default:
      return state;
  }
};

export default tickets;
