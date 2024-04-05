
import './GerenciarEncontro.css'
// import TableCadastro from '../../components/TableCadastro/TableCadastro';
import Container from "react-bootstrap/esm/Container";
import { useEffect, useState, useContext} from 'react';
import { toast } from 'react-toastify';

import Footer from "../../components/Footer/Footer";
import FormCadastro from '../../components/FormCadastro/FormCadastro';
import { UserContext } from '../../Context/UserContext.jsx'
import axios from 'axios';
import { userLoggedProf } from "../../Service/userservice.js";
import ModalListAluno from '../../components/ModalListAlunos/ListAlunos.jsx';
import Table from 'react-bootstrap/Table';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const baseURL = 'http://localhost:3000'

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
    const [show, setShow] = useState(false);
    const [allAluno, setAllAluno] = useState([]);

    // const [usuario, setUsuario] = useState(null);
 
    // const [fetchingData, setFetchingData] = useState(true);
    const [key, setKey] = useState('meuCadastros');
   
    // console.log(myCadastrados) 
    useEffect(() => {
      let isSubscribed = true;
      const fetchMyCadastros = async () => {
        try {
          const response = await axios.get(`${baseURL}/encontros/myCadastros/${user.id_professora}`);
          if (isSubscribed) {
            setMyCadastrados(response.data.data);
            // console.log(myCadastrados);
          }

        } catch (error) {
          console.error('Erro ao recuperar dados:', error);
          toast.error('Ocorreu um erro ao conectar com servidor, tente novamente mais tarde')

         }
      }
      
   
        fetchMyCadastros();
    
       return () => {
    isSubscribed = false;
  };
      }, [user.id_professora]);

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

    return (
        <>
        <h1 className="h1">Gerenciar Encontros</h1>
       <FormCadastro/>
        <Container className="container-meu-cadastro">
            <h1 className="m-4 h1-cadastrados">Meus Encontros Cadastrados</h1>
                <div className="box-my-encontros p-4">
                <Tabs 
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3 list-tab"
                 
                    >
                    <Tab eventKey="meuCadastros" title="Meus Encontros Cadastrados">
                    <Table striped bordered hover responsive="sm">
            <thead>
                <tr>
                <th>#</th>
                <th>Título Encontro</th>
                <th>Descrição</th>
                <th>Sala</th>
                <th>Data Início</th>
                <th>Data Fim</th>
                <th>Lista de inscritos</th>
                <th>Editar</th>
                <th>Excluir</th>
                </tr>
            </thead>
            <tbody>
            { myCadastrados && myCadastrados.length > 0 ? (
                    myCadastrados.map((encontro, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{encontro.titulo_encontro}</td>
                        <td>{encontro.descricao_encontro}</td>
                        <td>{encontro.sala}</td>
                        <td>{formatDate(encontro.data_inicio)}</td>
                        <td>{formatDate(encontro.data_fim)}</td>
                        <td>
                    
                    <button className="modal-button" onClick={() => setShow(true)}><i className="bi bi-person-check-fill"></i></button>
                    <ModalListAluno props={encontro.id_encontro} show={show} setModalOpen={() => setShow(false)}>
                    <p>Teste list</p>

                    </ModalListAluno>
                    
                    </td>
                    <td>
                        <button className="modal-button" > <i className="bi bi-pencil-square" ></i></button>
                        {/* /gerenciarEncontro/editarEncontro */}
                    </td>
                    <td>
                      <button className="modal-button" onClick={() => excluirEncontro(encontro.id_encontro)}> <i className="bi bi-trash-fill" ></i></button>
                   
                    </td>
                </tr>
               ))
               ) : (
                 <tr>
                  <td>Você ainda não realizou nenhum cadastro...</td></tr>
               )}
           
            </tbody>

        </Table>
                   


                    </Tab>
                    <Tab eventKey="lista"  title="Lista de Alunos Cadastrados">
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
            {allAluno.map((aluno, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{aluno.nome_aluna}</td>
                        <td>{aluno.mat_aluna}</td>
                        <td>{aluno.email}</td>
                </tr>
               ))}
            </tbody>

        </Table>
                    </Tab>
                    
                    </Tabs>
                    
                </div>
        </Container>
        <Footer/>
        </>
    )
}