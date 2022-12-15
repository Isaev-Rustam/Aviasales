import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Header, Body, NumTransfers, Tickets } from 'components';
import { loadTickets } from 'store';

function PageTickets({ loadTickets }) {
  useEffect(() => {
    loadTickets();
  }, [loadTickets]);

  return (
    <>
      <Header />
      <Body>
        <NumTransfers />
        <Tickets />
      </Body>
    </>
  );
}

PageTickets.defaultProps = {
  loadTickets: () => {},
};
PageTickets.propTypes = {
  loadTickets: PropTypes.func,
};

const mapDispatchToProps = { loadTickets };
export default connect(null, mapDispatchToProps)(PageTickets);
