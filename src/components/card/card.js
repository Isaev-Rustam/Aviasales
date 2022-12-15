import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { getTime, getTimeEnd, getTravelTime, transplants, formatPrice } from 'utils/card';

import styles from './card.module.scss';

const cx = classNames.bind(styles);

function Card({ price, carrier, segments: [firstRoute, secondRoute] }) {
  return (
    <article className="card">
      <table className={cx('card__table')}>
        <tbody>
          <tr>
            <th colSpan="2">{formatPrice(price)}Р</th>
            <th>
              <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="" />
            </th>
          </tr>
          <tr className={cx('card__table-location')}>
            <td>
              {firstRoute.origin} – {firstRoute.destination}
            </td>
            <td>В пути</td>
            <td>{transplants(firstRoute.stops.length)}</td>
          </tr>
          <tr className={cx('card__table-time')}>
            <td>
              {getTime(firstRoute.date)} – {getTime(getTimeEnd(firstRoute.date, firstRoute.duration))}
            </td>
            <td>{getTravelTime(firstRoute.duration)}</td>
            <td>{firstRoute.stops.toString()}</td>
          </tr>
          <tr className={cx('card__table-location')}>
            <td>
              {secondRoute.origin} – {secondRoute.destination}
            </td>
            <td>В пути</td>
            <td>{transplants(secondRoute.stops.length)}</td>
          </tr>
          <tr className={cx('card__table-time')}>
            <td>
              {getTime(secondRoute.date)} – {getTime(getTimeEnd(secondRoute.date, secondRoute.duration))}
            </td>
            <td>{getTravelTime(secondRoute.duration)}</td>
            <td>{secondRoute.stops.toString()}</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}

Card.defaultProps = {
  price: 0,
  carrier: '',
};
Card.propTypes = {
  price: PropTypes.number,
  carrier: PropTypes.string,
  segments: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      destination: PropTypes.string,
      duration: PropTypes.number,
      origin: PropTypes.string,
      stops: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default Card;
