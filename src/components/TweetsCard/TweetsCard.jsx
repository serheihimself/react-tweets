import React from 'react';
import { nanoid } from 'nanoid';
import {
  Card,
  Logo,
  BgImg,
  Img,
  BorderImg,
  ImgBox,
} from 'components//TweetsCard/TweetsCard.styles';
import { Text } from 'components/Main.styles';
import { CardBtn } from 'components//TweetsCard/TweetsCard.styles';

export default function TweetsCard({ users, follow, handleChangeFollowers }) {
  return users.map(({ id, user, tweets, followers, avatar }, index) => (
    <Card key={nanoid()}>
      <Logo src={require('../../services/images/logo.png')} alt="my_logo" />
      <BgImg
        src={require('../../services/images/bg_img.png')}
        alt="my_bg_img"
      />
      <Img src={avatar} alt={user} />
      <BorderImg></BorderImg>
      <ImgBox>
        <Text>{tweets}105 TWEETS</Text>
        <Text>10{followers + 1} FOLLOWERS</Text>
      </ImgBox>
      <CardBtn
        type="button"
        onClick={() =>
          handleChangeFollowers(id, followers, follow[index], index)
        }
        followed={follow[index]}
      >
        {follow[index] ? 'Following' : 'Follow'}
      </CardBtn>
    </Card>
  ));
}
