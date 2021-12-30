import React from 'react';
import {
  //Nav,
  Navbar,
  NavbarBrand,
  //Card,
  //CardTitle,
  //CardBody,
  DropdownToggle,
  Input,
  InputGroup,
  ButtonDropdown,
  Button,
  DropdownItem
} from 'reactstrap';

export default function App() {

  return (
    <div id='app'>
      <Navbar
        color="light"
        expand="md"
        light
      >
        <NavbarBrand>
          <img
            src="../../public/amazonlogo.jpeg"
            alt='logo'
          />
        </NavbarBrand>
        <InputGroup>
          <ButtonDropdown>
            <DropdownToggle
              caret
              nav
            />
            <DropdownItem>
              Header
            </DropdownItem>
            <DropdownItem>
              Action
            </DropdownItem>
          </ButtonDropdown>
          <Input placeholder='Search for products here!'/>
          <Button>Search</Button>
        </InputGroup>
      </Navbar>
    </div>
  );
}