import logo from '../../assets/Img/LogoWhite.png'
import '../../App.jsx'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Outlet } from 'react-router-dom';
import '../Navbar/Navbar.css'
export function NavbarProfessor(){
    return (
        <>
{['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 navStyle" >
          <Container >
            <Navbar.Brand href="#">  
            <div className="logo-inova">
                <img src={logo} alt="Logo do inova if"/>
            </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 navLink">
                  <Nav.Link href="#action1">Início</Nav.Link>
                  <Nav.Link href="#action1">Encontros Cadastrados</Nav.Link>
                  <Nav.Link href="#action1">Encontros Disponíveis</Nav.Link>
               
               
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
      ))}


<Outlet/>
        </>
    )
}