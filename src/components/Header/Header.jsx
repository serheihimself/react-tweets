import { HeaderBox, LinkNav } from './Header.styles';

export default function Header() {
  return (
    <HeaderBox>
      <LinkNav to="/">
        <p>Home</p>
      </LinkNav>
      <LinkNav to="tweets">
        <p>Tweets</p>
      </LinkNav>
    </HeaderBox>
  );
}
