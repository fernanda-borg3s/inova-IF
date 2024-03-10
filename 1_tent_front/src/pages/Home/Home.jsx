import { NavbarC } from "../../components/Navbar/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
import './Home.css'
import CardHome from "../../components/Cards/CardHome";
import Welcome from "../../components/Welcome/Welcome";
export default function Home(){
    return (
    <>
        <NavbarC/>
        
        <Container className="box-container mt-5">
        <Welcome/>

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