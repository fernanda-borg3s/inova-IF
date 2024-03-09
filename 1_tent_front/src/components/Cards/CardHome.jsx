import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'


export default function CardHome(){
    return(
        <>
         <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card style={{width: '20rem'}}>
          <Card.Header className='d-flex justify-content-end'>#ID</Card.Header>
            <Card.Body>
              <Card.Title>Nome do Encotro</Card.Title>
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
    </Row>
        {/* <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}
        
        </>
    )
}