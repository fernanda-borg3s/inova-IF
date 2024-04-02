
import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
import "dotenv/config";


export default function generateToken(user_id) {
  const payload = {
    user: {
      id: user_id
    }
  }
  return jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });
}
// { expiresIn: 86400 } = 24h
// const loginService = async ({ matricula, password }) => {
//   const user = await userRepositories.findByEmailUserRepository(matricula);

//   if (!user) throw new Error("Matrícula ou senha incorretas");

//   const isPasswordValid = await bcrypt.compare(password, user.password);

//   if (!isPasswordValid) throw new Error("Senha inválida");

//   const token = generateToken(user.id);

//   return token;
// };


//userRepositories
// import User from "../models/User.js";

// const findByEmailUserRepository = (email) => User.findOne({ email: email });

// const createUserRepository = ({
//   name,
//   username,
//   email,
//   password,
//   telefone,
//   empresa,
// }) =>
//   User.create({
//     name,
//     username,
//     email,
//     password,
//     telefone,
//   empresa,
//   });

// const findAllUserRepository = () => User.find();

// const findByIdUserRepository = (idUser) => User.findById(idUser);

// const updateUserRepository = (
//   id,
//   name,
//   username,
//   email,
//   password,
//   telefone,
//   empresa,
// ) =>
//   User.findOneAndUpdate(
//     {
//       _id: id,
//     },
//     {
//       name,
//       username,
//       email,
//       password,
//       telefone,
//       empresa,
//     },
//     {
//       rawResult: true,
//     }
//   );

// export default {
//   findByEmailUserRepository,
//   createUserRepository,
//   findAllUserRepository,
//   findByIdUserRepository,
//   updateUserRepository,
// };
