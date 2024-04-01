import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './FormCadastro.css'
import { useEffect, useState} from 'react';

import axios from 'axios';

const baseURL = 'http://localhost:3000'

export default function FormCadastro(){
    const [inputs, setInputs] = useState({
        titulo_encontro:"",
         descricao_encontro:"",
         criterios_avaliacao:"",
         sala:"",
         num_vagas:"",
         data_inicio:"",
         hora_inicio:"",
         data_fim:"",
         hora_fim:"", 
         repete:"",
         num_repeticoes:"",
         disponivel_inscricao:"",
         id_professora:"",
         id_area_conhecimento:"",
         id_componente_curricular:"",
         id_objetivos_aprendizagem:"",
      });
    
      const { titulo_encontro, descricao_encontro, criterios_avaliacao, sala, num_vagas, data_inicio, hora_inicio, data_fim, hora_fim, repete, num_repeticoes, disponivel_inscricao, id_professora, id_area_conhecimento, id_componente_curricular, id_objetivos_aprendizagem } = inputs;
    //   const onChange = e =>
    //     setInputs({ ...inputs, [e.target.name]: e.target.value });
    
      const CadastrarEncontro = async e =>{
        e.preventDefault();
        console.log("form is send");
       

            try {
                const body = { titulo_encontro, descricao_encontro, criterios_avaliacao, sala, num_vagas, data_inicio, hora_inicio, data_fim, hora_fim, repete, num_repeticoes, disponivel_inscricao, id_professora, id_area_conhecimento, id_componente_curricular, id_objetivos_aprendizagem };
            
                const response = await axios.post(`${baseURL}/encontros/create`, 
                {
                    body: JSON.stringify(body)
                }
                );
         
          
                // const parseRes = await response.json();
          
                // if (parseRes.jwtToken) {
                //   localStorage.setItem("token", parseRes.jwtToken);
                //   setAuth(true);
                //   toast.success("Logged in Successfully");
                // } else {
                //   setAuth(false);
                //   toast.error(parseRes);
                // }
              } catch (err) {
                console.error(err.message);
              }

      }
      const [selectedComponente, setSelectedComponente] = useState('17');
      const [objAprendizagem, setObjAprendizagem] = useState([]);
   
        //  console.log(selectedComponente);
      useEffect(() => {
        const fetchEncontros = async () => {
          try {
            const response = await axios.get(`${baseURL}/aprendizagem/getObjetivo/${selectedComponente}`);
            setObjAprendizagem(response.data.data);
           
      
          } catch (error) {
            console.error('Erro ao recuperar dados:', error);
          }
        };
        
        fetchEncontros();
      }, [selectedComponente]); 
      function formatText(textString){
        if (textString.length > 110) {
            const truncatedText = textString.slice(0, 110);
            return truncatedText + "...";
          }
          return textString;
      }
    return(
        <>
         <Container className="container-cadastrar">
          <h2 className="h2-cadastro">Cadastrar Encontro</h2>
            <Form onSubmit={CadastrarEncontro}>
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
                        <Form.Select  >

                            <option value="1">Base de Autonomia e Emancipação</option>
                            <option value="2">Ciências da Natureza e suas Tecnologias </option>
                            <option value="3">Ciências Humanas e Sociais Aplicadas </option>
                            <option value="4">Conhecimentos da Área Técnica </option>
                            <option value="5">Língua Portuguesa e suas Literaturas </option>
                            <option value="6">Linguagens e suas Tecnologias </option>
                            <option value="7">Matemática e suas Tecnologias </option>
                            <option value="8">Oficina de Línguas Estrangeiras </option>
                            <option value="9">Oficinas da Área Técnica </option>
                            <option value="10">Oficinas Livres do Ensino Médio</option>
                            <option value="11">Projetos Integradores </option>
                        </Form.Select>

                          
                    </Form.Group>

                    <Form.Group as={Col} controlId="id_componente_curricular">
                      <Form.Label>Componente Curricular:</Form.Label>
                        <Form.Select 
                        defaultValue="17" 
                        value={selectedComponente}
                        onChange={e => setSelectedComponente(e.target.value)}>
                            <option value="17">Não se aplica</option>
                            <option value="1">Artes Cênicas</option>
                            <option value="2">Artes Visuais</option>
                            <option value="3">Biologia</option>
                            <option value="4">Dança</option>
                            <option value="5">Educação Física</option>
                            <option value="6">Filosofia</option>
                            <option value="7">Física</option>
                            <option value="8">Geografia</option>
                            <option value="9">História</option>
                            <option value="10">Língua Espanhola e suas literaturas</option>
                            <option value="11">Língua Inglesa e suas literaturas</option>
                            <option value="12">Língua Portuguesa e suas literaturas</option>
                            <option value="13">Matemática</option>
                            <option value="14">Música</option>
                            <option value="15">Química</option>
                            <option value="16">Sociologia</option>
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
                     <Form.Select defaultValue="Objetivos Essenciais Introdutório">
                            <option value="Objetivos Essenciais Introdutórios">Objetivos Essenciais Introdutórios</option>
                            <option value="Objetivos Essenciais">Objetivos Essenciais</option>
                            <option value="Objetivos Complementares">Objetivos Complementares</option>
                          </Form.Select> 
                    </Form.Group>  
                 
                    <Form.Group as={Col} controlId="objetivos_aprendizagem" className="mt-3 mb-3">
                        {/* vem do banco */}
                        <Form.Label>Objetivo De aprendizagem:</Form.Label>
                        <Form.Select defaultValue="Não se aplica">
                            <option>Não se aplica</option>
                    {objAprendizagem.map((aprendizagem) => (
                        <option key={aprendizagem.id_objetivos_aprendizagem} value={aprendizagem.id_objetivos_aprendizagem}>
                            {formatText(aprendizagem.objetivos_aprendizagem)}
                        </option>
                        ))}
                          </Form.Select>
                   
                    </Form.Group>

                    <Form.Group as={Col} controlId="etapa">
                        <Form.Label>Etapa:</Form.Label>
                        <Form.Select defaultValue="Não se aplica">
                            <option>Não se aplica</option>
                    {objAprendizagem.map((aprendizagem) => (
                        <option key={aprendizagem.id_objetivos_aprendizagem} value={aprendizagem.id_objetivos_aprendizagem}>
                            {formatText(aprendizagem.etapa)}
                        </option>
                        ))}
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
                        {/* COLOCAR UM CONTROLE PARA MULTIPLICAR A DATA DE INICIO */}
                    </Form.Group>  
                </Row>
                
                <Row className="mb-3">                        
                </Row>

                    <Button variant="primary" type="submit" style={{backgroundColor:'#004d2a', border:'none'}} className="w-100 p-2 mb-2">Cadastrar Encontro</Button>
                    <Button variant="primary" type="reset" style={{backgroundColor:'#870303', border:'none'}} className="w-100 p-2">Limpar</Button>
            </Form>
        </Container>

        
        </>
    )
}