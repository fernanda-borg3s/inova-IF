// import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/esm/Row";
// import Col from "react-bootstrap/esm/Col";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import './FormCadastro.css'
// import { useEffect, useState, useContext} from 'react';
// import { UserContext } from '../../Context/UserContext.jsx'


// import axios from 'axios';
// import { toast } from "react-toastify";

// const baseURL = 'http://localhost:3000'

// export default function FormCadastro(){

//     const [selectedComponente, setSelectedComponente] = useState('17');
//     const [objAprendizagem, setObjAprendizagem] = useState([]);
//   const { user } = useContext(UserContext);

//     const [inputs, setInputs] = useState({
//         titulo_encontro:"",
//          descricao_encontro:"",
//          criterios_avaliacao:"",
//          sala:"",
//          num_vagas:"",
//          data_inicio:"",
//          hora_inicio:"",
//          data_fim:"",
//          hora_fim:"", 
//          repete: "",
//          num_repeticoes:"",
//          disponivel_inscricao:"",
//          id_area_conhecimento:"", 
//          id_objetivos_aprendizagem:""
//       });
    
     
    
   
//         //  console.log(selectedComponente);
//       useEffect(() => {
//         const fetchEncontros = async () => {
//           try {
//             const response = await axios.get(`${baseURL}/aprendizagem/getObjetivo/${selectedComponente}`);
//             setObjAprendizagem(response.data.data);
           
           
      
//           } catch (error) {
//             console.error('Erro ao recuperar dados:', error);
//           }
//         };
        
//         fetchEncontros();
//       }, [selectedComponente]); 
//       const onChange = e => {
//         if(e.target.name == 'num_repeticoes' && e.target.name == 'num_vagas'){
//             setInputs({ ...inputs, [e.target.name]: Number(e.target.value) });
//             console.log([e.target.name])
//         }
//         setInputs({ ...inputs, [e.target.name]: e.target.value });

//       }
  
//     const CadastrarEncontro = async e =>{
//       e.preventDefault();
//       console.log("form is send");
//       console.log(inputs);
     
//       const { titulo_encontro, descricao_encontro, criterios_avaliacao, sala, num_vagas, data_inicio, hora_inicio, data_fim, hora_fim, repete, num_repeticoes, disponivel_inscricao, id_area_conhecimento, id_objetivos_aprendizagem } = inputs;
//       const id_professora  = user.id_professora
//       const id_componente_curricular = selectedComponente
  
     

//           try {
//               const body = { titulo_encontro, descricao_encontro, criterios_avaliacao, sala, num_vagas, data_inicio, hora_inicio, data_fim, hora_fim, repete, num_repeticoes, disponivel_inscricao, id_professora, id_area_conhecimento, id_componente_curricular, id_objetivos_aprendizagem };
          
//               const response = await axios.post(`${baseURL}/encontros/create`, body, {
//                 headers: {
//                   "Content-type": "application/json"
//                 }
//               }
//               );
            
//                 toast.success("Encontro criado com sucesso!")
               
//             } catch (err) {
//               console.error(err.message);
//             }

//     }
   
//       function formatText(textString){
//         if (textString.length > 110) {
//             const truncatedText = textString.slice(0, 110);
//             return truncatedText + "...";
//           }
//           return textString;
//       }
//     return(
//         <>
//          <Container className="container-cadastrar">
//           <h2 className="h2-cadastro">Cadastrar Encontro</h2>
//             <Form onSubmit={CadastrarEncontro}>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="titulo-encontro">
//                         <Form.Label>Título do Encontro</Form.Label>
//                         <Form.Control type="text" required placeholder="Digite aqui"  name="titulo_encontro"  onChange={onChange}/>
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="disponivel_inscricao" className="inscricao">
//                         <Form.Label>Disponível para Inscrição?</Form.Label>
//                         <Form.Select required name="disponivel_inscricao"  onChange={onChange}>
//                         <option value="">Selecione</option>

//                             <option value="Sim">Sim</option>
//                             <option value="Não">Não</option>
//                         </Form.Select>
//                     </Form.Group>
                
//                 </Row>
//                 <Row className="mb-3">                       
//                     <Form.Group as={Col} controlId="id_area_conhecimento">
//                       <Form.Label>Area de conhecimento:</Form.Label>
//                         <Form.Select required name="id_area_conhecimento" onChange={onChange}>

//                             <option value="1">Base de Autonomia e Emancipação</option>
//                             <option value="2">Ciências da Natureza e suas Tecnologias </option>
//                             <option value="3">Ciências Humanas e Sociais Aplicadas </option>
//                             <option value="4">Conhecimentos da Área Técnica </option>
//                             <option value="5">Língua Portuguesa e suas Literaturas </option>
//                             <option value="6">Linguagens e suas Tecnologias </option>
//                             <option value="7">Matemática e suas Tecnologias </option>
//                             <option value="8">Oficina de Línguas Estrangeiras </option>
//                             <option value="9">Oficinas da Área Técnica </option>
//                             <option value="10">Oficinas Livres do Ensino Médio</option>
//                             <option value="11">Projetos Integradores </option>
//                         </Form.Select>

                          
//                     </Form.Group>

//                     <Form.Group as={Col} controlId="id_componente_curricular">
//                       <Form.Label>Componente Curricular:</Form.Label>
//                         <Form.Select 
                        
//                         value={selectedComponente}
//                         onChange={e => setSelectedComponente(e.target.value)}>
//                             <option value="17">Não se aplica</option>
//                             <option value="1">Artes Cênicas</option>
//                             <option value="2">Artes Visuais</option>
//                             <option value="3">Biologia</option>
//                             <option value="4">Dança</option>
//                             <option value="5">Educação Física</option>
//                             <option value="6">Filosofia</option>
//                             <option value="7">Física</option>
//                             <option value="8">Geografia</option>
//                             <option value="9">História</option>
//                             <option value="10">Língua Espanhola e suas literaturas</option>
//                             <option value="11">Língua Inglesa e suas literaturas</option>
//                             <option value="12">Língua Portuguesa e suas literaturas</option>
//                             <option value="13">Matemática</option>
//                             <option value="14">Música</option>
//                             <option value="15">Química</option>
//                             <option value="16">Sociologia</option>
//                         </Form.Select>
//                     </Form.Group>
//                 </Row>
//                 <Row className="mb-3">   
//                     <Form.Group as={Col} controlId="criterios_avaliacao">
//                       <Form.Label>Critérios de Avaliação:</Form.Label>
//                         <Form.Control as="textarea" placeholder="Critérios de Avaliação" name="criterios_avaliacao" onChange={onChange} />
//                     </Form.Group>

//                     <Form.Group as={Col} controlId="descricao">                     
//                       <Form.Label>Descrição do Encontros:</Form.Label>
//                        <Form.Control as="textarea" placeholder="Descrição" name="descricao_encontro" onChange={onChange} />
//                     </Form.Group>
//                 </Row>
                   
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="data-inicio">
//                       <Form.Label>Data de início:</Form.Label>
//                         <Form.Control type="date" required name="data_inicio" onChange={onChange}/>
//                     </Form.Group>

//                     <Form.Group as={Col} controlId="data-fim">
//                         <Form.Label>Hora de Início:</Form.Label>
//                         <Form.Control type="time" required name="hora_inicio"  onChange={onChange}/>
//                     </Form.Group>
//                 </Row>
    
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="data-fim">
//                         <Form.Label>Data de Fim:</Form.Label>
//                         <Form.Control required type="date" name="data_fim" onChange={onChange} />
//                     </Form.Group>

//                     <Form.Group as={Col} controlId="data-fim">
//                         <Form.Label>Hora de Fim:</Form.Label>
//                         <Form.Control required type="time" name="hora_fim"  onChange={onChange} />
//                     </Form.Group>
//                 </Row>             
                    
//                     <Form.Group as={Col} controlId="tipo_objetivo">
//                         <Form.Label>Tipo de Objetivo:</Form.Label>
//                      <Form.Select >
//                             <option value="">Selecione</option>
//                             {objAprendizagem.filter((aprendizagem, index, self) => 
//                             index === self.findIndex((t) => t.tipo_objetivo === aprendizagem.tipo_objetivo)
//                             )
//                             .map((aprendizagem) => (
//                             <option key={aprendizagem.id_objetivos_aprendizagem} value={aprendizagem.tipo_objetivo}>
//                                 {aprendizagem.tipo_objetivo}
//                             </option>
//                             ))
//                         }
//                           </Form.Select> 
//                     </Form.Group>  
                 
//                     <Form.Group as={Col} controlId="objetivos_aprendizagem" className="mt-3 mb-3">
//                         {/* vem do banco */}
//                         <Form.Label>Objetivo De aprendizagem:</Form.Label>
//                         <Form.Select required name='id_objetivos_aprendizagem' onChange={onChange}>
//                             {/* <option value=''>Não se aplica</option> */}
//                     {objAprendizagem.map((aprendizagem) => (
//                         <option key={aprendizagem.id_objetivos_aprendizagem} value={aprendizagem.id_objetivos_aprendizagem} >
//                             {formatText(aprendizagem.objetivos_aprendizagem)}
//                         </option>
//                         ))}
//                           </Form.Select>
                   
//                     </Form.Group>

//                     <Form.Group as={Col} controlId="etapa">
//                         <Form.Label>Etapa:</Form.Label>
//                         <Form.Select >
//                             {/* <option>Não se aplica</option> */}
//                             {objAprendizagem.map((aprendizagem) => {
//                                 if (aprendizagem.etapa === null) {
//                                     return null;
//                                 } else {
//                                     return (
//                                         <option key={aprendizagem.id_objetivos_aprendizagem} value={aprendizagem.id_objetivos_aprendizagem}>
//                                             {formatText(aprendizagem.etapa)}
//                                         </option>
//                                     );
//                                 }
//                             })}
//                             {objAprendizagem.filter(aprendizagem => aprendizagem.etapa === null).length > 0 &&
//                                 <option>Não se aplica</option>
//                             }
//                             </Form.Select>
//                     </Form.Group>
            
//                 <Row className="mb-3 mt-3">
//                     <Form.Group as={Col} controlId="num_vagas" >
//                         <Form.Label>Número de vagas:</Form.Label>
//                         <Form.Control type="number" required  name="num_vagas"  onChange={onChange}/>
//                     </Form.Group>

//                     <Form.Group as={Col}  controlId="sala-encontro" >
//                         <Form.Label>Sala:</Form.Label>
//                         <Form.Control type="text" required placeholder="Digite a sala e o bloco"  name="sala" onChange={onChange} />
//                     </Form.Group>

                   

                    
//                 </Row>
                
//                 <Row className="mb-3">   
//                 <Form.Group as={Col} controlId="repete" >
//                         <Form.Label>Encontro se repete?</Form.Label>
//                         <Form.Select name="repete" required onChange={onChange}>
//                         <option value="">Selecione</option>

//                             <option value="Não">Não</option>
//                             <option value="Sim">Sim</option>
//                         </Form.Select>
//                     </Form.Group>

//                     <Form.Group as={Col} controlId="num_repeticoes" >
//                         <Form.Label>Se sim, quantas vezes? Se não, digite 0. </Form.Label>
//                         <Form.Control placeholder="" type="number" name="num_repeticoes" onChange={onChange} />
//                         {/* COLOCAR UM CONTROLE PARA MULTIPLICAR A DATA DE INICIO */}
//                     </Form.Group>                       
//                 </Row>

//                     <Button variant="primary" type="submit" style={{backgroundColor:'#004d2a', border:'none'}} className="w-100 p-2 mb-2 mt-3">Cadastrar Encontro</Button>
//                     <Button variant="primary" type="reset" style={{backgroundColor:'#870303', border:'none'}} className="w-100 p-2">Limpar</Button>
//             </Form>
//         </Container>

        
//         </>
//     )
// }