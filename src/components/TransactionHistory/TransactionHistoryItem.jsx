import PropTypes from 'prop-types';

import css from './TransactionHistory.module.css';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr className={css.row}>
      <td className={css.cell}>{type}</td>
      <td className={css.cell}>{amount}</td>
      <td className={css.cell}>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;

TransactionHistoryItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
