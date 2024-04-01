import logo from '../../assets/Img/LogoWhite.png'
import '../../App.jsx'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Outlet, useNavigate } from 'react-router-dom';
import UserLogo from '../../assets/Img/UserLogo.png'
import '../Navbar/Navbar.css'
import { useEffect, useContext} from 'react';

import { toast } from 'react-toastify';
import { UserContext } from '../../Context/UserContext.jsx'
import axios from 'axios';

const baseURL = 'http://localhost:3000'

export function NavbarProfessor(){
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();
  useEffect(() => {
    const userLoggedProf = async () => {

      try {
        const response = await axios.get(`${baseURL}/user/userProfessora/`, {
          headers: {
            jwt_token: `${localStorage.getItem("token")}`,
          }
        });
        setUser(response.data);
        // console.log(encontros);
  
      } catch (error) {
        console.error('Erro ao recuperar dados:', error);
      }
    };
    
    userLoggedProf();
  }, []); 
 
  function signout() {
    localStorage.removeItem("token");
    setUser(undefined);
    navigate("/");
    toast.success("Logout com sucesso")
  }
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
                  <Nav.Link href="/gerenciarEncontro">Início</Nav.Link>
                  <Nav.Link href="/gerenciarEncontro/encontrosCadastrados">Encontros Cadastrados</Nav.Link>
                  {user ? (
                  <Dropdown className='dropdown-left pt-1'>
                    <Dropdown.Toggle  id="dropdown-basic" style={{backgroundColor:'transparent', border:'1px solid'}} className='ps-2 pe-3'>
                    {user.nome_professora}
                      <img src={UserLogo} alt="raposa" className="user-img" ></img>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Header>Matrícula:</Dropdown.Header>
                      <Dropdown.Item href="#" disabled>{user.mat_professora}</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={signout} ><i className="bi bi-box-arrow-right"></i>Sair</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                 ) : (<span>ERROR</span>)}
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