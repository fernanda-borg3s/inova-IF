import postgre from '../../database.js';
import bcrypt from "bcrypt";

const authController = {
    loginController: async (req, res) => {
        const { matricula, password } = req.body;
      
        try {
          const token = await authService.loginService({ matricula, password });
          return res.send(token);
        } catch (e) {
          return res.status(401).send(e.message);
        }
    },
    CadastroController: async (req, res) => {
      const { nome, matricula, password, email } = req.body;
    
      try {
        const user = await postgre.query("SELECT * FROM aluna WHERE mat_aluna = $1", [
          matricula
        ]);
    
        if (user.rows.length > 0) {
          return res.status(401).json("Essa matrícula já existe");
        }
    
        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(password, salt);
    
        let newUser = await postgre.query(
          "INSERT INTO aluna (mat_aluna, nome_aluna, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
          [nome, matricula, email, bcryptPassword]
        );
    
        const jwtToken = jwtGenerator(newUser.rows[0].user_id);
    
        return res.json({ jwtToken });
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
      }
  }
}
export default authController;

// ENDPOINTS AQUI:
    //POST

    //cadastrarAluno
    //LoginAluno


//authRepositories
// import User from "../models/User.js";

// const loginRepository = (email) =>
//   User.findOne({ email: email }).select("+password");

// export default { loginRepository };


