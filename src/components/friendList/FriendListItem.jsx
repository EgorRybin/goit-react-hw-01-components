import PropTypes from 'prop-types';

import css from '../friendList/FriendListItem.module.css';

export const FriendListItem = ({ friend }) => {
  const { isOnline, avatar, name } = friend;

  return (
    <li className={css.item}>
      <span className={isOnlineColor(isOnline)}></span>
      <img src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

function isOnlineColor(isOnline) {
  if (isOnline) {
    return css.online;
  }
  return css.offline;
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
