
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";
import userRepositories from "../repositories/user.repositories.js";

function generateToken(id) {
  return jwt.sign({ id: id }, process.env.SECRET, { expiresIn: 86400 });
}

const loginService = async ({ email, password }) => {
  const user = await userRepositories.findByEmailUserRepository(email);

  if (!user) throw new Error("Wrong password or username");

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) throw new Error("Invalid password");

  const token = generateToken(user.id);

  return token;
};

export default { loginService, generateToken };
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
