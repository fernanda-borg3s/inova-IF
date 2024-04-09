import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/esm/Row';
import Table from 'react-bootstrap/Table';
// import Col from 'react-bootstrap/Col';
import { toast } from "react-toastify";
import Paginacao from '../../components/Paginacao/Paginacao.jsx';
import { useEffect, useState} from 'react';
const baseURL = 'http://localhost:3000'
const ITEMS_PER_PAGE = 8;

export default function ModalList({ show, setModalOpen, encontroId, userProf}){
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    
    const [listAlunoInscrito, setListAlunoInscrito] = useState([])
    const [alunoExceptInscrito, setAlunoExceptInscrito] = useState([])
    
    useEffect(() => {
       
      const fetchAlunoInscritosEncontro = async () => {
        try {
          const response = await axios.get(`${baseURL}/inscricao/listInscritos/${userProf}/${encontroId}`); 
          console.log(response);
          setListAlunoInscrito(response.data.data);

        } catch (error) {
          console.error('Erro ao recuperar dados:', error);
          toast.error('Ocorreu um erro ao conectar com servidor, tente novamente mais tarde')

         }
      }
      fetchAlunoInscritosEncontro();
      }, [encontroId]);
      useEffect(() => {
       
        const fetchAlunoNoInscritos = async () => {
          try {
            const response = await axios.get(`${baseURL}/inscricao/exceptInscritos/${userProf}/${encontroId}`); 
            // console.log(response);
            setAlunoExceptInscrito(response.data.data);
  
          } catch (error) {
            console.error('Erro ao recuperar dados:', error);
            toast.error('Ocorreu um erro ao conectar com servidor, tente novamente mais tarde')
  
           }
        }
        fetchAlunoNoInscritos();
        }, [encontroId]);

        const adicionarAluno = async(id_aluna) =>{
          const id_encontro = encontroId;
          try {
            const body = {id_encontro, id_aluna};
            
            const response = await axios.post(`${baseURL}/inscricao/addAluno`, body, {
              headers: {
                "Content-type": "application/json"
              }
            }
            );
          
              toast.success("Aluna(o) adicionado ao encontro!")
              const updatedNewAluno = alunoExceptInscrito.filter(item => item.id_aluna !== id_aluna);
              setListAlunoInscrito(updatedNewAluno);
          } catch (error) {
            
          }
        }
        const removerAluno = async(id_inscricao)=>{
          if(window.confirm("Tem certeza que deseja remover?")){
              try {
                  const response = await axios.delete(`${baseURL}/inscricao/deleteinscricao/${id_inscricao}`);
                  toast.success("Aluna(o) removido do encontro!")
                  const updatedlistInscrito = listAlunoInscrito.filter(item => item.id_inscricao !== id_inscricao);
                  setAlunoExceptInscrito(updatedlistInscrito);
              } catch (error) {
                  toast.error("Ocorreu um erro, tente novamente!")
                  
              } 
          }else{
              return;
          }
       
        }
        const [alunoEncontroCurrentPage, setAlunoEncontroCurrentPage] = useState(1);
  const [alunoExceptCurrentPage, setAlunoExceptCurrentPage] = useState(1);

  const alunoEncontroTotalPages = Math.ceil(listAlunoInscrito?.length / ITEMS_PER_PAGE);
  const alunoExceptTotalPages = Math.ceil(alunoExceptInscrito?.length / ITEMS_PER_PAGE);

  const alunoEncontroPaginatedData = listAlunoInscrito?.slice(
    (alunoEncontroCurrentPage - 1) * ITEMS_PER_PAGE,
    alunoEncontroCurrentPage * ITEMS_PER_PAGE
  );

  const alunoExceptPaginatedData = alunoExceptInscrito?.slice(
    (alunoExceptCurrentPage - 1) * ITEMS_PER_PAGE,
    alunoExceptCurrentPage * ITEMS_PER_PAGE
  );

  const handleAlunoEncontroPageChange = (page) => {
    setAlunoEncontroCurrentPage(page);
  };

  const handleAlunoExceptPageChange = (page) => {
    setAlunoExceptCurrentPage(page);
  };

    return(
        <>
    
        <Modal    
    
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show} 
      onClick={setModalOpen} >
        <Modal.Header closeButton>
            <Modal.Title>Editar lista de Inscritos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h6>Alunas(os) inscritos no encontro</h6>
        <Table striped bordered hover responsive="sm mb-2">
            <thead>
                <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Matrícula</th>
                <th>Email</th>
                <th>Remover</th>
                
                </tr>
            </thead>
            <tbody>
            {listAlunoInscrito && listAlunoInscrito.length > 0 ? (
                alunoEncontroPaginatedData.map((aluno, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{aluno.nome_aluna}</td>
                        <td>{aluno.mat_aluna}</td>
                        <td>{aluno.email}</td>
                  
                        <td><button className="modal-button" onClick={() => removerAluno(aluno.id_inscricao)}> <i className="bi bi-trash-fill" ></i></button></td>
                        
                </tr>
               ))
              ) : (
                <tr>
                  <td colSpan={5}>Não há inscritos nesse encontro...</td></tr>
               )}
            </tbody>

        </Table>
        <Paginacao  
        currentPage={alunoEncontroCurrentPage}
        totalPages={alunoEncontroTotalPages}
        onPageChange={handleAlunoEncontroPageChange} />
        <div>
            <h6>Adicionar Alunas</h6>
            <Table striped bordered hover responsive="sm mb-2">
            <thead>
                <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Matrícula</th>
                <th>Email</th>
                <th>Adicionar</th>
        
                
                </tr>
            </thead>
            <tbody>
            {alunoExceptInscrito && alunoExceptInscrito.length > 0 ? (
            alunoExceptPaginatedData.map((alunoExcept, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{alunoExcept.nome_aluna}</td>
                        <td>{alunoExcept.mat_aluna}</td>
                        <td>{alunoExcept.email}</td>
                        <td><button className="modal-button" onClick={() => adicionarAluno(alunoExcept.id_aluna)}><i className="bi bi-person-plus-fill"></i></button></td>
                     
                        
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>Não há alunos cadastrados...</td></tr>
             )}
            </tbody>

        </Table>
        <Paginacao
        currentPage={alunoExceptCurrentPage}
        totalPages={alunoExceptTotalPages}
        onPageChange={handleAlunoExceptPageChange} />
    
        </div>
       

        </Modal.Body>
        <Modal.Footer>
     
            <Button variant="secondary" onClick={setModalOpen}>
            Cancelar
            </Button>
            <Button variant="success" >Feito</Button>
            {/* <Button variant="secondary" onClick={handleClose}>
            Cancelar
            </Button>
            <Button variant="success" onClick={addAluno}>Adicionar Aluno</Button> */}
        </Modal.Footer>
  </Modal>
      
        </>
    )
}