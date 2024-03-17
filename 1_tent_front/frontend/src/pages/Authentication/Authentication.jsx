import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import LogoLogin from '../../assets/Img/LogoLogin.png'
import Logoif from '../../assets/Img/Logoif.png'
import './Authentication.css'
import  { useRef, useState } from 'react';


export default function Authentication(){
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
  
    return (
        <>
        <Container className="d-flex align-items-center justify-content-center flex-column" style={{height: '100vh'}}>
        <div  ref={containerRef} className='box'>
            <div className="form-container sign-up-container">
            <Image src={Logoif} style={{width:'150px'}} className="p-3 mb-2"/>

                <form action="#">
                <h1 style={{color:'#004d2a'}}>Crie sua conta</h1>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Matrícula" />
                <input type="password" placeholder="Senha" />
                <button className="mt-3">Registrar</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
            <Image src={Logoif} style={{width:'150px'}} className="p-3"/>
                <form action="#">
                <h1 style={{color:'#004d2a'}}>Login</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                {/* <a href="#">Forgot your password?</a> */}
                <button className="mt-3">Entrar</button>
                {/* <p style={{margin:'5px', fontWeight:'bold'}}>ou entrar com</p>
                <button className=""><i className="bi bi-google"></i>oogle</button> */}
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                <div className='overlay-panel overlay-left'>
                <h1>Já tem conta?</h1>
                <p>Entre com suas informações cadastradas</p>
                <button className="ghost"  onClick={SingInClick}>Entrar</button>
                </div>
                <div className='overlay-panel overlay-right'>
                <h1>Não tem conta ainda?</h1>
                <p>Registra-se e junte-se a nós</p>
                <button className="ghost" onClick={SingUpClick}>Registrar-se</button>
                </div>
                </div>
            </div>
        </div>
        <Image src={LogoLogin} style={{width:'200px'}} className="mt-3"/>
        </Container>
      
        </>
    )
}