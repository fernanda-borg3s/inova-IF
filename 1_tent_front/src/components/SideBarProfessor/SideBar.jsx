import Nav from 'react-bootstrap/Nav';
import './SideBar.css'
// import NavDropdown from 'react-bootstrap/NavDropdown';
export default function SideBar(){
    return (
        <>
         <div className="sidebar">
      <ul className="list-group">
        <li className="list-group-item">
          <Nav.Link href=''>
          <i className="bi bi-house-door"></i>
            Inicio</Nav.Link>
        </li>
        <li className="list-group-item">
          <Nav.Link href=''>
          <i className="bi bi-mortarboard"></i>
            Meus Encontros</Nav.Link>
        </li>
        <li className="list-group-item">
          <Nav.Link href=''>
          <i className="bi bi-card-list"></i>
            Encontros Disponíveis</Nav.Link>
        </li>
        <li className="list-group-item">
          <Nav.Link href=''>
          <i className="bi bi-card-text"></i>
            Encontros Cadastrados</Nav.Link>
        </li>
        
      </ul>
    </div>
        </>
    )
}