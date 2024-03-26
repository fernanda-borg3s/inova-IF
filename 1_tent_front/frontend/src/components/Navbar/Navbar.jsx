import logo from '../../assets/Img/LogoWhite.png'
import '../../App.jsx'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Outlet } from 'react-router-dom';
import './Navbar.css'
export function NavbarC(){
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
                  <Nav.Link href="/home">Início</Nav.Link>
               
                  <NavDropdown
                    title="Encontros"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="dropdown-left"
                  >
                    <NavDropdown.Item href="/home/encontrosInscritos">
                    <i className="bi bi-mortarboard"></i>
                      Meus Encontros</NavDropdown.Item>
                    <NavDropdown.Item href="/home/encontrosDisponivel">
                    <i className="bi bi-card-list"></i>
                      Encontros Disponíveis
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                    <i className="bi bi-card-text"></i>
                      Encontros Cadastrados
                    </NavDropdown.Item>
                  </NavDropdown>
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