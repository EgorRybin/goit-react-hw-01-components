import PropTypes from 'prop-types';
import defaultImg from 'components/profile/defaultimg.jpg';
import css from 'components/profile/Profile.module.css';

export const Profile = ({username, tag, location, avatar = defaultImg, stats}) => {
    return (<div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
    />
            <p>{username}</p>
            <p>{tag}a</p>
            <p>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.lable}>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.lable}>Views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={css.lable}>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>)
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired, 
    avatar: PropTypes.string.isRequired, 
    stats: PropTypes.object.isRequired
}