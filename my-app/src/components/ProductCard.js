import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';

export default function ProductCard({ id, title, subtitle, description }) {
  return (
    <Card className="bg-light border border-dark rounded-3 m-4">
      <CardBody>
        <CardTitle tag="h5">
          {title}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          {subtitle}
        </CardSubtitle>
        <div className="bi bi-tv-fill display-1"></div>
        <CardText>
          {description}
        </CardText>
        <Button>
          Learn More
        </Button>
      </CardBody>
    </Card>
  );
}