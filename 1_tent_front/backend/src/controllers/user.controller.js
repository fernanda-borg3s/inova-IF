import postgre from '../../database.js';
import authorize from "../middleware/authorize.js";

const userController ={
    getUserAluna: [authorize, async(req, res) => {
        try {
        
            const { rows } = await postgre.query("SELECT nome_aluna, mat_aluna FROM aluna WHERE id_aluna = $1", [req.params.id])
            if (rows[0]) {
                return res.json({msg: "OK", data: rows})
            }
            res.status(500).json({msg: "Não há objetivos cadastrados nesse componente curricular"})
        } catch (error) {
            res.json({msg: error.msg})
        }
    }],
    getUserProfessora: [authorize, async(req, res) => {
        try {
        
            const { rows } = await postgre.query("SELECT nome_professora, mat_professora FROM professora WHERE id_professora = $1", [req.params.id])
            if (rows[0]) {
                return res.json({msg: "OK", data: rows})
            }
            res.status(500).json({msg: "Não há objetivos cadastrados nesse componente curricular"})
        } catch (error) {
            res.json({msg: error.msg})
        }
    }],
    
}
export default userController;