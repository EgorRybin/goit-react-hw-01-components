import PropTypes from 'prop-types';

import s from 'components/statistics/Statistics.module.css';
import { Stats } from './Stats';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <Stats data={stats} />
    </section>
  );
};
Statistics.propTypes = {
  stats: PropTypes.array,
  title: PropTypes.string,
};
