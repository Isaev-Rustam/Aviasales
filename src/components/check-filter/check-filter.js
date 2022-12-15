import classNames from 'classnames/bind';
import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import Card from '../card';

import styles from './check-filter.module.scss';

const cx = classNames.bind(styles);

function CheckFilter({ children, checkState, handleChange }) {
  const renderChildren = () =>
    Children.map(children, (child, i) =>
      cloneElement(child, { checked: checkState[i], handleChange: () => handleChange(child.props.type, i) })
    );

  return <div className={cx('filter__items')}>{renderChildren()}</div>;
}

Card.defaultProps = {
  children: '',
  checkState: [false, true, false, false, false],
  handleChange: () => {},
};
Card.propTypes = {
  children: PropTypes.node,
  checkState: PropTypes.arrayOf(PropTypes.bool),
  handleChange: PropTypes.func,
};

CheckFilter.Btn = function Btn({ children, className, checked, handleChange }) {
  return (
    <label className={cx('filter__check', className)}>
      <input className={cx('filter__input')} type="checkbox" checked={checked} onChange={handleChange} />
      <span className={cx('filter__box')} />
      {children}
    </label>
  );
};
CheckFilter.Btn.defaultProps = {
  className: '',
  checked: false,
  handleChange: () => {},
};
CheckFilter.Btn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node,
  checked: PropTypes.bool,
  handleChange: PropTypes.func,
};
export default CheckFilter;
