import postgre from '../../database.js';
const AgendaController = {
    getEncontrosToday: async(req, res) => {
        try {
            const { rows } = await postgre.query("select * from encontro")
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    getAllDatas: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT E.titulo_encontro, E.descricao_encontro, E.criterios_avaliacao, E.data_inicio, E.hora_inicio, E.hora_fim, E.sala, P.nome_professora, CC.componente_curricular FROM encontro E INNER JOIN professora AS P ON E.id_professora = P.id_professora INNER JOIN componente_curricular AS CC ON E.id_componente_curricular = CC.id_componente_curricular WHERE E.disponivel_inscricao = 'Sim' AND NOT EXISTS (SELECT 1 FROM inscricao AS I WHERE E.id_encontro = I.id_encontro AND I.id_aluna = $1)", [req.params.id])

            if (rows[0]) {
                return res.json({msg: "OK", data: rows})
            }

            res.status(404).json({msg: "not found"})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    getDataByUser: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT E.titulo_encontro, E.sala, E.data_inicio, E.hora_inicio, E.hora_fim, P.nome_professora, CC.componente_curricular FROM encontro E INNER JOIN inscricao AS I ON E.id_encontro = I.id_encontro INNER JOIN professora AS P ON E.id_professora = P.id_professora INNER JOIN componente_curricular AS CC ON E.id_componente_curricular = CC.id_componente_curricular WHERE I.id_aluna = $1", [req.params.id])

            if (rows[0]) {
                return res.json({msg: "OK", data: rows})
            }

            return res.status(404).json({msg: "not found"})
        } catch (error) {
            res.json({msg: error.msg})
        }
    }
    // getById: async(req, res) => {
    //     try {
    //         const { rows } = await postgre.query("select * from books where book_id = $1", [req.params.id])

    //         if (rows[0]) {
    //             return res.json({msg: "OK", data: rows})
    //         }

    //         res.status(404).json({msg: "not found"})
    //     } catch (error) {
    //         res.json({msg: error.msg})
    //     }
    // },
  
}

export default AgendaController 

//GET
// Encontros organizados pela data de inicio, disponivel para inscrição
// Encontros organizados pela data de inicio, inscritos pelo id do usuario logado
