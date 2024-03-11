import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
// import { encontros } from '../../Data';

export default function CardHome(encontros){
  console.log(encontros.lenght)
    return(
        <>
        {Array.from({ length: encontros }).map((_, idx) => (
        <Col key={idx}>
          <Card style={{width: '20rem'}}>
          <Card.Header className='d-flex justify-content-end'>{encontros.id}</Card.Header>
            <Card.Body>
              <Card.Title>{encontros.tituloEncontro}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <ListGroup className="list-group-flush">
        <ListGroup.Item className="p-0">Data</ListGroup.Item>
        <ListGroup.Item className="p-0">Horário</ListGroup.Item>
        <ListGroup.Item className="p-0">Sala</ListGroup.Item>
        <ListGroup.Item className="p-0">Professor</ListGroup.Item>
        <ListGroup.Item className="p-0">Vestibulum at eros</ListGroup.Item>
      </ListGroup>
              <Button variant="danger" className='mt-3'>
              <i className="bi bi-trash p-1"></i>
              Cancelar Inscrição</Button>
            </Card.Body>
          </Card>
          </Col>
      ))}

        </>
    )
}