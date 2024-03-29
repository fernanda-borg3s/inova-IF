
import './GerenciarEncontro.css'
import TableCadastro from "../../components/TableCadastro/TableCadastro";
import Container from "react-bootstrap/esm/Container";

import Footer from "../../components/Footer/Footer";
import FormCadastro from '../../components/FormCadastro/FormCadastro';

export default function GerenciarEncontro(){
    return (
        <>
        <h1 className="h1">Gerenciar Encontros</h1>
       <FormCadastro/>
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