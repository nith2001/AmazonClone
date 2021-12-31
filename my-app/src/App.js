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
        fluid='lg'
      >
        <Row className='text-center m-4 xl'>
          <Col>

          </Col>
          <Col>

          </Col>
          <Col>

          </Col>
          <Col>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App;
