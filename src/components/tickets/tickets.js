import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

import { getVisibleTodos, getVisibleNumTransfers } from 'utils/filters';
import Loader from 'components/loader';
import TabsFilter from 'components/tabs-filter';
import Card from 'components/card';
import { selectFilter } from 'store';
import { VisibilityFilters } from 'store/types.actions';

import styles from './tickets.module.scss';

const cx = classNames.bind(styles);

function Tickets({ tickets, selectFilter, filter = VisibilityFilters.CHEAPEST, loading, loadingAll: [isLoad, load] }) {
  const [amount, setAmount] = useState(5);
  const isVisibleItems = tickets.splice(0, amount).map(({ carrier, price, segments }) => {
    const key = Math.floor(Math.random() * 1000000);
    return <Card key={key} price={price} carrier={carrier} segments={segments} />;
  });

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 40,
      }}
      spin
    />
  );
  const spin = <Spin indicator={antIcon} />;
  const handlerClick = () => setAmount((amount) => amount + 5);
  const stateBtn = !(tickets.length <= 0);

  return (
    <section className={cx('tickets')}>
      <div className={cx('tickets__filter')}>
        <TabsFilter selectFilter={selectFilter} filter={filter}>
          <TabsFilter.Btn actionsType={VisibilityFilters.CHEAPEST}>Самый дешевый</TabsFilter.Btn>
          <TabsFilter.Btn actionsType={VisibilityFilters.FASTEST}>Самый быстрый</TabsFilter.Btn>
          <TabsFilter.Btn actionsType={VisibilityFilters.OPTIMAL}>Оптимальный</TabsFilter.Btn>
        </TabsFilter>
      </div>
      {isLoad && <Loader loading={load} />}

      <div className={cx('tickets__card')}>{loading ? spin : isVisibleItems}</div>
      <button
        type="button"
        className={cx('tickets__btn', { 'tickets__btn--disabled': !stateBtn })}
        disabled={!stateBtn}
        onClick={handlerClick}
      >
        Показать еще 5 билетов!
      </button>
    </section>
  );
}
Tickets.propTypes = {
  selectFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  loadingAll: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.number])).isRequired,
};

const mapStateToProps = ({
  tickets: { tickets, loading, loadingAll },
  selectFilter,
  checkFilter: { checkboxes, checkbox },
}) => ({
  tickets: getVisibleNumTransfers(getVisibleTodos(tickets, selectFilter), checkboxes, checkbox),
  filter: selectFilter,
  loading,
  loadingAll,
});

const mapDispatchToProps = { selectFilter };
export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
