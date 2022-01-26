import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';
import './ordercard.css';

export default function OrderCard({ id, title, subtitle, description }) {
  return (
    <Card className="bg-light border border-dark rounded-3 m-4 ordercard">
      <CardBody>
        <div className="bi bi-tv-fill display-1"></div>
        <CardTitle tag="h5">
          {title}
        </CardTitle>
        <Button>
          Learn More
        </Button>
      </CardBody>
    </Card>
  );
}