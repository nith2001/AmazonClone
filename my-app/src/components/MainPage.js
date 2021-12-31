import React from 'react';
import {
  Col,
  Container,
  Row
} from 'reactstrap';
import ProductCard from './ProductCard';

const descriptionText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore...`

export default function MainPage() {
  return (
    <Container
      className="rounded p-3"
      fluid
    >
      <Row className='text-center my-3 mx-2 p-1'>
        <Col>
          <ProductCard
            title={"title"}
            subtitle={"subtitle"}
            description={descriptionText}
          />
        </Col>
        <Col>
          <ProductCard
            title={"title"}
            subtitle={"subtitle"}
            description={descriptionText}
          />
        </Col>
        <Col>
          <ProductCard
            title={"title"}
            subtitle={"subtitle"}
            description={descriptionText}
          />
        </Col>
        <Col>
          <ProductCard
            title={"title"}
            subtitle={"subtitle"}
            description={descriptionText}
          />
        </Col>
      </Row>
    </Container>
  )
}