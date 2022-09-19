import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';
import css from '../friendList/FriendListItem.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends &&
        friends.map(friend => (
          <FriendListItem key={friend.id} friend={friend} />
        ))}
    </ul>
  );
};
FriendList.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
