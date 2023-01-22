import PropTypes from 'prop-types';

import TransactionHistoryItem from './TransactionHistoryItem';

import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.head}>
        <tr className={css.headRow}>
          <th className={css.thText}>Type</th>
          <th className={css.thText}>Amount</th>
          <th className={css.thText}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tBody}>
        {items.map(item => {
          return (
            <TransactionHistoryItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
