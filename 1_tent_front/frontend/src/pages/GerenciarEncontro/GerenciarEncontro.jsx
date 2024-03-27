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
        <Container className="container-cadastrar">
          <h2 className="h2-cadastro">Cadastrar Encontro</h2>
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
                </Row>
                <Row className="mb-3">                       
                    <Form.Group as={Col} controlId="id_area_conhecimento">
                      <Form.Label>Area de conhecimento:</Form.Label>
                        <Form.Select defaultValue="Não se aplica">
                            <option>Base de Autonomia e Emancipação</option>
                            <option>Ciências da Natureza e suas Tecnologias </option>
                            <option>Ciências Humanas e Sociais Aplicadas </option>
                            <option>Conhecimentos da Área Técnica </option>
                            <option>Língua Portuguesa e suas Literaturas </option>
                            <option>Linguagens e suas Tecnologias </option>
                            <option>Matemática e suas Tecnologias </option>
                            <option>Oficina de Línguas Estrangeiras </option>
                            <option>Oficinas da Área Técnica </option>
                            <option>Oficinas Livres do Ensino Médio</option>
                            <option>Projetos Integradores </option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="id_componente_curricular">
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
                </Row>
                <Row className="mb-3">   
                    <Form.Group as={Col} controlId="criterios_avaliacao">
                      <Form.Label>Critérios de Avaliação:</Form.Label>
                        <Form.Control as="textarea" placeholder="Critérios de Avaliação" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="descricao">                     
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
                        <Form.Label>Hora de Início:</Form.Label>
                        <Form.Control type="time" />
                    </Form.Group>
                </Row>
    
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="data-fim">
                        <Form.Label>Data de Fim:</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="data-fim">
                        <Form.Label>Hora de Fim:</Form.Label>
                        <Form.Control type="time" />
                    </Form.Group>
                </Row>             
                    
                    <Form.Group as={Col} controlId="tipo_objetivo">
                        <Form.Label>Tipo de Objetivo:</Form.Label>
                          <Form.Select defaultValue="Não se aplica">
                            <option>Não se aplica</option>
                            <option>Objetivos Essenciais Introdutórios</option>
                            <option>Objetivos Essenciais</option>
                            <option>Objetivos Complementares</option>
                          </Form.Select>
                    </Form.Group>  
                 
                    <Form.Group as={Col} controlId="objetivos_aprendizagem" className="mt-3 mb-3">
                        {/* vem do banco */}
                        <Form.Label>Objetivo De aprendizagem:</Form.Label>
                          <Form.Select defaultValue="Não se aplica">
                            <option>Não se aplica</option>
                            <option>Objetivos Essenciais Introdutórios</option>
                            <option>Objetivos Essenciais</option>
                            <option>Objetivos Complementares</option>
                          </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="etapa">
                        <Form.Label>Etapa:</Form.Label>
                            <Form.Select defaultValue="Não se aplica">
                                <option>Não se aplica</option>
                                <option>Objetivos Essenciais Introdutórios</option>
                                <option>Objetivos Essenciais</option>
                                <option>Objetivos Complementares</option>
                            </Form.Select>
                    </Form.Group>
            
                <Row className="mb-3 mt-3">
                    <Form.Group controlId="num_vagas" className="num_vagas">
                        <Form.Label>Número de vagas:</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>

                    <Form.Group  controlId="sala-encontro" className="sala_encontro mt-4">
                        <Form.Label>Sala:</Form.Label>
                        <Form.Control type="text" placeholder="Digite a sala e o bloco"  />
                    </Form.Group>

                    <Form.Group controlId="disponivel_inscricao" className="disponivel_inscricao">
                        <Form.Label>Disponível para Inscrição?</Form.Label>
                        <Form.Select defaultValue="Sim">
                            <option>Sim</option>
                            <option>Não</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="repete" className="repete">
                        <Form.Label>Encontro se repete?</Form.Label>
                        <Form.Select defaultValue="Não">
                            <option>Não</option>
                            <option>Sim</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="num_repeticoes" className="num_repeticoes">
                        <Form.Label>Se sim, quantas?</Form.Label>
                        <Form.Control type="number"  />
                    </Form.Group>  
                </Row>
                
                <Row className="mb-3">        
                    
                
                                  
                </Row>

                    <Button variant="primary" type="submit" style={{backgroundColor:'#004d2a'}} className="w-100 p-2">Cadastrar Encontro</Button>
            </Form>
        </Container>

        <Container className="container-meu-cadastro">
            <h1 className="m-4 h1-cadastrados">Meus Encontros Cadastrados</h1>
                <div className="box-my-encontros p-4">
                    <TableCadastro />
                </div>
        </Container>

        <Footer/>
        </>
    )
}