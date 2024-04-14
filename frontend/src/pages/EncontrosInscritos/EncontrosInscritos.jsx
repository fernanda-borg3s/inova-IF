
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';
import './EncontrosInscritos.css'
import Paginacao from '../../components/Paginacao/Paginacao.jsx';
import { userLogged } from "../../Service/userservice.js";
import { toast } from "react-toastify";
import { useEffect, useState, useContext} from 'react';
import { UserContext } from '../../Context/UserContext.jsx'

import axios from 'axios';

const ITEMS_PER_PAGE = 12;

const baseURL = 'http://localhost:3000'

export default function EncontrosInscritos(){
  const { user, setUser } = useContext(UserContext);
  async function findUserLogged(){
    try {
      const response = await userLogged();
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
   }
   useEffect(() => {
    if (localStorage.getItem("token")) findUserLogged();
  }, []);


      const [encontrosInscrito, setEncontrosInscrito] = useState([]);

      useEffect(() => {
        const fetchEncontrosInscritos = async () => {
    
          try {
            const response = await axios.get(`${baseURL}/inscricao/inscritos/${user.id_aluna}`);
            console.log(response);
            setEncontrosInscrito(response.data.data);
            console.log(encontrosInscrito);
      
          } catch (error) {
            toast.error("Ocorreu um erro ao conectar ao servidor, tente novamente mais tarde!")
          }
        };
        
        if(user){
          fetchEncontrosInscritos();
        }

      }, [user.id_aluna]);
      
      function formatDate(dateString) {
        const datePart = dateString.substring(0, 10);
        const parts = datePart.split("-")
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
      }

      const removerInscricao = async (id_inscricao) => {
        
          try {
            const response = await axios.delete(`${baseURL}/inscricao/deleteinscricao/${id_inscricao}`);
            toast.success("Inscrição excluída com sucesso!")
            //limpa o card que foi excluido
            const updatedEncontrosInscritos = encontrosInscrito.filter(item => item.id_inscricao !== id_inscricao);
            setEncontrosDisponivel(updatedEncontrosInscritos);
          } catch (error) {
            toast.error("Ocorreu um erro ao excluir inscrição, tente novamente");
            
          }
      }
      const [encontroInscritoCurrentPage, setEncontroInscritoCurrentPage] = useState(1);
      
      const encontrosInscritoTotalPages = Math.ceil(encontrosInscrito?.length / ITEMS_PER_PAGE);
    
      const encontrosInscritoPaginatedData = encontrosInscrito?.slice(
        (encontroInscritoCurrentPage - 1) * ITEMS_PER_PAGE,
        encontroInscritoCurrentPage * ITEMS_PER_PAGE
      );
      const handleInscritoPageChange = (page) => {
        setEncontroInscritoCurrentPage(page);
      };
    return (
      <>
        <Container className="box-container mt-5">
            <h1 className='h1-encontro-disponivel'>Meus Encontros</h1>
          <Row>
            <Col>
                {/* verificar se esta vazio */}
              {encontrosInscrito && encontrosInscrito.length > 0 ? (
                <Row xs={1} md={3} className="g-4 mt-2 ">
                  {encontrosInscritoPaginatedData.map((inscrito, index) => (
                    <Col key={index}>
                      <Card style={{}} className='cardInscrito-container'>
                      <Card.Header className='d-flex justify-content-end card-header'>{index + 1}</Card.Header>
                        <Card.Body>
                          <Card.Title className='py-1 '>{inscrito.titulo_encontro}</Card.Title>
                          <ListGroup className="list-group-flush">
                          <ListGroup.Item className="px-1">Componente Curricular: <span>{inscrito.componente_curricular}</span></ListGroup.Item>
                          <ListGroup.Item className="px-1">Descrição: <span>{inscrito.descricao_encontro}</span></ListGroup.Item>
                            <ListGroup.Item className="px-1">Data: <span>{formatDate(inscrito.data_inicio)}</span></ListGroup.Item>
                            <ListGroup.Item className="px-1">Horários: <span>{inscrito.hora_inicio}</span> até <span>{inscrito.hora_fim}</span></ListGroup.Item>
                            <ListGroup.Item className="px-1">Sala: <span>{inscrito.sala}</span></ListGroup.Item>
                            <ListGroup.Item className="px-1">Professora(o): <span>{inscrito.nome_professora}</span></ListGroup.Item>

                          </ListGroup>
                          
                        
                        </Card.Body>
                        <Card.Footer className="card-footer-inscrito"> 
                        <Button variant="danger" className='' onClick={() => removerInscricao(inscrito.id_inscricao)}>
                            <i className="bi bi-trash p-1"></i>
                            Cancelar Inscrição
                          </Button>
                          </Card.Footer>
                      </Card>
                    </Col>
                  ))}
                </Row>
              ) : (
                  <p>Não há encontros inscritos.</p>                 
                  )}
            </Col>
            <Paginacao  
              currentPage={encontroInscritoCurrentPage}
              totalPages={encontrosInscritoTotalPages}
              onPageChange={handleInscritoPageChange} 
              />
          </Row>
        </Container> 
      </>
    
    )
}