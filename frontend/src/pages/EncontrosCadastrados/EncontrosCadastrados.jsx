
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import './EncontrosCadastrados.css'
import Paginacao from '../../components/Paginacao/Paginacao.jsx';
import { useEffect, useState, useContext} from 'react';
import { toast } from 'react-toastify';
import { UserContext } from '../../Context/UserContext.jsx'
import axios from 'axios';
const ITEMS_PER_PAGE = 9;

const baseURL = 'http://localhost:3000'

export default function EncontrosCadastrados(){

      const [encontrosCadastrados, setEncontrosCadastrados] = useState([]);
      const { user } = useContext(UserContext);

      useEffect(() => {
        const fetchEncontrosCadastrados = async () => {
          try {
            const response = await axios.get(`${baseURL}/encontros/encontrosCadastrados/${user.id_professora}`);
            setEncontrosCadastrados(response.data.data);
          } catch (error) {
            // console.error('Erro ao recuperar dados:', error);
            toast.error('Ocorreu um erro ao conectar com servidor, tente novamente mais tarde')
          }
        };
          if(user){
            fetchEncontrosCadastrados();
          }
        }, [user]); 

        //formatar as data para dd-mm-aaaa
        function formatDate(dateString) {
          const datePart = dateString.substring(0, 10);
          const parts = datePart.split("-")
          return `${parts[2]}-${parts[1]}-${parts[0]}`;
        }
        const [encontroCadastradoCurrentPage, setEncontroCadastradoCurrentPage] = useState(1);
      
        const encontrosCadastradoTotalPages = Math.ceil(encontrosCadastrados?.length / ITEMS_PER_PAGE);
      
        const encontrosCadastradoPaginatedData = encontrosCadastrados?.slice(
          (encontroCadastradoCurrentPage - 1) * ITEMS_PER_PAGE,
          encontroCadastradoCurrentPage * ITEMS_PER_PAGE
        );
        const handleCadastradoPageChange = (page) => {
          setEncontroCadastradoCurrentPage(page);
        };
    return (
      <>
        <Container className="box-container mt-2">
            <h1 className='h1-encontro-disponivel'>Todos Encontros Cadastrados</h1>
          <Row>
            <Col>            
              {/* verificar se esta vazio */}
              {encontrosCadastrados && encontrosCadastrados.length > 0 ? (
                <Row xs={1} md={3} className="g-4 mt-2">
                  {encontrosCadastradoPaginatedData.map((encontro, index) => (
                    <Col key={index}>
                      <Card  className='card-container'>
                        
                        <Card.Body>
                          <Card.Title className='card-titulo py-1'>{encontro.titulo_encontro}</Card.Title>
                          <ListGroup className="list-group-flush">
                          <ListGroup.Item className="px-1">Área de conhecimento: <span>{encontro.area}({encontro.area_sigla})</span> </ListGroup.Item>
                          <ListGroup.Item className="px-1">Componente Curricular: <span>{encontro.componente_curricular}</span></ListGroup.Item>
                          <ListGroup.Item className="px-1">Descrição: <span>{encontro.descricao_encontro}</span></ListGroup.Item>
                            <ListGroup.Item className="px-1">Data: <span>{formatDate(encontro.data_inicio)}</span></ListGroup.Item>
                            <ListGroup.Item className="px-1">Horários: <span>{encontro.hora_inicio}</span> até <span>{encontro.hora_fim}</span></ListGroup.Item>
                            <ListGroup.Item className="px-1">Sala: <span>{encontro.sala}</span></ListGroup.Item>
                            <ListGroup.Item className="px-1">Professora(o): <span>{encontro.nome_professora}</span></ListGroup.Item>
                            <ListGroup.Item className="px-1">Email professora(o): <span>{encontro.email}</span></ListGroup.Item>
                          </ListGroup>
                        </Card.Body>
                        <Card.Footer className='d-flex justify-content-end card-header'> {index + 1} </Card.Footer>
                      </Card>
                    </Col>
                  ))}
                </Row>
              ) : (
                  <p>Não há encontros cadastrados.</p>
                  )}
            </Col>
            <Paginacao  
              currentPage={encontroCadastradoCurrentPage}
              totalPages={encontrosCadastradoTotalPages}
              onPageChange={handleCadastradoPageChange} 
              />
          </Row>
        </Container> 
      </>
    
    )
}