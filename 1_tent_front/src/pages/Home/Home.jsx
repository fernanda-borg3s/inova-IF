import { NavbarC } from "../../components/Navbar/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Home.css'
import CardHome from "../../components/Cards/CardHome";
export default function Home(){
    return (
    <>
        <NavbarC/>
        
        <Container className="box-container mt-5">
        <h1>INÍCIO</h1>
        <div className="pastas-inicio d-flex align-items-center mt-5 p-5 ">
        <Card style={{ width: '18rem', minWidth: '13rem'}}>
        {/* <i className="bi bi-folder-fill"></i> */}
      <Card.Body>
        <Card.Title>Encontros Inscritos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Conferir Meus Encontros</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem'}} className="ms-5">
        {/* <i className="bi bi-folder-fill"></i> */}
      <Card.Body>
        <Card.Title>Encontros Disponíveis</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Conferir Encontros Disponíveis</Card.Link>
      </Card.Body>
    </Card>
        </div>

    <h2 className="mt-5 mb-4">Agenda para Hoje</h2>
  
      <Row>
        <Col>
        <CardHome/>
        </Col>
      
      </Row>
    </Container>
       
    </>
    
    )
}