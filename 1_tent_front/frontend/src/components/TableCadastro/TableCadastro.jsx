import Table from 'react-bootstrap/Table';
import './TableCadastro.css'



export default function TableCadastro(){
    return(
        <>
        <Table striped bordered hover responsive="sm">
            <thead>
                <tr>
                <th>#</th>
                <th>Título Encontro</th>
                <th>Descrição</th>
                <th>Sala</th>
                <th>Data Início</th>
                <th>Data Fim</th>
                <th>Lista de inscritos</th>
                <th>Editar</th>
                <th>Excluir</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><i className="bi bi-person-check-fill"></i></td>
                    <td><i className="bi bi-pencil-square"></i></td>
                    <td><i className="bi bi-trash-fill"></i></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td><i className="bi bi-person-check-fill"></i></td>
                    <td><i className="bi bi-pencil-square"></i></td>
                    <td><i className="bi bi-trash-fill"></i></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td >Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td><i className="bi bi-person-check-fill"></i></td>
                    <td><i className="bi bi-pencil-square"></i></td>
                    <td><i className="bi bi-trash-fill"  data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top"></i></td>
                </tr>
            </tbody>
        </Table>
        </>
    )
}