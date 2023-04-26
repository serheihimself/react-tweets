import React from 'react';
import {
  Card,
  Logo,
  BgImg,
  Img,
  BorderImg,
  ImgBox,
  Button,
} from 'components//TweetsCard/TweetsCard.styles';
import { Text } from 'components/Main.styles';

export default function TweetsCard({ users, follow, handleChangeFollowers }) {
  return users.map(({ id, user, tweets, followers, avatar }, index) => (
    <Card>
      <Logo src={require('../../services/images/logo.png')} alt="my_logo" />
      <BgImg
        src={require('../../services/images/bg_img.png')}
        alt="my_bg_img"
      />
      <Img src={avatar} alt={user} />
      <BorderImg></BorderImg>
      <ImgBox>
        <Text>{tweets} TWEETS</Text>
        <Text>{followers + 1} FOLLOWERS</Text>
      </ImgBox>
      <Button
        type="button"
        onClick={() =>
          handleChangeFollowers(id, followers, follow[index], index)
        }
        followed={follow[index]}
      >
        {follow[index] ? 'Following' : 'Follow'}
      </Button>
    </Card>
  ));
}
