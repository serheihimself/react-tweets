import { useState, useEffect } from 'react';
import { usersGet } from '../../services/servicesApi';
import TweetsCard from 'components/TweetsCard/TweetsCard';
import { List } from './TweetsList.styles';

export default function TweetsList({ users, updateUserFollowers }) {
  const [allListUsers, setAllListUsers] = useState([]);
  const [follow, setFollow] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await usersGet();
      setAllListUsers(data);
    })();
  }, []);

  useEffect(() => {
    const storedFollow = localStorage.getItem('follow');
    storedFollow
      ? setFollow(JSON.parse(storedFollow))
      : setFollow(new Array(allListUsers.length).fill(false));
  }, [allListUsers.length]);
  const handleChangeFollowers = (id, followers, isFollowing, i) => {
    const updateFollower = follow.map((el, idx) => (idx === i ? !el : el));

    setFollow(updateFollower);
    localStorage.setItem('follow', JSON.stringify(updateFollower));
    updateUserFollowers(id, followers, isFollowing);
  };

  return (
    <List>
      <TweetsCard
        users={users}
        handleChangeFollowers={handleChangeFollowers}
        follow={follow}
      />
    </List>
  );
}
