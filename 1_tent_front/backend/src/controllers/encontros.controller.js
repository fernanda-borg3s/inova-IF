import postgre from '../../database.js';

const encontrosController = {
    createEncontro: async(req, res) => {
        try {
            const {
                titulo_encontro, 
                descricao_encontro, 
                criterios_avaliacao,
                sala, 
                num_vagas, 
                data_inicio, 
                hora_inicio, 
                data_fim, hora_fim, 
                repete, 
                num_repeticoes, 
                disponivel_inscricao, 
                id_professora, 
                id_area_conhecimento, 
                id_componente_curricular, 
                id_objetivos_aprendizagem} = req.body

            const sql = 'INSERT INTO encontro(titulo_encontro, descricao_encontro, criterios_avaliacao, sala, num_vagas, data_inicio, hora_inicio, data_fim, hora_fim, repete, num_repeticoes, disponivel_inscricao, id_professora, id_area_conhecimento, id_componente_curricular, id_objetivos_aprendizagem) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *'

            const { rows } = await postgre.query(sql, [
                titulo_encontro, 
                descricao_encontro, 
                criterios_avaliacao,
                sala, 
                num_vagas, 
                data_inicio, 
                hora_inicio, 
                data_fim, hora_fim, 
                repete, 
                num_repeticoes, 
                disponivel_inscricao, 
                id_professora, 
                id_area_conhecimento, 
                id_componente_curricular, 
                id_objetivos_aprendizagem])

            res.json({msg: "Encontro criado com sucesso", data: rows[0]})

        } catch (error) {
            console.error(error);
            res.json({ msg: "Ocorreu um erro ao criar encontro" });
        }
    },
    getAllEncontrosDisponivel: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT E.id_encontro, E.titulo_encontro, E.descricao_encontro, E.criterios_avaliacao, E.sala, E.num_vagas, E.data_inicio, E.hora_inicio, E.data_fim, E.hora_fim, P.nome_professora, AC.area, CC.componente_curricular, OA.tipo_objetivo, OA.objetivos_aprendizagem, OA.etapa FROM encontro E INNER JOIN professora P ON E.id_professora = P.id_professora INNER JOIN area_conhecimento AS AC ON E.id_area_conhecimento = AC.id_area_conhecimento INNER JOIN  componente_curricular AS CC ON E.id_componente_curricular = CC.id_componente_curricular INNER JOIN objetivos_aprendizagem AS OA ON E.id_objetivos_aprendizagem = OA.id_objetivos_aprendizagem WHERE E.disponivel_inscricao = 'Sim';")
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    getAllEncontrosCadastrados: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT E.id_encontro, E.titulo_encontro, E.descricao_encontro, E.criterios_avaliacao, E.sala, E.num_vagas, E.data_inicio, E.hora_inicio, E.data_fim, E.hora_fim, E.num_repeticoes, E.repete, E.disponivel_inscricao, E.data_cadastro, P.mat_professora, P.nome_professora, P.email, AC.area, AC.area_sigla, CC.componente_curricular, OA.tipo_objetivo, OA.objetivos_aprendizagem, OA.etapa FROM encontro E INNER JOIN professora AS P, area_conhecimento AS AC, componente_curricular AS CC,  objetivos_aprendizagem AS OA WHERE E.id_professora = P.id_professora AND E.id_area_conhecimento = AC.id_area_conhecimento AND E.id_componente_curricular = CC.id_componente_curricular AND E.id_objetivos_aprendizagem = OA.id_objetivos_aprendizagem;")
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    getEncontroCadastradoById: async(req, res) => {
        try {
            const { rows } = await postgre.query("select * from books where book_id = $1", [req.params.id])

            if (rows[0]) {
                return res.json({msg: "OK", data: rows})
            }

            res.status(404).json({msg: "Encontro Cadastrado não localizado"})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    updateEncontroById: async(req, res) => {
        try {
            const { name, price } = req.body

            const sql = 'UPDATE books set name = $1, price = $2 where book_id = $3 RETURNING *'

            const { rows } = await postgre.query(sql, [name, price, req.params.id])

            res.json({msg: "OK", data: rows[0]})

        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    deleteEncontroById: async(req, res) => {
        try {
            const sql = 'DELETE FROM books where book_id = $1 RETURNING *'

            const { rows } = await postgre.query(sql, [req.params.id])

            if (rows[0]) {
                return res.json({msg: "OK", data: rows[0]})
            }

            return res.status(404).json({msg: "not found"})
            

        } catch (error) {
            res.json({msg: error.msg})
        }
    }

   
}
export default encontrosController;


// ENDPOINTS AQUI: 
// [Professores]
    //POST
// CreateEncontro - apenas para id_professora
    // GET
// getAllEncontrosCadastrados - trazer todos encontros cadastrados 
// getEncontrosCadastradosById- traz encontros com id do professor do usuario logado
    //PAtch
// updateEncontroById - atulizar encontros
    //DELETE
// deleteEncontroById - deletar encontro

// [Alunos]
    //GET
// getAllEncontrosDisponivel - todos disponivel para inscrever


