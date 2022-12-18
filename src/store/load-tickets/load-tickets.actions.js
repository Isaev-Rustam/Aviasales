import AviaSalesApi from 'services/avia-sales-api/avia-sales-api';
import { Loading } from 'store/types.actions';

const start = (tickets) => {
  console.log(tickets);
  return { type: Loading.DOWNLOAD_START, tickets, loading: false, loadingAll: [true, 0] };
};
const load = (tickets, load) => ({ type: Loading.LOADING, tickets, loading: false, loadingAll: [true, load] });
const end = (tickets) => ({ type: Loading.DOWNLOAD_END, tickets, loading: false, loadingAll: [false, 100] });

const loadTickets = () => async (dispatch) => {
  const aviaSalesApi = new AviaSalesApi();

  const receivedBeginning = (tickets, loading, loadingAll) => {
    dispatch(start(tickets, loading, loadingAll));
  };
  const receivedLoad = (tickets, l) => {
    dispatch(load(tickets, l));
  };
  const receivedEnd = (tickets) => {
    dispatch(end(tickets));
  };

  aviaSalesApi.getTickets(receivedBeginning, receivedEnd, receivedLoad);
};

export default loadTickets;
