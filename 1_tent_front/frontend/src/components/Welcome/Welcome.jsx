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
            <p className='mt-4 ps-1 p-welcome'>Lorem ipsum dolor sviverra adipiscing at in tellus integer feugiat scelerisque. icitudin ac orci. Consectetur  Gravida cum sociis natoque penatibus et magnis dis. Mauris augue neque gravida in fermentum et sollicitudin ac orci</p>
            <Button className="mt-2 btn-home p-3" variant="success" href='/home/encontrosDisponivel'>Fazer inscrição</Button>
        </div>
        </Col>
        <Col className='hide-img-home mt-2'>
        <div className='ms-5'>
            <Image src={ImgHome} fluid />
        </div>
        </Col>
      </Row>
      </Container>
       
        </>
    )
}