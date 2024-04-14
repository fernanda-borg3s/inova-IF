
import './GerenciarEncontro.css'
import Container from "react-bootstrap/esm/Container";
import { useEffect, useState, useContext} from 'react';
import { toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from "../../components/Footer/Footer";
import Paginacao from '../../components/Paginacao/Paginacao.jsx';
import { UserContext } from '../../Context/UserContext.jsx'
import axios from 'axios';
import { userLoggedProf } from "../../Service/userservice.js";
import ModalListAluno from '../../components/ModalListAlunos/ListAlunos.jsx';
import AddAluno from '../../components/ModalListAlunos/AddAlunos.jsx';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ModalEditar from '../../components/ModalEditarEncontro/ModalEditarEncontro.jsx';
const baseURL = 'http://localhost:3000'
const ITEMS_PER_PAGE = 10;
export default function GerenciarEncontro(){
  const { user, setUser } = useContext(UserContext);
  async function findUserLoggedProf(){
    try {
      const response = await userLoggedProf();
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
   }
   useEffect(() => {
    if (localStorage.getItem("token")) findUserLoggedProf();
  }, []);

  
    const [myCadastrados, setMyCadastrados] = useState([]);
    const [allAluno, setAllAluno] = useState([]);
    const [show, setShow] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalAdd, setShowModalAdd] = useState(false);
    const [modalId, setModalId] = useState();
    const [modalId2, setModalId2] = useState();
    const [key, setKey] = useState('meuCadastros');
   
    useEffect(() => {
      let isSubscribed = true;
      const fetchMyCadastros = async () => {
        try {
          const response = await axios.get(`${baseURL}/encontros/myCadastros/${user.id_professora}`);
          if (isSubscribed) {
            
            setMyCadastrados(response.data.data);
            console.log(myCadastrados)
          }

        } catch (error) {
          console.error('Erro ao recuperar dados:', error);
          toast.error('Ocorreu um erro ao conectar com servidor, tente novamente mais tarde')

         }
      }
      
      if(user){
        fetchMyCadastros();

      }
    
       return () => {
    isSubscribed = false;
  };
      }, [user]);

      useEffect(() => {
       
        const fetchAllAluno = async () => {
          try {
            const response = await axios.get(`${baseURL}/user/allAluno`);
              setAllAluno(response.data.data);

          } catch (error) {
            console.error('Erro ao recuperar dados:', error);
            toast.error('Ocorreu um erro ao conectar com servidor, tente novamente mais tarde')
  
           }
        }
        fetchAllAluno();
        }, []);
        
    function formatDate(dateString) {
        const parts = dateString.split("-")
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
      }

      const excluirEncontro = async(id_encontro)=>{
        if(window.confirm("Tem certeza que deseja excluir?")){
            try {
                const response = await axios.delete(`${baseURL}/encontros/deleteEncontro/${id_encontro}`);
                toast.success("Encontro excluído com sucesso!")
                const updatedMyCadastro = myCadastrados.filter(item => item.id_encontro !== id_encontro);
                setMyCadastrados(updatedMyCadastro);
            } catch (error) {
                toast.error("Ocorreu um erro, tente novamente!")
                
            } 
        }else{
            return;
        }
     
      }
      const [myCadastroCurrentPage, setMyCadastroCurrentPage] = useState(1);
  const [allAlunoCurrentPage, setAllAlunoCurrentPage] = useState(1);

  const myCadastroTotalPages = Math.ceil(myCadastrados?.length / ITEMS_PER_PAGE);
  const allAlunoTotalPages = Math.ceil(allAluno?.length / ITEMS_PER_PAGE);

  const myCadastroPaginatedData = myCadastrados?.slice(
    (myCadastroCurrentPage - 1) * ITEMS_PER_PAGE,
    myCadastroCurrentPage * ITEMS_PER_PAGE
  );

  const allAlunoPaginatedData = allAluno?.slice(
    (allAlunoCurrentPage - 1) * ITEMS_PER_PAGE,
    allAlunoCurrentPage * ITEMS_PER_PAGE
  );

  const handleMyCadastroPageChange = (page) => {
    setMyCadastroCurrentPage(page);
  };

  const handleAllAlunoPageChange = (page) => {
    setAllAlunoCurrentPage(page);
  };
      
      //função necessaria para abrir a lista de acordo com id_encontro corretamente
      const mostrarModal = (id_encontro) => {
        setShow(true);
        setModalId(id_encontro);
      }
    const [editEncontro, setEditEncontro] = useState([])

      const mostrarModalEditarEncontro = async (id_encontro, userProf) => {
      
        setShowModalEdit(true);
        // setModalEditId(id_encontro);
        try {
          const response = await axios.get(`${baseURL}/encontros/editCadastro/${userProf}/${id_encontro}`); 
          console.log(response);
         setEditEncontro(response.data.data);
         console.log(editEncontro);


        } catch (error) {
          console.error('Erro ao recuperar dados:', error);
          toast.error('Ocorreu um erro ao conectar com servidor, tente novamente mais tarde')

         }
      
      }
   

      const mostrarModalAddAluno = (id_encontro) => {  
        setShowModalAdd(true);
        setModalId2(id_encontro);
      
      }
     
    return (
      <>
    
        <Container className="container-meu-cadastro mt-3">
          <h1 className="m-4 h1-cadastrados">Meus Encontros Cadastrados</h1>
            <div className="box-my-encontros p-4">
              <Tabs 
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3 list-tab"
                  >
                    <Tab eventKey="meuCadastros" title="Meus Encontros Cadastrados">
                      <Form className="d-flex justify-content-end my-4">
                        <Form.Control
                          type="search"
                          placeholder="Procurar Encontro"
                          className="me-2 w-25"
                          aria-label="Search"
                        />
                        <Button variant="outline-success">Buscar</Button>
                      </Form>

                        <Table striped bordered hover responsive="sm">
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Título Encontro</th>
                                <th>Descrição</th>
                                <th>Sala</th>
                                <th>Data Início</th>
                                <th>Se repete?</th>
                                <th width="85px">Lista de inscritos</th>
                                <th width="85px">Adicionar Aluna(o)</th>
                                <th>Editar</th>
                                <th>Excluir</th>
                                </tr>
                            </thead>
                            <tbody>
                              { myCadastrados && myCadastrados.length > 0 ? (
                                myCadastroPaginatedData.map((encontro, index) => (
                                    <tr key={index}>
                                      <td>{index + 1}</td>
                                      <td>{encontro.titulo_encontro}</td>
                                      <td>{encontro.descricao_encontro}</td>
                                      <td>{encontro.sala}</td>
                                      <td>{formatDate(encontro.data_inicio)}</td>
                                      <td>{encontro.repete}</td>
                                      <td>
                                        <button className="modal-button" onClick={() => mostrarModal(encontro.id_encontro)}>
                                          <i className="bi bi-person-check-fill"></i>
                                        </button>
                                        <ModalListAluno encontroId={modalId} show={show} setModalOpen={() => setShow(false)} userProf={user.id_professora}/>
                                      </td>
                                      <td>
                                        <button className="modal-button" onClick={() => mostrarModalAddAluno(encontro.id_encontro)}>
                                          <i className="bi bi-person-plus-fill"></i>
                                        </button>
                                        <AddAluno idEncontro={modalId2} showAddAluno={showModalAdd} modalAddOpen={() => setShowModalAdd(false)} userProf={user.id_professora} />
                                      </td>
                                      <td>
                                        <button className="modal-button" onClick={() => mostrarModalEditarEncontro(encontro.id_encontro, user.id_professora)}> 
                                          <i className="bi bi-pencil-square" ></i>
                                        </button>
                                        <ModalEditar dataEncontro={editEncontro[0]} showEdit={showModalEdit} modalOpen={() => setShowModalEdit(false)}/>
                                      </td>
                                      <td>
                                        <button className="modal-button" onClick={() => excluirEncontro(encontro.id_encontro)}>
                                          <i className="bi bi-trash-fill" ></i>
                                        </button>                               
                                      </td>
                                    </tr>
                                ))
                              ) : (
                                    <tr>
                                      <td colSpan={10}>Você ainda não realizou nenhum cadastro...</td>
                                    </tr>
                                  )}
                          
                            </tbody>
                        </Table>
                        <Paginacao  
                        currentPage={myCadastroCurrentPage}
                        totalPages={myCadastroTotalPages}
                        onPageChange={handleMyCadastroPageChange} 
                        />
                    </Tab>

                  <Tab eventKey="lista"  title="Lista de Alunos Cadastrados">
                    <Form className="d-flex justify-content-end my-4">
                      <Form.Control
                        type="search"
                        placeholder="Procurar Aluno"
                        className="me-2 w-25"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Buscar</Button>
                    </Form>
                    <Table striped bordered hover responsive="sm">
                      <thead>
                          <tr>
                          <th>#</th>
                          <th>Nome</th>
                          <th>Matrícula</th>
                          <th>Email</th>
                          
                          </tr>
                      </thead>
                      <tbody>
                        {allAlunoPaginatedData.map((aluno, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{aluno.nome_aluna}</td>
                            <td>{aluno.mat_aluna}</td>
                            <td>{aluno.email}</td>
                          </tr>
                        ))}
                      </tbody>

                    </Table>
                    <Paginacao
                    currentPage={allAlunoCurrentPage}
                    totalPages={allAlunoTotalPages}
                    onPageChange={handleAllAlunoPageChange} 
                    />
                </Tab>       
              </Tabs>
                    
            </div>
        </Container>
        <Footer/>
      </>
    )
}