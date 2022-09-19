import { Profile } from 'components/profile/Profile.jsx';
import { Statistics } from 'components/statistics/Statistics.jsx';
import user from 'components/user';
import data from 'components/data';

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
 
    </div>
  );
};
