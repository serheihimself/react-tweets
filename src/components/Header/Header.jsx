import { NavLink } from 'react-router-dom';
import { HeaderBox } from './Header.styles';
import { Text } from 'components/Main.styles';

export default function Header() {
  return (
    <HeaderBox>
      <NavLink to="/">
        <Text>Home</Text>
      </NavLink>
      <NavLink to="tweets">
        <Text>Tweets</Text>
      </NavLink>
    </HeaderBox>
  );
}
