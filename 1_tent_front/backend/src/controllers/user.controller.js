import postgre from '../../database.js';
// import authorize from "../middleware/authorize.js";

const userController ={
    getUserAluna: async(req, res) => {
        try {
        
            const user = await postgre.query("SELECT nome_aluna, mat_aluna FROM aluna WHERE id_aluna = $1", [req.user.id])
            res.json(user.rows[0]);
                // res.json({msg: "OK", data: rows})
            
                // return res.status(500).json({msg: "OK", data: rows})
        } catch (error) {
            console.error(err.message);
            res.status(500).send("Server error");
        }
    },
    getUserProfessora: async(req, res) => {
        try {
        
            const { rows } = await postgre.query("SELECT nome_professora, mat_professora FROM professora WHERE id_professora = $1", [req.params.id])
            if (rows[0]) {
                return res.json({msg: "OK", data: rows})
            }
            res.status(500).json({msg: "Ocorreu um erro ao encontrar usuário"})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    
}
export default userController;