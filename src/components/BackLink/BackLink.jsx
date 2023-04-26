import { NavLink } from 'react-router-dom';
import { Button } from 'components/Main.styles';

export const BackLink = ({ to, children }) => {
  return (
    <div>
      <Button>
        <NavLink to={to}>{children}</NavLink>
      </Button>
    </div>
  );
};
