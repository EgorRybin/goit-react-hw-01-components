import PropTypes from 'prop-types';
import css from 'components/statistics/Statistics.module.css';

export const Statistics = ({ stats, title }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statList}>
       {stats.map(d =>
     (<li className={css.item} key={d.id}>
       <span className={css.label}>{d.label}</span>
       <span className={css.percentage}>{d.percentage}%</span>
      </li>))}
        </ul>
      </section>
        )
}

Statistics.propTypes = {
    stats: PropTypes.array.isRequired,
    title: PropTypes.string
}