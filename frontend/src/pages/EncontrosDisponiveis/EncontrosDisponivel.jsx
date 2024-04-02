
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './EncontrosDisponivel.css'
// import CardHome from "../../components/Cards/CardHome";

// import { encontros } from "../../Data.js";
import { useEffect, useState} from 'react';

import axios from 'axios';

const baseURL = 'http://localhost:3000'

export default function EncontrosDisponivel(){
  // console.log(encontros);
  const [encontrosDisponivel, setEncontrosDisponivel] = useState([]);


  useEffect(() => {
    const fetchEncontros = async () => {
      try {
        const response = await axios.get(`${baseURL}/encontros/encontrosDisponivel`);
        setEncontrosDisponivel(response.data.data);
        // console.log(encontros);
  
      } catch (error) {
        console.error('Erro ao recuperar dados:', error);
      }
    };
    
    fetchEncontros();
  }, []); 
  function formatDate(dateString) {
    const datePart = dateString.substring(0, 10);
    const parts = datePart.split("-")
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }
    return (
    <>
    
        <Container className="box-container mt-5">
            <h1 className='h1-encontro-disponivel'>Encontros Disponíveis para inscrição</h1>
          <Row>
            <Col>
             
                {/* verificar se esta vazio */}
       {encontrosDisponivel.length === 0 ? (
        <p>Não há encontros disponíveis.</p>
      ) : (
        <Row xs={1} md={3} className="g-4 mt-2">
            {encontrosDisponivel.map((encontro, index) => (
            <Col key={index}>
              <Card className='cardHome-container'>
                <Card.Header className='d-flex justify-content-end card-header'>{index + 1}</Card.Header>
                <Card.Body>
                  <Card.Title className='py-1 '>{encontro.titulo_encontro}</Card.Title>
                  <ListGroup className="list-group-flush">
                  <ListGroup.Item className="px-1">Componente Curricular: <span>{encontro.componente_curricular}</span></ListGroup.Item>
                    <ListGroup.Item className="px-1">Data: <span>{formatDate(encontro.data_inicio)}</span> até <span>{formatDate(encontro.data_fim)}</span></ListGroup.Item>
                    <ListGroup.Item className="px-1">Horários: <span>{encontro.hora_inicio}</span> até <span>{encontro.hora_fim}</span></ListGroup.Item>
                    <ListGroup.Item className="px-1">Sala: <span>{encontro.sala}</span></ListGroup.Item>
                    <ListGroup.Item className="px-1">Professora(o): <span>{encontro.nome_professora}</span></ListGroup.Item>

                  </ListGroup>
                    <Button variant="success" className='mt-3 px-4' style={{fontWeight:'bold'}}>
                    Inscrever
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