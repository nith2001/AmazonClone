import { /*useEffect,*/ useState } from "react";
import {
  Col,
  Container,
  Row
} from 'reactstrap';
import Accordion from 'react-bootstrap/Accordion';
import ProductCard from '../components/ProductCard';
import './searchpage.css';

const descriptionText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore...`

export default function SearchPage({ search, category }) {

  // fetch search results from the search and category passed in using useEffect.

  const [open, setOpen] = useState('1');

  const toggle = (id) => {
    open === id ? setOpen() : setOpen(id);
    console.log(open);
  };

  return (
    <Container
      className="p-3"
      fluid
    >
      <h1 className='text-center m-1'>Search Results</h1>
      <hr />
      <Row className='text-center my-3 mx-2 p-1'>
        {
          // these columns will be replaced by some array mapping that returns product cards
          // generated from data given by helper functions + backend
        }
        <Col>
          <Accordion
            defaultActiveKey={['0']}
            alwaysOpen
            id="filter-box"
            className="my-4 mx-2"
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Price Range</Accordion.Header>
              <Accordion.Body>
                Option #1
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Ratings</Accordion.Header>
              <Accordion.Body>
                Option #2
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col>
          <ProductCard
            id={"tv"}
            title={"title"}
            subtitle={"subtitle"}
            description={descriptionText}
          />
          <ProductCard
            id={"tv"}
            title={"title"}
            subtitle={"subtitle"}
            description={descriptionText}
          />
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
          <ProductCard
            id={"tv"}
            title={"title"}
            subtitle={"subtitle"}
            description={descriptionText}
          />
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
          <ProductCard
            id={"tv"}
            title={"title"}
            subtitle={"subtitle"}
            description={descriptionText}
          />
          <ProductCard
            id={"tv"}
            title={"title"}
            subtitle={"subtitle"}
            description={descriptionText}
          />
        </Col>
      </Row>
    </Container>
  );
}