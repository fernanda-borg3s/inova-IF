// import { NavbarC } from "../../components/Navbar/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import './Home.css'
import CardHome from "../../components/Cards/CardHome";
import Welcome from "../../components/Welcome/Welcome";
// import { encontros } from "../../Data.js";
import CalenderHome from '../../assets/Img/CalenderHome.png'
import Footer from '../../components/Footer/Footer';
import { useEffect, useState, useContext} from 'react';
import { userLogged } from "../../Service/userservice.js";
import { UserContext } from '../../Context/UserContext.jsx'

export default function Home(){

    return (
    <>
      
        <Container className="box-container mt-5" >
          <Welcome/>
            <h2 className="mt-5 mb-4 h2-home">Agenda para Hoje</h2>
          <Row xs={1} md={2} className="g-4">
            <Col>
            {/* {encontros.map((item, index) =>{<CardHome key={index} encontros={item}/>})} */}
              <CardHome/>
            </Col>
          </Row>
        </Container>
        
        <Container className="box-container mt-5">
          <h2 className='mt-5 mb-4 h2-home'>Todos Encontros</h2>
          <Row>
       
        <Col className='hide-img-home mt-2'>
        <div className='ms-3'>
            <Image src={CalenderHome} fluid />
        </div>
        </Col>
        <Col className='mt-5 d-flex flex-column align-items-center justify-content-center'>
        <div className='' >
            <h3 className='h3-home'>Sua Agenda</h3>
            <p className='mt-4 ps-1 p-home'>Lorem ipsum dolor sviverra adipiscing at in tellus integer feugiat scelerisque. icitudin ac orci. Consectetur  Gravida cum sociis natoque penatibus et magnis dis. Mauris augue neque gravida in fermentum et sollicitudin ac orci</p>
            <Button className="mt-2 btn2-home p-3" variant="success" href='/home/agenda'>Conferir Agenda</Button>
        </div>
        </Col>
      </Row>
        </Container>
        <Footer/>
    </>
    
    )
}