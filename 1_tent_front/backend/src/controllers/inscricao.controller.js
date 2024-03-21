import postgre from '../../database.js';

const inscricaoController ={
    inscreverEncontro: async(req, res) => {
        try {
            const {id_encontro, id_aluna} = req.body

            const sql = 'INSERT INTO inscricao(id_encontro, id_aluna) VALUES($1, $2) RETURNING *'

            const { rows } = await postgre.query(sql, [id_encontro, id_aluna])

            res.json({msg: "Inscrição realizado com sucesso", data: rows[0]})

        } catch (error) {
            console.error(error);
            res.json({ msg: "Ocorreu um erro realizar inscrição" });
        }
    },
    getEncontroInscritoById: async(req, res) => {
        try {
            const { rows } = await postgre.query("select * from books where book_id = $1", [req.params.id])

            if (rows[0]) {
                return res.json({msg: "OK", data: rows})
            }

            res.status(404).json({msg: "Não há inscrições realizadas pelo usuário"})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    deleteInscricao: async(req, res) => {
        try {
            const sql = 'DELETE FROM inscricao where id_inscricao = $1 RETURNING *'

            const { rows } = await postgre.query(sql, [req.params.id])

            if (rows[0]) {
                return res.json({msg: "OK", data: rows[0]})
            }

            return res.status(404).json({msg: "Ocorreu um erro ao excluir sua inscrição"})
            

        } catch (error) {
            res.json({msg: error.msg})
        }
    }
}
export default inscricaoController;

    //POST
//inscreverEncontro
    //GET
// getAllEncontrosInscrito - todos encontros inscrito pela aluna que fez login
    //Delete
   // deleteInscricao