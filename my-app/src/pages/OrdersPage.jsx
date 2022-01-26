import { /*useEffect,*/ useState } from "react";
import {
  Col,
  Container,
  Row
} from 'reactstrap';
import OrderCard from "./../components/OrderCard";

const descriptionText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore...`

export default function OrdersPage() {
  return (
    <Container
      className="p-3"
      fluid
    >
      <h1 className='text-center m-1'>Orders Page</h1>
      <hr className="mx-3"/>
      <Row>
        <OrderCard
          id={"tv"}
          title={"title"}
          subtitle={"subtitle"}
          description={descriptionText}
        />
      </Row>
    </Container>
  );
}