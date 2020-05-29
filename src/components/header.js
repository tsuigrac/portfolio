import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header className="navbar-custom">
    <Container>
      {/* <Navbar bg="light" expand="sm" variant="light"> */}
      <Navbar className="navbar-custom">
        {/* <Navbar.Brand href="/"> {siteTitle}</Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="navbarResponsive" /> */}
        {/* <Navbar.Collapse id="navbarResponsive"> */}
        <Nav as="ul" className="ml-auto">
          <Nav.Item as="li">
            <Link to="/" className="nav-link" activeClassName="active">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/work" className="nav-link" activeClassName="active">
              Work
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/about" className="nav-link" activeClassName="active">
              About
            </Link>
          </Nav.Item>
        </Nav>
        {/* </Navbar.Collapse> */}
      </Navbar>
    </Container>
    {/* <Container>
    </Container> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
