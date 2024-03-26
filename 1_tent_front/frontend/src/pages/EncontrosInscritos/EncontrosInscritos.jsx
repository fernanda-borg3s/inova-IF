
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';

import '../EncontrosDisponiveis/EncontrosDisponivel.css'
// import CardHome from "../../components/Cards/CardHome";

// import { encontros } from "../../Data.js";
import { useEffect, useState} from 'react';

import axios from 'axios';


const baseURL = 'http://localhost:3000'

export default function EncontrosInscritos(){
  // console.log(encontros);
  const [encontrosInscrito, setEncontrosInscrito] = useState([]);


  useEffect(() => {
    const fetchEncontros = async () => {
      try {
        const response = await axios.get(`${baseURL}/inscricao/inscrito/1`);
        setEncontrosInscrito(response.data.data);
        // console.log(encontros);
  
      } catch (error) {
        console.error('Erro ao recuperar dados:', error);
      }
    };
    
    fetchEncontros();
  }, []); 
    return (
    <>
    
        <Container className="box-container mt-5">
            <h1 className='h1-encontro-disponivel'>Meus Encontros</h1>
          <Row>
            <Col>
             
                {/* verificar se esta vazio */}
       {encontrosInscrito.length === 0 ? (
        <p>Não há encontros disponíveis.</p>
      ) : (
        <Row xs={1} md={2} className="g-4">
           {encontrosInscrito.map((inscrito, index) => (
            <Col key={index}>
              <Card style={{width: '20rem'}}>
                <Card.Header className='d-flex justify-content-end'>{inscrito.id_encontro}</Card.Header>
                <Card.Body>
                  <Card.Title>{inscrito.titulo_encontro}</Card.Title>
                  <ListGroup className="list-group-flush">
                  <ListGroup.Item className="p-0">Componente Curricular: {inscrito.componente_curricular}</ListGroup.Item>
                    <ListGroup.Item className="p-0">Data:{inscrito.data_inicio} até {inscrito.data_fim}</ListGroup.Item>
                    <ListGroup.Item className="p-0">Horários: {inscrito.hora_inicio} até {inscrito.hora_fim}</ListGroup.Item>
                    <ListGroup.Item className="p-0">Sala: {inscrito.sala}</ListGroup.Item>
                    <ListGroup.Item className="p-0">Professora(o): {inscrito.nome_professora}</ListGroup.Item>
                    <ListGroup.Item className="p-0">Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                  <Button variant="danger" className='mt-3'>
                    <i className="bi bi-trash p-1"></i>
                    Inscrever-se
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
            </Col>
          </Row>
        </Container>
     
    </>
    
    )
}