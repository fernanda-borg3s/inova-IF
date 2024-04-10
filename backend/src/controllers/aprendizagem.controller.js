import postgre from '../../database.js';

const aprendizagemController ={
    getObjetivoByComponente: async(req, res) => {
        try {
        
            const { rows } = await postgre.query("SELECT TAE.id_tipoObj_objApren_etapa, AC.area_sigla, TOBJ.id_tipo_objetivos, TOBJ.tipo_objetivos, OA.id_objetivo_aprendizagem, OA.objetivo_aprendizagem, ET.id_etapa, ET.etapa FROM tipo_objAprend_etapa TAE INNER JOIN area_conhecimento AS AC ON TAE.id_area_conhecimento = AC.id_area_conhecimento INNER JOIN tipos_objetivos AS TOBJ ON TAE.id_tipo_objetivos = TOBJ.id_tipo_objetivos INNER JOIN objetivos_aprendizagem AS OA ON TAE.id_objetivo_aprendizagem = OA.id_objetivo_aprendizagem INNER JOIN etapa AS ET ON TAE.id_etapa = ET.id_etapa WHERE TAE.id_area_conhecimento = $1", [req.params.id])
            if (rows[0]) {
                return res.json({msg: "OK", data: rows})
            }
            res.json({msg: "Não há objetivos cadastrados nessa area do conhecimento"})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    // getObjetivoByAreaComponente: async(req, res) => {
    //     try {
        
    //         const { rows } = await postgre.query("SELECT OA.id_objetivos_aprendizagem, OA.tipo_objetivo, OA.objetivos_aprendizagem, OA.etapa FROM objetivos_aprendizagem AS OA INNER JOIN componente_curricular AS CC ON OA.id_componente_curricular = CC.id_componente_curricular WHERE CC.id_componente_curricular = $1", [req.params.id])
    //         if (rows[0]) {
    //             return res.json({msg: "OK", data: rows})
    //         }
    //         res.status(404).json({msg: "Não há objetivos cadastrados nesse componente curricular"})
    //     } catch (error) {
    //         res.json({msg: error.msg})
    //     }
    // }
    
}
export default aprendizagemController;

// POST
//criar objetivos de aprendizagem --- vai ver a possibildade desse
//GET
//objetivos ja cadastrados relacionado componente curricular e areconhecimento
//PATCH objetivos de aprendizagem