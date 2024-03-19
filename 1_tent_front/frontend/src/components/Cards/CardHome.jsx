import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
// import { encontros } from '../../Data';
import { useEffect, useState} from 'react';

import axios from 'axios';

const baseURL = 'http://localhost:3000'
export default function CardHome(){
  const [encontros, setEncontros] = useState([]);


  useEffect(() => {
    const fetchEncontros = async () => {
      try {
        const response = await axios.get(`${baseURL}/`);
        setEncontros(response.data.data);
        // console.log(encontros);
  
      } catch (error) {
        console.error('Erro ao recuperar dados:', error);
      }
    };
    
    fetchEncontros();
  }, []); 
    return(
      
        <>
        {/* verificar se esta vazio */}
       {encontros.length === 0 ? (
        <p>Nenhum encontro encontrado.</p>
      ) : (
        <Row xs={1} md={2} className="g-4">
          {encontros.map((encontro, index) => (
            <Col key={index}>
              <Card style={{width: '20rem'}}>
                <Card.Header className='d-flex justify-content-end'>{encontro.id_encontro}</Card.Header>
                <Card.Body>
                  <Card.Title>{encontro.titulo_encontro}</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item className="p-0">Data:{encontro.data_inicio} até {encontro.data_fim}</ListGroup.Item>
                    <ListGroup.Item className="p-0">Horários: {encontro.hora_inicio} até {encontro.hora_fim}</ListGroup.Item>
                    <ListGroup.Item className="p-0">Sala: -precisa fazer junção de tabela</ListGroup.Item>
                    <ListGroup.Item className="p-0">Professor-precisa fazer junção de tabela</ListGroup.Item>
                    <ListGroup.Item className="p-0">Vestibulum at eros</ListGroup.Item>
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
    </>
  );
}