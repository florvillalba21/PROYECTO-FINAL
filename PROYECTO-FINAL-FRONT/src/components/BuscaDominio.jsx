import { Form, Button, Container } from "react-bootstrap";

export const BuscaDominio = () => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Buscar dominio</Form.Label>
          <Form
            className="border-bottom border-succes"
            type="email"
            placeholder="Dominio sin espacio"
          />
          {/* <Form.Text className="text-muted ">hholaola</Form.Text> */}
        </Form.Group>
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
