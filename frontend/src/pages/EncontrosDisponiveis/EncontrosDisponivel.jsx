import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import './EncontrosDisponivel.css'
import Paginacao from '../../components/Paginacao/Paginacao.jsx';
import { toast } from "react-toastify";
import { userLogged } from "../../Service/userservice.js";
import { useEffect, useState, useContext} from 'react';
import { UserContext } from '../../Context/UserContext.jsx'
import axios from 'axios';
const ITEMS_PER_PAGE = 24;

const baseURL = 'http://localhost:3000'

export default function EncontrosDisponivel(){
  const [encontrosDisponivel, setEncontrosDisponivel] = useState([]);
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


  useEffect(() => {
    const fetchEncontrosDisponivel = async () => {
      try {
        const response = await axios.get(`${baseURL}/encontros/encontrosDisponivel/${user.id_aluna}`);
        setEncontrosDisponivel(response.data.data);
        // console.log(encontrosDisponivel)
      } catch (error) {
        toast.error("Ocorreu um erro ao conectar ao servidor, tente novamente mais tarde!")
      }
    };
      fetchEncontrosDisponivel(); 
    }, [user]); 
        function formatDate(dateString) {
          const datePart = dateString.substring(0, 10);
          const parts = datePart.split("-")
          return `${parts[2]}-${parts[1]}-${parts[0]}`;
        }
        const inscreverEncontro = async (id_encontro) => {
          const id_aluna = user.id_aluna;
          try {
            const bodyInscrever = {id_encontro, id_aluna}
            const response = await axios.post(`${baseURL}/inscricao/inscrever`, bodyInscrever, {
              headers: {
                "Content-type": "application/json"
              }
            });
          
            toast.success("Inscrição realizada com sucesso!")
            const updatedEncontrosDisponiveis = encontrosDisponivel.filter(item => item.id_encontro !== id_encontro);
                      setEncontrosDisponivel(updatedEncontrosDisponiveis);
          } catch (error) {
            toast.error("Ocorreu um erro ao fazer inscrição, tente novamente");
          }
        }
        const [encontroDisponivelCurrentPage, setEncontroDisponivelCurrentPage] = useState(1);
      
        const encontrosDisponivelTotalPages = Math.ceil(encontrosDisponivel?.length / ITEMS_PER_PAGE);

        const [busca, setBusca] = useState('');
        const lowerBusca = busca.toLowerCase();
        const filteredEncontrosDisponivel = encontrosDisponivel?.filter((disponivel) => {
          return Object.values(disponivel).some(value => typeof value === 'string' && value.toLowerCase().includes(lowerBusca));
        });

        const encontrosDisponivelPaginatedData = filteredEncontrosDisponivel?.slice(
          (encontroDisponivelCurrentPage - 1) * ITEMS_PER_PAGE,
          encontroDisponivelCurrentPage * ITEMS_PER_PAGE
        );
       
       
        const handleDisponivelPageChange = (page) => {
          setEncontroDisponivelCurrentPage(page);
        };
    return (
      <>
        <Container className="box-container mt-5">
        <div className="d-flex h-50 justify-content-end">
              <InputGroup className="w-50 h-25 me-5">
                <Form.Control
                    type="search"
                    placeholder="Procurar por título, componente, data, hora, sala, professora..."
                    className="w-50"
                    aria-label="Search"
                    value={busca}
                    onChange={(ev) => setBusca(ev.target.value)}
                  />
                <InputGroup.Text id="Search" ><i className="bi bi-search"></i></InputGroup.Text>
              </InputGroup>
            </div>
            <h1 className='h1-encontro-disponivel'>Encontros Disponíveis para inscrição</h1>
          <Row>
            <Col>            
                {encontrosDisponivel && encontrosDisponivel.length > 0 ? (
                  <Row xs={1} md={3} className="g-4 mt-2">
                    {encontrosDisponivelPaginatedData.map((encontro, index) => (
                      <Col key={index}>
                        <Card className='cardInscrito-container'>
                          <Card.Header className='d-flex justify-content-end card-header'>{index +1}</Card.Header>
                          <Card.Body>
                            <Card.Title className='py-1 '>{encontro.titulo_encontro}</Card.Title>
                            <ListGroup className="list-group-flush">
                            <ListGroup.Item className="px-1">Componente Curricular: <span>{encontro.componente_curricular}</span></ListGroup.Item>
                              <ListGroup.Item className="px-1">Data: <span>{formatDate(encontro.data_inicio)}</span></ListGroup.Item>
                              <ListGroup.Item className="px-1">Horários: <span>{encontro.hora_inicio}</span> até <span>{encontro.hora_fim}</span></ListGroup.Item>
                              <ListGroup.Item className="px-1">Descrição: <span>{encontro.descricao_encontro}</span></ListGroup.Item>
                              <ListGroup.Item className="px-1">Critérios de Avaliação: <span>{encontro.criterios_avaliacao}</span></ListGroup.Item>
                              <ListGroup.Item className="px-1">Sala: <span>{encontro.sala}</span></ListGroup.Item>
                              <ListGroup.Item className="px-1">Professora(o): <span>{encontro.nome_professora}</span></ListGroup.Item>

                            </ListGroup>
                            
                          </Card.Body>
                          <Card.Footer className="card-footer-disponivel"> 
                          <Button variant="success" className='' style={{fontWeight:'bold'}} onClick={() => inscreverEncontro(encontro.id_encontro)}>
                              Inscrever
                            </Button>
                          </Card.Footer>
                        </Card>
                      </Col>
                    ))}
                </Row>
                ) : (
                  <p>Não há encontros disponíveis.</p>
              
                )}
            </Col>
            <Paginacao  
              currentPage={encontroDisponivelCurrentPage}
              totalPages={encontrosDisponivelTotalPages}
              onPageChange={handleDisponivelPageChange} 
              />
          </Row>
        </Container>
      
    </>
    
    )
}