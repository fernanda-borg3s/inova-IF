import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import './CardHome.css'
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

  useEffect(() => {
    const fetchEncontros = async () => {
      try {
        const response = await axios.get(`${baseURL}/inscricao/inscritos/${user.id_aluna}`);
        setEncontros(response.data.data);
        // console.log(encontros);
  
      } catch (error) {
        console.error('Erro ao recuperar dados:', error);
      }
    };
    
    fetchEncontros();
  }, []); 
  function formatDate(dateString) {
    const datePart = dateString.substring(0, 10);
    const parts = datePart.split("-")
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }
    return(
      
        <>
        {/* verificar se esta vazio */}
        {encontros && encontros.length > 0 ? (
        <Row xs={1} md={2} className="g-4">
          {encontros.map((encontro, index) => (
            <Col key={index}>
              <Card className='cardHome-container'>
                <Card.Header className='d-flex justify-content-end card-header'>{index + 1}</Card.Header>
                <Card.Body>
                  <Card.Title className='py-1 '>{encontro.titulo_encontro}</Card.Title>
                  <ListGroup className="list-group-flush">
                  <ListGroup.Item className="px-1">Componente Curricular: <span>{encontro.componente_curricular}</span></ListGroup.Item>
                    <ListGroup.Item className="px-1">Data: <span>{formatDate(encontro.data_inicio)}</span> até <span>{formatDate(encontro.data_fim)}</span></ListGroup.Item>
                    <ListGroup.Item className="px-1">Horários: <span>{encontro.hora_inicio}</span> até <span>{encontro.hora_fim}</span></ListGroup.Item>
                    <ListGroup.Item className="px-1">Sala: <span>{encontro.sala}</span></ListGroup.Item>
                    <ListGroup.Item className="px-1">Professora(o): <span>{encontro.nome_professora}</span></ListGroup.Item>

                  </ListGroup>
                  <Button variant="danger" className='mt-3'>
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