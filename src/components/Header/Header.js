import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from "styled-components"
import "./header.scss"
import { 
  Navbar,
  Nav,
  NavDropdown,
  Container
} from 'react-bootstrap'

import { 
  navbarBrand,
} from './Header.module.scss'

const NavbarBrand = styled.link`
  line-height: 1.75rem;
`


const Header = () => {

  const logo_height = 30;
  const logo_width = 30;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" className={`w-100 text-uppercase ${navbarBrand}`} >
          <StaticImage 
            src="../../images/logo.png"
            width={logo_width}
            height={logo_height}
            className="d-inline-block align-top"
            alt="Awesome Inc Logo"
            loading="eager"
          /> Awesome Inc
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Learn to Code" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Learn to Code</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">Youth Courses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Adult Courses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kids Camps</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Bootcamp</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Startups" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Startups</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">Startups</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">I Have an Idea</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Startup Accelerator</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">5 Across</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Innovation Incubated</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Community Yearbook</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Workspace" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Workspace</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Schedule a Tour</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Office Space</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Events</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Web & App Development" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Web & App Development</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Be Awesome" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Be Awesome</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">About</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Core Values</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Press</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Careers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Internships</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Events</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
