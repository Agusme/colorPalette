import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const CardColors = (props) => {
  return (
    <Container className="mt-4">
    <Row>
      {props.colorsArray.map((color, index) => (
    <Col  xl={3} lg={4} md={6}>
    <Card key={index} className="my-3">
          <Card.Body>
            <Card.Title>{color} </Card.Title>
            <div
              className="border border-secondary p-5"
              style={{ backgroundColor:color }}
            ></div>
          </Card.Body>
          <Button className="btn-danger btn-sm btn-block" onClick={()=>props.deleteColor(color)}>X</Button>
        </Card>
    </Col>
    
    ))}
            </Row>


    </Container>
  );
};

export default CardColors;
