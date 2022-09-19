import PropTypes from 'prop-types';

import { getRandomHexColor } from '../../utils/randomColor';
import s from './Statistics.module.css';


export const Stats = ({data}) => {

  return (
      <ul className={s.statList}>
          {data.map(({ id, label, percentage }) => <li className={s.item} style={{backgroundColor: getRandomHexColor()}} key={id}>
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
          </li>)}
    </ul>
  )
}
Stats.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.string
}