import Profile from '../components/Profile/Profile';
import Statistics from '../components/Statistics/Statistics';

import user from './Profile/user.json';
import data from './Statistics/data.json';

export const App = () => {
  return (
    <>
      <Profile
        // {...user}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
        title="Upload stats"
        stats={data}
      />

      <Statistics stats={data} />
    </>
  );
};
