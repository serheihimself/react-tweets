import React from 'react';
import {
  Card,
  Logo,
  BgImg,
  Img,
  BorderImg,
  ImgBox,
  Text,
  Button,
} from 'components//TweetsCard/TweetsCard.styles';

export default function TweetsCard() {
  return (
    <Card>
      <Logo src={require('../../services/images/logo.png')} alt="my_logo" />
      <BgImg
        src={require('../../services/images/bg_img.png')}
        alt="my_bg_img"
      />
      <Img src="" alt="" />
      <BorderImg></BorderImg>
      <ImgBox>
        <Text>TWEETS</Text>
        <Text>FOLLOWERS</Text>
      </ImgBox>
      <Button type="button">FOLLOW</Button>
    </Card>
  );
}
