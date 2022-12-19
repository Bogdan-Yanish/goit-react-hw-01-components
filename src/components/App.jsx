import { Profile } from './Profile/Profile';
import user from '../data/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';

import { FriendList } from './Friend/FriendList';
import friends from '../data/friends.json';

import { TransactionHistory } from './Transaction/TransactionHistory';
import transactions from '../data/transactions.json';

import { Container  } from './Container/Container';

export const App = () => {
  return (
    <Container>
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />

        <Statistics title="Upload stats" stats={data} />

        <FriendList friends={friends} />;

        <TransactionHistory items={transactions} />;
        
    </Container>
  );
};
