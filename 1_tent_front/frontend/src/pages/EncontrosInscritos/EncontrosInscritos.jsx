
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
import '../EncontrosDisponiveis/EncontrosDisponivel.css'
// import CardHome from "../../components/Cards/CardHome";

// import { encontros } from "../../Data.js";
import { useEffect, useState} from 'react';

import axios from 'axios';

const baseURL = 'http://localhost:3000'

export default function EncontrosInscritos(){
  // console.log(encontros);
  const [encontrosDisponivel, setEncontrosDisponivel] = useState([]);


//   useEffect(() => {
//     const fetchEncontros = async () => {
//       try {
//         const response = await axios.get(`${baseURL}/`);
//         setEncontrosDisponivel(response.data.data);
//         // console.log(encontros);
  
//       } catch (error) {
//         console.error('Erro ao recuperar dados:', error);
//       }
//     };
    
//     fetchEncontros();
//   }, []); 
    return (
    <>
    
        <Container className="box-container mt-5">
            <h1 className='h1-encontro-disponivel'>Meus Encontros</h1>
          <Row>
            <Col>
             
                {/* verificar se esta vazio */}
       {encontrosDisponivel.length === 0 ? (
        <p>Não há encontros disponíveis.</p>
      ) : (
        <Row xs={1} md={2} className="g-4">
           {/* {encontros.map((item, index) =>{<CardHome key={index} encontros={item}/>})} */}
        </Row>
      )}
            </Col>
          </Row>
        </Container>
      
    </>
    
    )
}