import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './GerenciarEncontro.css'
import TableCadastro from "../../components/TableCadastro/TableCadastro";
import Footer from "../../components/Footer/Footer";

export default function GerenciarEncontro(){
    return (
        <>
        <h1 className="h1">Gerenciar Encontros</h1>

        <Container className=" ">
        <Row className="d-flex justify-content-center align-items-center">
            
            <Col>
            <div className="container-cadastrar mt-5">
                    <h2 className="h2-cadastro"><div className="span1-cadastro">1</div>Cadastrar Objetivo de aprendizagem</h2>
                <Form className="mt-4">
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Tipo de Objetivo:</Form.Label>
                            <Form.Select defaultValue="Não se aplica">
                                <option>Não se aplica</option>
                                <option>Objetivos Essenciais Introdutórios</option>
                                <option>Objetivos Essenciais</option>
                                <option>Objetivos Complementares</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Objetivo De aprendizagem:</Form.Label>
                        <Form.Control as="textarea" placeholder="Critérios de Avaliação" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Etapa:</Form.Label>
                            <Form.Control as="textarea" placeholder="Critérios de Avaliação" />
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit" style={{backgroundColor:'#004d2a'}}>
                        Cadastrar
                    </Button>
                    </Form>
                </div>



                <div className="container-cadastrar mt-5">
                    <h2 className="h2-cadastro"><div className="span1-cadastro">2</div>Cadastrar Encontro</h2>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="titulo-encontro">
                        <Form.Label>Título do Encontro</Form.Label>
                        <Form.Control type="text" placeholder="Digite aqui" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="matricula-professor">
                        <Form.Label>Matrícula Professora:</Form.Label>
                        <Form.Control type="text" placeholder="000000-0" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Componente Curricular:</Form.Label>
                        <Form.Select defaultValue="Não se aplica">
                            <option>Não se aplica</option>
                            <option>Artes Cênicas</option>
                            <option>Artes Visuais</option>
                            <option>Biologia</option>
                            <option>Dança</option>
                            <option>Educação Física</option>
                            <option>Filosofia</option>
                            <option>Física</option>
                            <option>Geografia</option>
                            <option>História</option>
                            <option>Língua Espanhola e suas literaturas</option>
                            <option>Língua Inglesa e suas literaturas</option>
                            <option>Língua Portuguesa e suas literaturas</option>
                            <option>Matemática</option>
                            <option>Música</option>
                            <option>Química</option>
                            <option>Sociologia</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="num_repeticoes">
                        <Form.Label>Número de vagas:</Form.Label>
                        <Form.Control type="number"  />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    
                      
                    <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Critérios de Avaliação:</Form.Label>
                            <Form.Control as="textarea" placeholder="Critérios de Avaliação" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                       
                       <Form.Label>Descrição do Encontros:</Form.Label>
                       <Form.Control as="textarea" placeholder="Critérios de Avaliação" />
                   </Form.Group>
                 

                    </Row>
                   
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="data-inicio">
                        <Form.Label>Data de início:</Form.Label>
                        <Form.Control type="date" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="data-fim">
                        <Form.Label>Data de Fim:</Form.Label>
                        <Form.Control type="date" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="data-fim">
                        <Form.Label>Hora de Início:</Form.Label>
                        <Form.Control type="time" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="data-fim">
                        <Form.Label>Hora de Fim:</Form.Label>
                        <Form.Control type="time" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Tipo de Objetivo:</Form.Label>
                            <Form.Select defaultValue="Não se aplica">
                                <option>Não se aplica</option>
                                <option>Objetivos Essenciais Introdutórios</option>
                                <option>Objetivos Essenciais</option>
                                <option>Objetivos Complementares</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Etapa:</Form.Label>
                            <Form.Select defaultValue="Não se aplica">
                                <option>Não se aplica</option>
                                <option>Objetivos Essenciais Introdutórios</option>
                                <option>Objetivos Essenciais</option>
                                <option>Objetivos Complementares</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                            {/* vem do banco */}
                            <Form.Label>Objetivo De aprendizagem:</Form.Label>
                            <Form.Select defaultValue="Não se aplica">
                                <option>Não se aplica</option>
                                <option>Objetivos Essenciais Introdutórios</option>
                                <option>Objetivos Essenciais</option>
                                <option>Objetivos Complementares</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="sala-encontro">
                        <Form.Label>Sala:</Form.Label>
                        <Form.Control type="text" placeholder="Digite a sala e o bloco do encontro" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Encontro se repete?</Form.Label>
                        <Form.Select defaultValue="Não">
                            <option>Não</option>
                            <option>Sim</option>
                        </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="num_repeticoes">
                        <Form.Label>Se sim, quantas?</Form.Label>
                        <Form.Control type="number"  />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Disponível para Inscrição?</Form.Label>
                        <Form.Select defaultValue="Sim">
                            <option>Sim</option>
                            <option>Não</option>
                        </Form.Select>
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit" style={{backgroundColor:'#004d2a'}}>
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
        <Footer/>
        </>
    )
}