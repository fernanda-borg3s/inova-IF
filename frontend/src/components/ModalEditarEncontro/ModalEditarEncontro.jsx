import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/esm/Row';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import { toast } from "react-toastify";

import { useEffect, useState} from 'react';
const baseURL = 'http://localhost:3000'

export default function ModalEditarEncontro({ showEdit, modalOpen, idEncontro, userProf}){

    
    const [editEncontro, setEditEncontro] = useState([])
    const [inputs, setInputs] = useState({
        titulo_encontro:"",
         descricao_encontro:"",
         criterios_avaliacao:"",
         sala:"",
         num_vagas:"",
         data_inicio:"",
         hora_inicio:"",
         hora_fim:"", 
         repete: "",   
         disponivel_inscricao:"",
         id_area_conhecimento:"", 
         id_objetivos_aprendizagem:""
      });

    useEffect(() => {
       
      const fetchUpdateEncontro = async () => {
        try {
          const response = await axios.get(`${baseURL}/encontro/editEncontro/${userProf}/${idEncontro}`); 
          console.log(response);
         setEditEncontro(response.data.data);

        } catch (error) {
          console.error('Erro ao recuperar dados:', error);
          toast.error('Ocorreu um erro ao conectar com servidor, tente novamente mais tarde')

         }
      }
      fetchUpdateEncontro();
      }, [idEncontro]);

      const [Componente, setComponente] = useState(editEncontro.id_componente_curricular);


      useEffect(() => {
        const fetchEncontros = async () => {
          try {
            const response = await axios.get(`${baseURL}/aprendizagem/getObjetivo/${Componente}`);
            setObjAprendizagem(response.data.data);
           
           
      
          } catch (error) {
            console.error('Erro ao recuperar dados:', error);
          }
        };
        
        fetchEncontros();
      }, [Componente]); 
      const onChange = e => {
        if(e.target.name == 'num_vagas'){
            setInputs({ ...inputs, [e.target.name]: Number(e.target.value) });
            // console.log([e.target.name])
        }
        setInputs({ ...inputs, [e.target.name]: e.target.value });

      }
      const UpdateEncontro = async e => {
        e.preventDefault();
        const {
            titulo_encontro,
            descricao_encontro,
            criterios_avaliacao,
            sala,
            num_vagas,
            data_inicio,
            hora_inicio,
            hora_fim,
            repete,
            disponivel_inscricao,
            id_area_conhecimento,
            id_objetivos_aprendizagem
          } = inputs;
          const id_componente_curricular = Componente;
          try {
            const body = { titulo_encontro, descricao_encontro, criterios_avaliacao, sala, num_vagas, data_inicio, hora_inicio, hora_fim, repete, disponivel_inscricao, id_area_conhecimento, id_componente_curricular, id_objetivos_aprendizagem };
        
            const response = await axios.post(`${baseURL}/encontros/updateEncontro/${idEncontro}`, body, {
              headers: {
                "Content-type": "application/json"
              }
            }
            );
          
              toast.success("Atualização realizada com sucesso!")
             
          } catch (err) {
            console.error(err.message);
          }

      }
    return(
        <>
    
        <Modal    
    
      size="lg"
   
      backdrop="static"
        keyboard={false}
      show={showEdit} 
      >
        <Modal.Header >
            <Modal.Title>Editar Encontro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h6></h6>
        
        <div>
        <Form onSubmit={UpdateEncontro}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="titulo-encontro">
                        <Form.Label>Título do Encontro</Form.Label>
                        <Form.Control type="text" required placeholder="Digite aqui"  name="titulo_encontro"  onChange={onChange}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="disponivel_inscricao" className="inscricao">
                        <Form.Label>Disponível para Inscrição?</Form.Label>
                        <Form.Select required name="disponivel_inscricao" value={editEncontro.disponivel_inscricao} onChange={onChange}>
                        <option value="">Selecione</option>

                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                        </Form.Select>
                    </Form.Group>
                    
                    
                </Row>
                <Row className="mb-3"><Form.Group as={Col} controlId="id_area_conhecimento">
                      <Form.Label>Area de conhecimento:</Form.Label>
                        <Form.Select required name="id_area_conhecimento" value={editEncontro.id_area_conhecimento} onChange={onChange}>

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
                        value={Componente}
                    
                        onChange={e => setComponente(e.target.value)}>
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
                        <Form.Control as="textarea" placeholder="Critérios de Avaliação" 
                        name="criterios_avaliacao" 
                        value={editEncontro.criterios_avaliacao} 
                        onChange={onChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="descricao">                     
                      <Form.Label>Descrição do Encontro:</Form.Label>
                       <Form.Control as="textarea" placeholder="Descrição" name="descricao_encontro" 
                       value={editEncontro.descricao_encontro}
                       onChange={onChange} />
                    </Form.Group>
                </Row>
                   
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="data-inicio">
                      <Form.Label>Data de início:</Form.Label>
                        <Form.Control type="date" required 
                        name="data_inicio"
                        value={editEncontro.data_inicio} 
                        onChange={onChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="data-fim">
                        <Form.Label>Hora de Início:</Form.Label>
                        <Form.Control type="time" required 
                        name="hora_inicio" 
                        value={editEncontro.hora_inicio} 
                        onChange={onChange}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="data-fim">
                        <Form.Label>Hora de Fim:</Form.Label>
                        <Form.Control required type="time" 
                        name="hora_fim"  
                        value={editEncontro.hora_fim}
                        onChange={onChange} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="repete" >
                        <Form.Label>Encontro se repete?</Form.Label>
                        <Form.Select name="repete" required 
                        value={editEncontro.repete}
                        onChange={onChange}>
                        <option value="">Selecione</option>
                        <option value="Não">Não</option>
                            <option value="1"> + Uma vez</option>
                            <option value="2"> + Duas vezes</option>
                            <option value="3"> + Três vezes</option>
                 
                        </Form.Select>
                    </Form.Group>
                </Row>
    
                <Row className="mb-3">
                <Form.Group as={Col} controlId="tipo_objetivo">
                        <Form.Label>Tipo de Objetivo:</Form.Label>
                     <Form.Select >
                            {/* <option value="">Selecione</option>
                            {objAprendizagem.filter((aprendizagem, index, self) => 
                            index === self.findIndex((t) => t.tipo_objetivo === aprendizagem.tipo_objetivo)
                            )
                            .map((aprendizagem) => (
                            <option key={aprendizagem.id_objetivos_aprendizagem} value={aprendizagem.tipo_objetivo}>
                                {aprendizagem.tipo_objetivo}
                            </option>
                            ))
                        } */}
                          </Form.Select> 
                    </Form.Group>  
                 
                    <Form.Group as={Col} controlId="objetivos_aprendizagem" className="">
                        {/* vem do banco */}
                        <Form.Label>Objetivo De aprendizagem:</Form.Label>
                        <Form.Select required name='id_objetivos_aprendizagem' 
                        value={editEncontro.id_objetivos_aprendizagem}
                        onChange={onChange}>
                            {/* <option value=''>Não se aplica</option> */}
                    {/* {objAprendizagem.map((aprendizagem) => (
                        <option key={aprendizagem.id_objetivos_aprendizagem} value={aprendizagem.id_objetivos_aprendizagem} >
                            {formatText(aprendizagem.objetivos_aprendizagem)}
                        </option>
                        ))} */}
                          </Form.Select>
                   
                    </Form.Group>

                    <Form.Group as={Col} controlId="etapa">
                        <Form.Label>Etapa:</Form.Label>
                        <Form.Select >
                            {/* <option>Não se aplica</option> */}
                            {/* {objAprendizagem.map((aprendizagem) => {
                                if (aprendizagem.etapa === null) {
                                    return null;
                                } else {
                                    return (
                                        <option key={aprendizagem.id_objetivos_aprendizagem} value={aprendizagem.id_objetivos_aprendizagem}>
                                            {formatText(aprendizagem.etapa)}
                                        </option>
                                    );
                                }
                            })}
                            {objAprendizagem.filter(aprendizagem => aprendizagem.etapa === null).length > 0 &&
                                <option>Não se aplica</option>
                            } */}
                            </Form.Select>
                    </Form.Group>
               
                    
                </Row>             
                    
                   
            
                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="num_vagas" >
                        <Form.Label>Número de vagas:</Form.Label>
                        <Form.Control type="number" required  
                        name="num_vagas" 
                        value={editEncontro.num_vagas} 
                        onChange={onChange}/>
                    </Form.Group>

                    <Form.Group as={Col}  controlId="sala-encontro" >
                        <Form.Label>Sala:</Form.Label>
                        <Form.Control type="text" required placeholder="Digite a sala e o bloco" 
                        name="sala" 
                        value={editEncontro.sala} 
                        onChange={onChange} />
                    </Form.Group>
                    
                </Row>
                

                    <Button variant="primary" type="submit" style={{backgroundColor:'#004d2a', border:'none'}} className="w-100 p-2 mb-2 mt-3">Salvar Alterações</Button>
                
                    <Button variant="primary" type="reset" style={{backgroundColor:'#870303', border:'none'}} className="w-100 p-2" onClick={modalOpen}>Cancelar</Button>
            </Form>
        </div>
       

        </Modal.Body>
      
  </Modal>
      
        </>
    )
}