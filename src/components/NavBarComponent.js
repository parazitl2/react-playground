import PropTypes from 'prop-types';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { useCallback, useState } from 'react';
import store from '../store';
import { login, logout, rename } from '../store/actions';

export function NavBarComponent({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleLog = useCallback((event) => {
    store.getState().user 
      ? store.dispatch(logout())
      : store.dispatch(login({ name: "Ann" }))
  }, [login, logout]);

  const toggleName = useCallback(() => {
    store.getState().user && store.dispatch(rename('Zara'));
  }, []);

  return (
    <Navbar color='light' light expand="md">
      <NavbarBrand href="/">WTF?</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink >
          </NavItem>
        </Nav>
      </Collapse>
      <NavItem onClick={toggleName}>
        {
          store.getState().user
            ? store.getState().user.name
            : "Stranger"
        }
      </NavItem>
      <NavItem onClick={handleLog}>
        {
          store.getState().user
            ? "Logged in"
            : "Logged out"
        }
      </NavItem>
    </Navbar>
  );
};

NavBarComponent.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string
  })
};

NavBarComponent.defaultProps = {
  user: {
    username: "Stranger"
  }
};