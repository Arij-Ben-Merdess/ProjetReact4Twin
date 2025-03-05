import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavigationBar(){
    return ( <>
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/add-event">Add Event</Nav.Link>
            <Nav.Link href="/link">Link</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </> );

}