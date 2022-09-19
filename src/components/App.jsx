import { Profile } from 'components/profile/Profile.jsx';
import { Statistics } from 'components/statistics/Statistics.jsx';
import { FriendList } from './friendList/FriendList';
import user from 'components/user';
import data from 'components/data';
import friends from 'components/friends';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
