import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalEditar({ show, children, setModalOpen }){
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return(
        <>
        
  
        <Modal show={show} onClick={setModalOpen} >
        <Modal.Header closeButton>
            <Modal.Title>Editar Encontro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {children}
        </Modal.Body>
        {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Cancelar
            </Button>
            <Button variant="success" onClick={updateEncontro}>Salvar Alterações</Button>
        </Modal.Footer> */}
  </Modal>
      
        </>
    )
}