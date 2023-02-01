import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const authMiddleware = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.sendStatus(401);
    }

    const [schema, token] = authorization.split(" ");

    console.log('schema', schema, 'token', token);
    if (schema !== "Bearer") {
      return res.sendStatus(401);
    }

    jwt.verify(token, process.env.SECRET_JWT, (error, decoded) => {
        if (error) {
            res.sendStatus(401);
        }

        console.log(decoded);
    });



    return next();
}