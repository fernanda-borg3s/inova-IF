
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'


import './EncontrosCadastrados.css'
// import CardHome from "../../components/Cards/CardHome";

// import { encontros } from "../../Data.js";
import { useEffect, useState} from 'react';

import axios from 'axios';

const baseURL = 'http://localhost:3000'

export default function EncontrosCadastrados(){
  // console.log(encontros);
  const [encontrosCadastrados, setEncontrosCadastrados] = useState([]);
//   const [data, setData] = useState(null);


  useEffect(() => {
    const fetchEncontros = async () => {
      try {
        const response = await axios.get(`${baseURL}/encontros/encontrosCadastrados`);
        setEncontrosCadastrados(response.data.data);
        // console.log(encontros);
    //    for()
        // console.log(encontrosCadastrados.length);
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
    
        <Container className="box-container mt-2">
            <h1 className='h1-encontro-disponivel'>Todos Encontros Cadastrados</h1>
          <Row>
            <Col>
             
                {/* verificar se esta vazio */}
       {encontrosCadastrados.length === 0 ? (
        <p>Não há encontros disponíveis.</p>
      ) : (
        <Row xs={1} md={3} className="g-4 mt-2">
           {encontrosCadastrados.map((encontro, index) => (
            <Col key={index}>
              <Card  className='card-container'>
                
                <Card.Body>
                  <Card.Title className='card-titulo py-1'>{encontro.titulo_encontro}</Card.Title>
                  <ListGroup className="list-group-flush">
                  <ListGroup.Item className="px-1">Área de conhecimento: <span>{encontro.area}({encontro.area_sigla})</span> </ListGroup.Item>
                  <ListGroup.Item className="px-1">Componente Curricular: <span>{encontro.componente_curricular}</span></ListGroup.Item>
                  <ListGroup.Item className="px-1">Descrição: <span>{encontro.descricao_encontro}</span></ListGroup.Item>
                    <ListGroup.Item className="px-1">Data: <span>{formatDate(encontro.data_inicio)}</span> até <span>{formatDate(encontro.data_fim)}</span></ListGroup.Item>
                    <ListGroup.Item className="px-1">Horários: <span>{encontro.hora_inicio}</span> até <span>{encontro.hora_fim}</span></ListGroup.Item>
                    <ListGroup.Item className="px-1">Sala: <span>{encontro.sala}</span></ListGroup.Item>
                    <ListGroup.Item className="px-1">Professora(o): <span>{encontro.nome_professora}</span></ListGroup.Item>
                    <ListGroup.Item className="px-1">Email professora(o): <span>{encontro.email}</span></ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-end card-header'> {index + 1} </Card.Footer>
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