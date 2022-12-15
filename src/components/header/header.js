import classNames from 'classnames/bind';

import headerLogo from 'assets/header-img/Logo.png';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('header')}>
      <button className={cx('header__btn')} type="button">
        <img className={cx('header__logo')} src={headerLogo} alt="logo" />
      </button>
    </header>
  );
}

export default Header;
