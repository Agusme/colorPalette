import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import Color from "../PaletaColores/Color";
import CardColors from "../cardColor/CardColors";

const FormColor = () => {
  let colorsFormLocalStorage =
    JSON.parse(localStorage.getItem("colorList")) || [];

  const [color, setColor] = useState("");
  const [colors, setColors] = useState(colorsFormLocalStorage);
  const [alert, setAlert]= useState(false)

  useEffect(() => {
    localStorage.setItem("colorList", JSON.stringify(colors));
  }, [colors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color.trim() !== "") {
      if (colors.includes(color)) {
        setAlert(true);
        setTimeout(() => setAlert(false), 3000);
        setColor("");

      } else {
        setColors([...colors, color]);
        setColor("");
      }
    }
  };

const deleteColor =(colorDelete)=>{
let  filterColor = colors.filter((color)=> color !== colorDelete)
  setColors(filterColor)
}

  return (
    <Container>
      <Card className="mt-3">
        <Card.Header>Administrar colores</Card.Header>
        <Card.Body>
          <Row className="bg-info p-3">
            <Col xl={3} lg={4} md={6}>
              <Color color={color} ></Color>
            </Col>
            <Col xl={9} lg={8} md={6} className="pt-4">
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Ingrese un color"
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                  value={color}
                />
              
              </Form>
              
            </Col>
          </Row>
          <div className="d-flex justify-content-end mt-3">
                <Button variant="primary" onClick={handleSubmit}>
                  Guardar
                </Button>
              </div>
          {alert && (
            <div className="mt-3">
              <Alert variant="warning" onClose={() => setAlert(false)} dismissible>
                El color {color} ya está guardado en localStorage.
              </Alert>
            </div>
          )}
        </Card.Body>
      </Card>

      <CardColors colorsArray={colors} deleteColor ={deleteColor} ></CardColors>

    </Container>
  );
};

export default FormColor;
