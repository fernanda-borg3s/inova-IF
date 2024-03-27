
import Form from 'react-bootstrap/Form';
import  { useState } from 'react';
import './InputRadio.css'

export default function InputRadio(){
    const [selectedOption, setSelectedOption] = useState("Aluna");
    return(
        <>
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
        </>
    )
}