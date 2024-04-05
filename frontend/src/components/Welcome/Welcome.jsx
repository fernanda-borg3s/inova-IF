import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ImgHome from '../../assets/Img/ImgHome.png'
import './Welcome.css'

export default function Welcome(){
    return(
        <>
        <Container>
      <Row>
        <Col className='mt-5'>
        <div className=''>
            <h5 className='ps-1 mb-3 h5-welcome'>Seja Bem-vindo ao</h5>
            <h1 className='welcome-titulo'>InovaIF</h1>
            <p className='mt-4 ps-1 p-welcome'> O InovaIF vem como uma ferramenta que simplifica significativamente o agendamento e a gestão de compromissos acadêmicos, permitindo aos estudantes inscreverem-se em encontros com apenas alguns cliques. Ao eliminar a necessidade de comunicação manual ou agendamento presencial, o sistema agiliza todo o processo, tornando-o mais conveniente e acessível para alunas e professoras. Além disso, essa funcionalidade promove uma melhor organização e transparência, ao oferecer uma visão centralizada de todos os encontros disponíveis e das inscrições realizada pelo o estudante, facilitando o acompanhamento e a participação ativa nos encontros. Inscreva-se nos encontros disponibilizados pelas professoras no botão abaixo.</p>
            <Button className="mt-2 btn-home p-3" variant="success" href='/home/encontrosDisponivel'>Fazer inscrição no encontro</Button>
        </div>
        </Col>
        <Col className='hide-img-home mt-2 ms-5'>
        <div className='ms-5'>
            <Image src={ImgHome} fluid />
        </div>
        </Col>
      </Row>
      </Container>
       
        </>
    )
}