import postgre from '../../database.js';
const AgendaController = {
    // getAllEncontros: async(req, res) => {
    //     try {
    //         const { rows } = await postgre.query("select * from encontro")
    //         res.json({msg: "OK", data: rows})
    //     } catch (error) {
    //         res.json({msg: error.msg})
    //     }
    // },
    getById: async(req, res) => {
        try {
            const { rows } = await postgre.query("select * from books where book_id = $1", [req.params.id])

            if (rows[0]) {
                return res.json({msg: "OK", data: rows})
            }

            res.status(404).json({msg: "not found"})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
  
}

export default AgendaController 

//GET
// Encontros organizados pela data de inicio, disponivel para inscrição
// Encontros organizados pela data de inicio, inscritos pelo id do usuario logado
