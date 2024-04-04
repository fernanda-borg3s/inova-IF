import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/esm/Row';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';

export default function ModalEditar({ show, setModalOpen, props }){
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return(
        <>
    
        <Modal    
        {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show} 
      onClick={setModalOpen} >
        <Modal.Header closeButton>
            <Modal.Title>Editar lista de Inscritos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover responsive="sm mb-2">
            <thead>
                <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Matrícula</th>
                <th>Email</th>
                
                </tr>
            </thead>
            <tbody>
            {/* {allAluno.map((aluno, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{aluno.nome_aluna}</td>
                        <td>{aluno.mat_aluna}</td>
                        <td>{aluno.email}</td>
                </tr>
               ))} */}
            </tbody>

        </Table>
        <div>
            <h6>Adicionar Alunas</h6>
        <Row className="mb-3"> 
       <Col>
       <InputGroup >
        <InputGroup.Text id="inputGroup-sizing-default">
          Nome
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      </Col>
      
      <Col>
      <InputGroup >
        <InputGroup.Text id="inputGroup-sizing-default">
          Matrícula
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      </Col>
      
      </Row>
      <Row className="mb-3"> 
      <Col>
      <InputGroup >
        <InputGroup.Text id="inputGroup-sizing-default">
          Nome Social
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      </Col>
      <Col>
      
      <InputGroup >
        <InputGroup.Text id="inputGroup-sizing-default">
          Email
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      </Col>
        
      
      </Row>
      
        </div>
       

        </Modal.Body>
        <Modal.Footer>
     
            <Button variant="secondary" onClick={setModalOpen}>
            Cancelar
            </Button>
            <Button variant="success" >Adicionar Aluno</Button>
            {/* <Button variant="secondary" onClick={handleClose}>
            Cancelar
            </Button>
            <Button variant="success" onClick={addAluno}>Adicionar Aluno</Button> */}
        </Modal.Footer>
  </Modal>
      
        </>
    )
}