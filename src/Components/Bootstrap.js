import React, { useState } from "react";
import { Form, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { CardContent, Card, TextField } from "@mui/material";

function Bootstrap() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (e) =>{
    e.preventDefault();
    setEmail(email)
  }

  const handlePassword = (e) =>{
    e.preventDefault()
    setPassword(password)
  }
  return (
    <div style={{ width: "760px" }}>
      <Navbar
        expand="sm"
        className="bg-body-tertiary bg-dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Link</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Form
        className="mt-5"
        style={{
          border: "1px solid black",
          width: "25rem",
          height: "23rem",
          marginLeft: "5%",
          borderRadius: "12px",
        }}
      >
        <Form.Label className="h2" style={{ marginLeft: "40%" }}>
          Login
        </Form.Label>
        <Form.Group>
          <Form.Label className="m-2">Email</Form.Label>
          <Form.Control
            className="m-2 text-dark"
            type="text"
            style={{ width: "300px" }}
            onClick={handleEmail}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="m-2">Password</Form.Label>
          <Form.Control
            className="m-2"
            type="password"
            style={{ width: "300px" }}
            onClick={handlePassword}
          />
        </Form.Group>
        <Button className="mt-5" style={{ marginLeft: "35%" }} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

const Mui = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleEmail = (e) =>{
    e.preventDefault()
    setEmail(email)
  }
  const handlePassword = (e) =>{
    e.preventDefault()
    setPassword(password)
  }
  return (
    <div style={{ width: "775px", marginLeft: "49.5%", marginTop: "-31%" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <h2 style={{marginLeft:'45%'}}>Login</h2>
            <Box
              sx={{
                width: 400,
                height: 420,
                border: "1px solid black",
                borderRadius: "12px",
                marginLeft: "25%",
              }}
            >
              <div>
                <TextField className="m-5" placeholder="Email" onClick={handleEmail}></TextField>
                <TextField className="m-5" placeholder="Password" onClick={handlePassword}></TextField>
                <br />
              </div>
              <div style={{ marginLeft: "25%" }}>
                <Button className="m-4" style={{ marginLeft: "50%" }}  type="submit">
                  Login
                </Button>
              </div>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

const layout = () => {
  return (
    <div>
      <Bootstrap />
      <Mui />
    </div>
  );
};

export default layout;
