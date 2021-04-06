import PropTypes from 'prop-types';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
import { useState } from 'react';

export function NavBarComponent({ user, isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  console.log(user, isLoggedIn);
  return (
    <Navbar color='light' light expand="md">
      <NavbarBrand href="/">WTF?</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/feed">Feed</NavLink >
          </NavItem>
          <NavItem>
            <NavLink href="/wow">Wow</NavLink >
          </NavItem>
          <NavItem>
            <NavLink href="/check/">Check</NavLink >
          </NavItem>
          <NavItem>
            <NavLink href="/login/">Login</NavLink >
          </NavItem>
        </Nav>
      </Collapse>
      <NavbarText>
        {
          isLoggedIn
            ? user.username
            : 'Stranger'
        }
      </NavbarText>
    </Navbar>
  );
};

NavBarComponent.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string
  }),
  isLoggedIn: PropTypes.bool
};

NavBarComponent.defaultProps = {
  user: {
    username: "Stranger"
  },
  isLoggedIn: false
};