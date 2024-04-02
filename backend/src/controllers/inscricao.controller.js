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
            const { rows } = await postgre.query("SELECT I.data_inscricao, E.id_encontro, E.titulo_encontro, E.descricao_encontro, E.criterios_avaliacao, E.sala, E.num_vagas, E.data_inicio, E.hora_inicio, E.data_fim, E.hora_fim, P.nome_professora, AC.area, CC.componente_curricular, OA.tipo_objetivo, OA.objetivos_aprendizagem, OA.etapa FROM inscricao AS I INNER JOIN encontro AS E ON I.id_encontro = E.id_encontro INNER JOIN professora AS P ON E.id_professora = P.id_professora INNER JOIN area_conhecimento AS AC ON E.id_area_conhecimento = AC.id_area_conhecimento INNER JOIN componente_curricular AS CC ON E.id_componente_curricular = CC.id_componente_curricular INNER JOIN objetivos_aprendizagem AS OA ON E.id_objetivos_aprendizagem = OA.id_objetivos_aprendizagem WHERE I.id_aluna = $1", [req.params.id])

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
            const sql = 'DELETE FROM inscricao WHERE id_inscricao = $1 RETURNING *'

            const { rows } = await postgre.query(sql, [req.params.id])

            if (rows[0]) {
                return res.json({msg: "OK", data: rows[0]})
            }

            return res.status(404).json({msg: "Ocorreu um erro ao excluir sua inscrição"})
            

        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    listInscritos: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT I.*, E.id_encontro FROM inscricao AS I INNER JOIN encontro AS E ON I.id_encontro = E.id_encontro INNER JOIN professora AS P ON E.id_professora = P.id_professora WHERE id_professora = $1", [req.params.id])
            if (rows[0]) {
                return res.json({msg: "OK", data: rows})
            }

            res.status(404).json({msg: "Não há inscritos nesse encontro"})
    
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    deleteAluno: async(req, res) => {
        try {
            const sql = ''

            const { rows } = await postgre.query(sql, [req.params.id])

            if (rows[0]) {
                return res.json({msg: "OK", data: rows[0]})
            }

            return res.status(404).json({msg: "Ocorreu um erro ao excluir sua inscrição"})
            

        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    addAluno: async(req, res) => {
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
    
}
export default inscricaoController;

    //POST
//inscreverEncontro
    //GET
// getAllEncontrosInscrito - todos encontros inscrito pela aluna que fez login
    //Delete
   // deleteInscricao