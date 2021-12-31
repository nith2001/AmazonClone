import React from 'react';
import {
  Button,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem
} from 'reactstrap';
import Searchbar from './Searchbar';

export default function NavigationBar() {
  return (
    <Navbar
      expand="md"
      light
      className='bg-light border'
      container="fluid"
    >
      <NavbarBrand href="/" className='m-2 ms-3'>
        FlowStore
      </NavbarBrand>
      <Searchbar />
      <Nav
        navbar
      >
        <NavItem>
          <Button className='m-2 rounded-pill'>Profile</Button>
        </NavItem>
        <NavItem>
          <Button className='m-2 rounded-pill'>My Orders</Button>
        </NavItem>
      </Nav>
    </Navbar>
  )
}
