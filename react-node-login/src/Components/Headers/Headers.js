import React from 'react'
import { Fragment } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Headers.css"

const Headers = ({ auth }) => {

  console.log();


  const onLogout = (e) => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  const guestMenu = (
    <Nav.Link to="/" as={Link} >Login</Nav.Link>
  );

  const authMenu = (

    <Fragment>
      <Nav.Link to="/Home" as={Link} >Home</Nav.Link>
      <NavDropdown title="Clients" id="basic-nav-dropdown">
        <NavDropdown.Item to="/Clients" as={Link}>Create</NavDropdown.Item>
        <NavDropdown.Item to="/ClientsView" as={Link}>View</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Transactions" id="basic-nav-dropdown">
        <NavDropdown.Item to="/Create" as={Link}>Create</NavDropdown.Item>
        <NavDropdown.Item to="/View" as={Link}>Views</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link onClick={onLogout}>Logout</Nav.Link>
    </Fragment>
  );



  return (
    <Fragment>

      <div>
        <Navbar className="md-2" bg="info">
          <Navbar.Brand to="/" as={Link} >MICHEAL JINO</Navbar.Brand>
        </Navbar>
      </div>

      <br />

      <div>
        <Navbar expand="lg" bg="light" variant="light" >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto _navbar">
              {auth ? authMenu : guestMenu}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Fragment>
  )
}

export default Headers;