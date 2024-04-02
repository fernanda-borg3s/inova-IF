import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Calendario from '../../components/Calendario/Calendario';
import Footer from '../../components/Footer/Footer';



export default function Agenda(){
    return (
        <>
        <Container fluid="md">
        <h1 style={{margin:'30px 0', color:'#004d2a', fontWeight:'bold', textAlign:'center'}}>Sua Agenda</h1>

    
      <Row >
      
        <Col >
        <Calendario />
        </Col>
       
      </Row>

    </Container>
    <Footer/>
        </>
    )
}