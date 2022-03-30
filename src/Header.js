import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap';

class Header extends React.Component{
    render(){
        return(
            <div>
                <Navbar bg="light" expand="lg">
                  <Container>
                    <Navbar.Brand href="#home">Event Calender</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
            </div>
        )  
    }
}

export default Header;