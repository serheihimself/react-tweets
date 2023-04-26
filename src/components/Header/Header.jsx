import { NavLink } from 'react-router-dom';
// import { HeaderBox } from './Header.styled';

export default function Header() {
  return (
    <header>
      <div>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="tweets">
          <p>Tweets</p>
        </NavLink>
      </div>
    </header>
  );
}
