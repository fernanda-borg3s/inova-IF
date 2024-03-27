import logo from '../../assets/Img/LogoWhite.png'
import '../../App.jsx'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import UserLogo from '../../assets/Img/UserLogo.png'
import { Outlet } from 'react-router-dom';
import './Navbar.css'
export function NavbarC(){
  const user = 'Petrina Carla Smith'
  const mat = '2023003100103'
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
                 
                  </NavDropdown>
                  <Nav.Link href="/home/agenda" className='me-2'>Agenda</Nav.Link>
                  <Dropdown className='dropdown-left'>
                    <Dropdown.Toggle  id="dropdown-basic" style={{backgroundColor:'transparent', border:'1px solid'}} className='ps-2 pe-3'>
                    {user}
                      <img src={UserLogo} alt="raposa" className="user-img" ></img>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Header>Matrícula:</Dropdown.Header>
                      <Dropdown.Item href="#" disabled>{mat}</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-2"><i className="bi bi-box-arrow-right"></i>Sair</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
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