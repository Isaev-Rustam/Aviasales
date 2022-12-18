import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CheckFilter from 'components/check-filter';
import { VisibilityChange } from 'store/types.actions';
import { checkFilterNumTransfers } from 'store';

import styles from './num-transfers.module.scss';

const cx = classNames.bind(styles);

function NumTransfers({ checkState, handleChange }) {
  return (
    <section className={cx('filter')}>
      <h5 className={cx('filter__title')}>Количество пересадок</h5>
      <CheckFilter checkState={checkState} handleChange={handleChange}>
        <CheckFilter.Btn type={VisibilityChange.ALL} className="filter__check--item-1">
          Все
        </CheckFilter.Btn>
        <CheckFilter.Btn type={VisibilityChange.NON_STOP} className="filter__check--item-2">
          Без пересадок
        </CheckFilter.Btn>
        <CheckFilter.Btn type={VisibilityChange.ONE_TRANSFER} className="filter__check--item-3">
          1 пересадка
        </CheckFilter.Btn>
        <CheckFilter.Btn type={VisibilityChange.TWO_TRANSFER} className="filter__check--item-4">
          2 пересадки
        </CheckFilter.Btn>
        <CheckFilter.Btn type={VisibilityChange.THREE_TRANSFERS} className="filter__check--item-5">
          3 пересадки
        </CheckFilter.Btn>
      </CheckFilter>
    </section>
  );
}
NumTransfers.defaultProps = {
  checkState: [false, true, false, false, false],
  handleChange: () => {},
};
NumTransfers.propTypes = {
  checkState: PropTypes.arrayOf(PropTypes.bool),
  handleChange: PropTypes.func,
};

const mapStateToProps = ({ checkFilter }) => ({
  checkState: [...checkFilter],
});

const mapDispatchToProps = { handleChange: checkFilterNumTransfers };

export default connect(mapStateToProps, mapDispatchToProps)(NumTransfers);
