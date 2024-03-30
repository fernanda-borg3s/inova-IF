import "dotenv/config";
import jwt from "jsonwebtoken";
import userRepositories from "../repositories/user.repositories.js";

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).send({ message: "O Token não foi informado!" });

  const parts = authHeader.split(" "); /* ["Bearer", "asdasdasdadsadasd"] */
  if (parts.length !== 2)
    return res.status(401).send({ message: "Token Invalido!" });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ message: "Malformatted Token!" });

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    if (err) return res.status(401).send({ message: "Token Invalido!" });
    //DESCOBIR COMO ACESSAR AQUI DIRETAMENTE NO BANCO
    const user = await userRepositories.findByIdUserRepository(decoded.id);
    if (!user || !user.id)
      return res.status(401).send({ message: "Token Invalido!" });

    req.userId = user.id;

    return next();
  });
}

export default authMiddleware;
