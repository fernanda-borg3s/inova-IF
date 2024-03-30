import postgre from '../../database.js';

const aprendizagemController ={
    getObjetivoByComponente: async(req, res) => {
        try {
        
            const { rows } = await postgre.query("SELECT OA.id_objetivos_aprendizagem, OA.objetivos_aprendizagem, OA.etapa FROM objetivos_aprendizagem AS OA INNER JOIN componente_curricular AS CC ON OA.id_componente_curricular = CC.id_componente_curricular WHERE CC.id_componente_curricular = $1", [req.params.id])
            if (rows[0]) {
                return res.json({msg: "OK", data: rows})
            }
            res.status(404).json({msg: "Não há objetivos cadastrados nesse componente curricular"})
        } catch (error) {
            res.json({msg: error.msg})
        }
    }
    
}
export default aprendizagemController;

// POST
//criar objetivos de aprendizagem --- vai ver a possibildade desse
//GET
//objetivos ja cadastrados relacionado componente curricular e areconhecimento
//PATCH objetivos de aprendizagem