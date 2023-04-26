import { NavLink } from 'react-router-dom';

export const BackLink = ({ to, children }) => {
  return (
    <button>
      <NavLink to={to}>{children}</NavLink>
    </button>
  );
};
