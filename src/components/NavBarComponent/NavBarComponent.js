import PropTypes from 'prop-types';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
import { useState } from 'react';

export function NavBarComponent({ user, isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  console.log(user);
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