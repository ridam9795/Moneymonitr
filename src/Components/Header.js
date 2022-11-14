import React, { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import { Link, NavLink } from "react-router-dom";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar color="light" light expand="md">
        <Link to="/" className="disable-textDecoration">
          Moneymonitr
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar style={{ marginLeft: "auto" }}>
            <NavItem className="nav-item">
              <NavLink to="/" className="disable-textDecoration">
                Expense
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink to="/investment" className="disable-textDecoration">
                Investment
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink to="/bills" className="disable-textDecoration">
                Bills
              </NavLink>
            </NavItem>
            <NavItem className="nav-items">
              <NavLink to="/emi" className="disable-textDecoration">
                EMI
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink to="/totalSpendings" className="disable-textDecoration">
                Total Spendings
              </NavLink>
            </NavItem>
            <NavItem className="nav-items">
              <NavLink to="/login" className="disable-textDecoration">
                Login
              </NavLink>
            </NavItem>
            <NavItem className="nav-items">
              <NavLink to="/register" className="disable-textDecoration">
                Register
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header;
