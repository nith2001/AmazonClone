import React from 'react';
import {
  Button,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem
} from 'reactstrap';
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';

export default function NavigationBar({ handleSearch }) {
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
      <Searchbar handleSearch={handleSearch}/>
      <Nav
        navbar
      >
        <NavItem>
          <Link to="/profile">
            <Button className='m-2 rounded-pill'>Profile</Button>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/orders">
            <Button className='m-2 rounded-pill'>My Orders</Button>
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  )
}
