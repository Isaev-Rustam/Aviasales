import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './loader.module.scss';

const cx = classNames.bind(styles);

function Loader({ loading }) {
  const style = { width: `${loading}%` };
  return (
    <div className={cx('loader')} style={style}>
      <div className={cx('loader__item')} />
    </div>
  );
}
Loader.defaultProps = { loading: 50 };
Loader.propTypes = { loading: PropTypes.number };
export default Loader;
