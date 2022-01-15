import React from 'react';
import {
  Col,
  Container,
  Row
} from 'reactstrap';
import ProductCard from '../components/ProductCard';

const descriptionText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore...`

export default function MainPage() {
  return (
    <Container
      className="p-3"
      fluid
    >
      <h1 className='text-center m-4'>Here are some products you might like!</h1>
      <Row className='text-center my-3 mx-2 p-1'>
      {
        // these columns will be replaced by some array mapping that returns product cards
        // generated from data given by helper functions + backend
      }
        <Col>
          <ProductCard
            id={"tv"}
            title={"title"}
            subtitle={"subtitle"}
            description={descriptionText}
          />
        </Col>
        <Col>
          <ProductCard
            id={"tv"}
            title={"title"}
            subtitle={"subtitle"}
            description={descriptionText}
          />
        </Col>
        <Col>
          <ProductCard
            id={"tv"}
            title={"title"}
            subtitle={"subtitle"}
            description={descriptionText}
          />
        </Col>
        <Col>
          <ProductCard
            id={"tv"}
            title={"title"}
            subtitle={"subtitle"}
            description={descriptionText}
          />
        </Col>
      </Row>
    </Container>
  )
}