import Container from "react-bootstrap/esm/Container";
import { NavbarC } from "../../components/Navbar/Navbar";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/esm/Image";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import LogoLogin from '../../assets/Img/LogoLogin.png'
import './Login.css'

export default function Login(){
    return (
        <>
        <NavbarC/>
        <Container className="mt-5 d-flex flex-column align-items-center">
            <Row className="justify-content-center">
                <div className="logo-login">
                    <Image src={LogoLogin} className="logo-login" />
                </div>
                <h1 style={{textAlign:'center'}}>Seja Bem-vindo!</h1>
                <Button className="btn-link-cadastro" variant="link" >Não tem cadastro? Cadastra-se</Button>
            </Row>
            <Row>
                <div className="container-form-login p-5 mt-3">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha:</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha" />
                        </Form.Group>
                        <div className="d-flex justify-content-center mt-4">
                        <Button className="btn-entrar" variant="light" type="submit" >Entrar</Button>

                        </div>
                    </Form>
                </div>
            </Row>
        </Container>
        </>
    )
}