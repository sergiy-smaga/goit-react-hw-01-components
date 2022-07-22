import css from './App.module.css';
import { Profile } from './Profile/Profile';
import user from '../user.json/user.json';

export const App = () => {
  return (
    <div className={css.App}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
