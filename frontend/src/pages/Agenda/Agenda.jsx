import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Calendario from '../../components/Calendario/Calendario';
import Footer from '../../components/Footer/Footer';
import { userLogged } from "../../Service/userservice.js";
import { useEffect, useState, useContext} from 'react';
import { toast } from 'react-toastify';
import { UserContext } from '../../Context/UserContext.jsx'
import axios from 'axios';

const baseURL = 'http://localhost:3000'


export default function Agenda(){
      const { user, setUser } = useContext(UserContext);
      async function findUserLoggedAluno(){
        try {
          const response = await userLogged();
          setUser(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      useEffect(() => {
        if (localStorage.getItem("token")) findUserLoggedAluno();
      }, []);

      const[dataEncontroDisponivel, setDataEncontroDisponivel] = useState([]);
      const[dataEncontroInscrito, setDataEncontroInscrito] = useState([]);
      // const [events, setEvents] = useState([]);

      useEffect( ()=>{
        const fetchDataEncontroDisponivel = async() =>{
          try{
            const response = await axios.get(`${baseURL}/agenda/datas/${user.id_aluna}`)
            // console.log(response)
            setDataEncontroDisponivel(response.data.data)
            // console.log(dataEncontroDisponivel)
          
          }catch(error){
            console.error('Erro ao recuperar dados:', error)
          }
        }
          fetchDataEncontroDisponivel();
    
      }, [user.id_aluna]);

      useEffect(() =>{
        const fetchDataEncontroInscrito = async() => {
          try{
            const response = await axios.get(`${baseURL}/agenda/dataInscrito/${user.id_aluna}`);
            console.log(response)
            setDataEncontroInscrito(response.data.data)
            return
          }catch(error){
            // console.error('Erro ao recuperar dados:', error)
            toast.info("Não há encontros inscritos")
          }
        }
          fetchDataEncontroInscrito();
      }, [user.id_aluna])

     
        const events =  dataEncontroDisponivel && dataEncontroDisponivel.map((event) => {
          return {
            title: event.titulo_encontro,
            start: event.data_inicio,
            end: event.data_fim,
            backgroundColor: '#02a059',
            borderColor:'#02a059',
            dataInicio: event.data_inicio,
            dataFim: event.data_fim,
            horaInicio:event.hora_inicio,
            horaFim:event.hora_fim,
            componente:event.componente_curricular,
            professora:event.nome_professora,
            sala:event.sala,
            descricao:event.descricao_encontro,
            criterios:event.criterios_avaliacao
          };
        });
        const dadosEncontrosInscritos =  dataEncontroInscrito && dataEncontroInscrito.map((event) => {
          return {
            title: event.titulo_encontro,
            start: event.data_inicio,
            end: event.data_fim,
           
            backgroundColor: '#4d0043',
            borderColor:'#4d0043',
            dataInicio: event.data_inicio,
            dataFim: event.data_fim,
            horaInicio:event.hora_inicio,
            horaFim:event.hora_fim,
            componente:event.componente_curricular,
            professora:event.nome_professora,
            sala:event.sala,
            descricao:event.descricao_encontro,
            criterios:event.criterios_avaliacao
          };
        });
    



return (
  <>
    <Container fluid="md">
      <h1 style={{margin:'30px 0', color:'#004d2a', fontWeight:'bold', textAlign:'center'}}>Sua Agenda</h1>
        <Row >
          <h2 style={{color:'#2B9EB3'}}>Encontros Disponíveis</h2>
          <Col >
            <Calendario events={events}/>
          </Col>
        </Row>
        <Row className='mt-5 row-calender'>
          <h2 style={{color:'#2B9EB3'}}>Encontros Inscritos</h2>
          <Col >
            <Calendario events={dadosEncontrosInscritos} />
          </Col>
        </Row>

    </Container>
    <Footer/>
   </>
    )
}