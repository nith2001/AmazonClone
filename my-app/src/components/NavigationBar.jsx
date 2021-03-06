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

export default function NavigationBar({ setSearch, setCategory }) {
  return (
    <Navbar
      expand="md"
      light
      className='bg-light border'
      container="fluid"
    >
      <NavbarBrand href="/" className='my-3 mx-2'>
        FlowStore
      </NavbarBrand>
      <Searchbar setSearch={setSearch} setCategory={setCategory} />
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
