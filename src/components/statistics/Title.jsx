import PropTypes from 'prop-types';

import s from './Statistics.module.css';

export const Title = (title) => {
  return (
    <>
      {title && <h2 className={s.title}>{title}</h2>}
  </>
)
}
Title.propTypes = {
  title: PropTypes.string
}