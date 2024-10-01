// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My React App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <h1 className="text-center">Welcome to My React App</h1>
        <div className="text-center">
          <Button variant="primary">Click Me</Button>
        </div>
      </Container>
    </>
  );
}

export default App;
