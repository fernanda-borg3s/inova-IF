import postgre from '../../database.js';

const authController = {
    loginController: async (req, res) => {
        const { email, password } = req.body;
      
        try {
          const token = await authService.loginService({ email, password });
          return res.send(token);
        } catch (e) {
          return res.status(401).send(e.message);
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


