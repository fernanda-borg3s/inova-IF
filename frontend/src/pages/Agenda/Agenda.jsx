import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Calendario from '../../components/Calendario/Calendario';
import Footer from '../../components/Footer/Footer';
import { userLogged } from "../../Service/userservice.js";
import { useEffect, useState, useContext} from 'react';

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

return (
  <>
    <Container fluid="md">
      <h1 style={{margin:'30px 0', color:'#004d2a', fontWeight:'bold', textAlign:'center'}}>Sua Agenda</h1>
        <Row >
          <Col >
            <Calendario />
          </Col>
        </Row>

    </Container>
    <Footer/>
   </>
    )
}