import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import LogoLogin from '../../assets/Img/LogoLogin.png'
import Logoif from '../../assets/Img/Logoif.png'

import Form from 'react-bootstrap/Form';
import './Authentication.css'
import  { useRef, useState } from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:3000'

export default function Authentication(){
    const [selectedOption, setSelectedOption] = useState("Aluna");
    const [verificaMat, setVerificaMat] = useState("")
    const [isActive, setIsActive] = useState(false);
    const containerRef = useRef(null);
    const SingUpClick = () => {
        containerRef.current.classList.add("right-panel-active");
      };
    const SingInClick = () => {
        setIsActive(!isActive);
        if (containerRef.current) {
          containerRef.current.classList.toggle("right-panel-active");
        }
      };
      const [inputs, setInputs] = useState({
        matricula: "",
        password: "",
        nome: "",
        email: "",
      });
    
      const { matricula, password, nome, email } = inputs;
      const onChange = e =>
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    
      const fazerCadastro = async e =>{
        e.preventDefault();
        console.log("form is send");
        if(matricula.length < 12){
            console.log(matricula.length)
            setVerificaMat("Matrícula aluna deve conter 12 números!")
        }else {
            console.log("fazCadastro");
              //ENVIA PARA ENDPOINT QUE CONSULTA A TABELA ALUNA
            try {
                const body = { nome, matricula, email, password };
                const response = await axios.post(`${baseURL}/auth/cadastro`, 
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
    
        
      }


     const fazerLogin = async e => {
        e.preventDefault();
        console.log("form is send");
        if(selectedOption == "Aluna" && matricula.length < 12){
            console.log(matricula.length)
            setVerificaMat("Matrícula aluna deve conter 12 números!")
        }else {
            console.log("fazlogin");
              //ENVIA PARA ENDPOINT QUE CONSULTA A TABELA ALUNA
              try {
                const body = { matricula, password };

              const response = await axios.post(`${baseURL}/auth/cadastro`, 
              {
                  body: JSON.stringify(body)
              }
              );
          
        //         const parseRes = await response.json();
          
        //         if (parseRes.jwtToken) {
        //           localStorage.setItem("token", parseRes.jwtToken);
        //           setAuth(true);
        //           toast.success("Logged in Successfully");
        //         } else {
        //           setAuth(false);
        //           toast.error(parseRes);
        //         }
              } catch (err) {
                console.error(err.message);
              }

        }
        if(selectedOption == "Professora" && matricula.length < 7){
            console.log(matricula.length)
            setVerificaMat("Matrícula professora deve conter 7 números!")
        }
        else{
            //ENVIA PARA ENDPOINT QUE CONSULTA A TABELA PROFESSORA
        //     try {
        //         const body = { email, password };
        //         const response = await fetch(
        //           "http://localhost:5000/authentication/login",
        //           {
        //             method: "POST",
        //             headers: {
        //               "Content-type": "application/json"
        //             },
        //             body: JSON.stringify(body)
        //           }
        //         );
          
        //         const parseRes = await response.json();
          
        //         if (parseRes.jwtToken) {
        //           localStorage.setItem("token", parseRes.jwtToken);
        //           setAuth(true);
        //           toast.success("Logged in Successfully");
        //         } else {
        //           setAuth(false);
        //           toast.error(parseRes);
        //         }
        //       } catch (err) {
        //         console.error(err.message);
        //       }
         }
        

     }
    return (
        <>
        <Container className="d-flex align-items-center justify-content-center flex-column" style={{height: '100vh', marginTop:'90px'}}>
        <div  ref={containerRef} className='box'>
            <div className="form-container sign-up-container">
            <Image src={Logoif} style={{width:'150px'}} className="p-3 mb-2"/>

                <form  className="form-login" method="post" onSubmit={fazerCadastro}>
                <h1 style={{color:'#004d2a', fontSize:'25px'}} className="mt-2">Crie sua conta</h1>
                
                <input type="text" 
                placeholder="Nome" 
                name="nome" 
                value={nome}
                onChange={e => onChange(e)}/>
                <input type="email"
                placeholder="Email" 
                name="email"
                value={email}
                onChange={e => onChange(e)}/>
                <input 
                type="text" 
                placeholder="Matrícula" 
                name="matricula"
                value={matricula}
                onChange={e => onChange(e)} />

                <span className="verficar-mat p-1">{verificaMat}</span>

                <input type="password" 
                placeholder="Senha" 
                name="password"
                value={password}
                onChange={e => onChange(e)}/>
                
                <button className="mt-2" type="submit">Registrar</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
            <Image src={Logoif} style={{width:'150px'}} className="p-3"/>
                <form onSubmit={fazerLogin} className="form-login" method="post">
                <h1 style={{color:'#004d2a'}}>Login</h1>
                <div className="d-flex flex-row justify-content-around radio-check m-3">    
                <Form.Check type="radio" id="aluna">
                    <Form.Check.Input type="radio"   
                        value="Aluna"
                        checked={selectedOption === "Aluna"}
                        onChange={() => setSelectedOption("Aluna")}/>
                    <Form.Check.Label>Aluna</Form.Check.Label> 
                </Form.Check>
    
                <Form.Check type="radio" id="professora">
                    <Form.Check.Input type="radio"
                        value="Professora"
                        checked={selectedOption === "Professora"}
                        onChange={() => setSelectedOption("Professora")}/>
                    <Form.Check.Label>Professora</Form.Check.Label> 
                </Form.Check>   
                </div>
                <input 
                type="text" 
                placeholder="Matrícula" 
                name="matricula"  
                value={matricula}
                onChange={e => onChange(e)}/>
                <span className="verficar-mat p-1">{verificaMat}</span>
                <input 
                type="password" 
                placeholder="Senha"
                name="password"
                value={password}
                onChange={e => onChange(e)} />
                {/* <a href="#">Forgot your password?</a> */}
                <button type="submit" className="mt-3" >Entrar</button>
                {/* <p style={{margin:'5px', fontWeight:'bold'}}>ou entrar com</p>
                <button className=""><i className="bi bi-google"></i>oogle</button> */}
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                <div className='overlay-panel overlay-left'>
                <h1 className="h1-login">Já tem conta?</h1>
                <p>Entre com suas informações cadastradas</p>
                <button className="ghost"  onClick={SingInClick}>Entrar</button>
                </div>
                <div className='overlay-panel overlay-right'>
                <h1 className="h1-login">Não tem conta ainda?</h1>
                <p>Registra-se e junte-se a nós</p>
                <button className="ghost" onClick={SingUpClick}>Registrar-se</button>
                </div>
                </div>
            </div>
        </div>
        <Image src={LogoLogin} style={{width:'190px'}} className="mt-3"/>
        <a href="/sobre" className="link-sobre">Saiba mais sobre o <span>INOVA IF - Módulo Agenda</span></a>
        </Container>
        </>
    )
}