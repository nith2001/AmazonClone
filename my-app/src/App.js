import React from 'react';
import {
  Button,
  Col,
  Container,
  Row
} from 'reactstrap';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <>
      <NavigationBar />
      <h1 className='text-center m-4'>Here are some products you might like!</h1>
      <Container
        className="bg-light border rounded"
      >
        <Row className='text-center m-4'>
          <Col>Hi</Col>
          <Col>Hi</Col>
          <Col>Hi</Col>
          <Col>Hi</Col>
        </Row>
      </Container>
    </>
  )
}

export default App;
