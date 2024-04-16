import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import './CardHome.css'
import { toast } from 'react-toastify';
import { userLoggedProf } from "../../Service/userservice.js";
import { useEffect, useState, useContext} from 'react';
import { UserContext } from '../../Context/UserContext.jsx'
import axios from 'axios';

const baseURL = 'http://localhost:3000'
export default function CardHome(){
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

const [encontros, setEncontros] = useState([]);
const currentDate = new Date(); // Get the current date in JavaScript
const dataHoje = currentDate.toISOString().split('T')[0]; // Format the date as 'YYYY-MM-DD'
  useEffect(() => {
    const fetchEncontros = async () => {
      
      try {
        const response = await axios.get(`${baseURL}/agenda/encontroHoje/${user.id_aluna}/${dataHoje}`);
        console.log(response)
        setEncontros(response.data.data);
      } catch (error) {
        console.error('Erro ao recuperar dados:', error);
      }
    };
    
    fetchEncontros();
  }, [user, dataHoje]); 
  const removerInscricao = async (id_inscricao) => {
        
    try {
      const response = await axios.delete(`${baseURL}/inscricao/deleteinscricao/${id_inscricao}`);
      toast.success("Inscrição excluída com sucesso!")
      //limpa o card que foi excluido
      const updatedEncontrosInscritos = encontros.filter(item => item.id_inscricao !== id_inscricao);
      setEncontrosDisponivel(updatedEncontrosInscritos);
    } catch (error) {
      toast.error("Ocorreu um erro ao excluir inscrição, tente novamente");
      
    }
}

  function formatDate(dateString) {
    const datePart = dateString.substring(0, 10);
    const parts = datePart.split("-")
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }
    return(
        <>
        {/* verificar se esta vazio */}
        {encontros && encontros.length > 0 ? (
        <Row xs={1} md={3} className="g-4">
          {encontros.map((encontro, index) => (
            <Col key={index}>
              <Card className='cardHome-container'>
                <Card.Header className='d-flex justify-content-end card-header'>{index + 1}</Card.Header>
                <Card.Body>
                  <Card.Title className='py-1 '>{encontro.titulo_encontro}</Card.Title>
                  <ListGroup className="list-group-flush">
                  <ListGroup.Item className="px-1">Componente Curricular: <span>{encontro.componente_curricular}</span></ListGroup.Item>
                  <ListGroup.Item className="px-1">Descrição: <span>{encontro.descricao_encontro}</span></ListGroup.Item>
                  <ListGroup.Item className="px-1">Critérios de Avaliação: <span>{encontro.criterios_avaliacao}</span></ListGroup.Item>
                    <ListGroup.Item className="px-1">Data: <span>{formatDate(encontro.data_inicio)}</span></ListGroup.Item>
                    <ListGroup.Item className="px-1">Horários: <span>{encontro.hora_inicio}</span> até <span>{encontro.hora_fim}</span></ListGroup.Item>
                    <ListGroup.Item className="px-1">Sala: <span>{encontro.sala}</span></ListGroup.Item>
                    <ListGroup.Item className="px-1">Professora(o): <span>{encontro.nome_professora}</span></ListGroup.Item>
                  </ListGroup>
                  <Button variant="danger" className='mt-2' onClick={() => removerInscricao(encontro.id_inscricao)}>
                  <i className="bi bi-trash p-1"></i>
                  Cancelar Inscrição
                </Button>
                </Card.Body>
              </Card>
          
            </Col>
              ))}
               </Row>
            ) : (
              <p>Não há encontros para hoje.</p>
            )}
    </>
  );
}