import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import ImgCadastrar from '../../assets/Img/CadastrarEncontro.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './GerenciarEncontro.css'
import TableCadastro from "../../components/TableCadastro/TableCadastro";

export default function GerenciarEncontro(){
    return (
        <>
        <h1 className="h1">Gerenciar Encontros</h1>

        <Container className=" ">
        <Row className="d-flex justify-content-center align-items-center">
            <Col>
                <div className="imgCadastrar">
                    <Image src={ImgCadastrar} className="componentImg"></Image>
                </div>
            </Col>
            <Col>
                <div className="container-cadastrar mt-5">
                    <h2 className="h2-cadastro">Cadastrar Encontro</h2>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Cadastrar
                    </Button>
                    </Form>
                </div>
            </Col>
        </Row>
        </Container>
        <Container>
            <h1 className="m-4 h2-cadastrados">Meus Encontros Cadastrados</h1>
            <div className="box-my-encontros p-4">
            <TableCadastro/>
                
            </div>
        </Container>
        
        </>
    )
}