import PropTypes from 'prop-types';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { useState } from 'react';

export function NavBarComponent({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
      <div>Username</div>
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