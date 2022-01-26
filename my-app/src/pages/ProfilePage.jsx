import { /*useEffect,*/ useState } from "react";
import {
  Col,
  Container,
  Row
} from 'reactstrap';

export default function ProfilePage() {
  return (
    <Container
      className="p-3"
      fluid
    >
      <h1 className='text-center m-1'>Profile Page</h1>
      <hr className="mx-3"/>
    </Container>
  );
}