import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './body.js.module.scss';

const cx = classNames.bind(styles);

function Body({ children }) {
  return <div className={cx('body')}>{children}</div>;
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Body;
