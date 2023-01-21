import PropTypes from 'prop-types';

import css from './Statistics.module.css';

import StatisticItem from './StatisticItem';

export default function StatisticList({ stats }) {
  return (
    <ul className={css.statList}>
      {stats.map(stat => {
        return (
          <StatisticItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        );
      })}
    </ul>
  );
}

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
