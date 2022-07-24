import css from './App.module.css';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../jsonFilesWithData/user.json';
import data from '../jsonFilesWithData/data.json';
import friends from '../jsonFilesWithData/friends.json';
import transactions from '../jsonFilesWithData/transactions.json';

export const App = () => (
  <div className={css.App}>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);
