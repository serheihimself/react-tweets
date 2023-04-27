import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const HeaderBox = styled.header`
  display: flex;
  justify-content: center;
  background: #5736a3;
  gap: 50px;
  padding: 20px;
`;
export const LinkNav = styled(NavLink)`
  font-family: 'Montserrat';
  text-decoration: none;
  color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  &.active {
    color: yellowgreen;
  }
`;
