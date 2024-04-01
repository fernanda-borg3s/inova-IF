
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';
import './EncontrosInscritos.css'
import '../EncontrosDisponiveis/EncontrosDisponivel.css'
// import CardHome from "../../components/Cards/CardHome";

// import { encontros } from "../../Data.js";
import { useEffect, useState, useContext} from 'react';
import { UserContext } from '../../Context/UserContext.jsx'

import axios from 'axios';


const baseURL = 'http://localhost:3000'

export default function EncontrosInscritos(){
  // console.log(encontros);
  const [encontrosInscrito, setEncontrosInscrito] = useState([]);
  const { user } = useContext(UserContext);



  useEffect(() => {
    const fetchEncontros = async () => {
      try {
        const response = await axios.get(`${baseURL}/inscricao/inscritos/${user.id_aluna}`);
        setEncontrosInscrito(response.data.data);
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
            <h1 className='h1-encontro-disponivel'>Meus Encontros</h1>
          <Row>
            <Col>
             
                {/* verificar se esta vazio */}
       {encontrosInscrito.length === 0 ? (
        <p>Não há encontros disponíveis.</p>
      ) : (
        <Row xs={1} md={3} className="g-4 mt-2 ">
           {encontrosInscrito.map((inscrito, index) => (
            <Col key={index}>
              <Card style={{}} className='cardInscrito-container'>
              <Card.Header className='d-flex justify-content-end card-header'>{index + 1}</Card.Header>
                <Card.Body>
                  <Card.Title className='py-1 '>{inscrito.titulo_encontro}</Card.Title>
                  <ListGroup className="list-group-flush">
                  <ListGroup.Item className="px-1">Componente Curricular: <span>{inscrito.componente_curricular}</span></ListGroup.Item>
                  <ListGroup.Item className="px-1">Descrição: <span>{inscrito.descricao_encontro}</span></ListGroup.Item>
                    <ListGroup.Item className="px-1">Data: <span>{formatDate(inscrito.data_inicio)}</span> até <span>{formatDate(inscrito.data_fim)}</span></ListGroup.Item>
                    <ListGroup.Item className="px-1">Horários: <span>{inscrito.hora_inicio}</span> até <span>{inscrito.hora_fim}</span></ListGroup.Item>
                    <ListGroup.Item className="px-1">Sala: <span>{inscrito.sala}</span></ListGroup.Item>
                    <ListGroup.Item className="px-1">Professora(o): <span>{inscrito.nome_professora}</span></ListGroup.Item>

                  </ListGroup>
                  <Button variant="danger" className='mt-3'>
                    <i className="bi bi-trash p-1"></i>
                    Cancelar Inscrição
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