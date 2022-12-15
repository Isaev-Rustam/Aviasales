import classNames from 'classnames/bind';
import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import styles from './tabs-filter.module.scss';

const cx = classNames.bind(styles);

function TabsFilter({ children, selectFilter, filter }) {
  const renderChildren = () =>
    Children.map(children, (child) =>
      cloneElement(child, {
        onFilterChange: () => selectFilter(child.props.actionsType),
        className: cx({ 'tabs-filter__btn--active': filter === child.props.actionsType }),
      })
    );

  return <ul className={cx('tabs-filter')}>{renderChildren()}</ul>;
}
TabsFilter.defaultProps = {
  selectFilter: () => {},
  filter: 'CHEAPEST',
};
TabsFilter.propTypes = {
  children: PropTypes.node.isRequired,
  selectFilter: PropTypes.func,
  filter: PropTypes.string,
};

TabsFilter.Btn = function Btn({ children, className, onFilterChange }) {
  return (
    <li className={cx('tabs-filter__item')}>
      <button type="button" className={cx('tabs-filter__btn', className)} onClick={onFilterChange}>
        {children}
      </button>
    </li>
  );
};
TabsFilter.Btn.defaultProps = {
  className: '',
  onFilterChange: () => {},
};
TabsFilter.Btn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onFilterChange: PropTypes.func,
};
export default TabsFilter;
