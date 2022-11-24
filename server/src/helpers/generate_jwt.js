import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

const generate_jwt = (id = "") => {
  return new Promise((resolve, reject) => {
    const payload = { id };

    jwt.sign(payload, JWT_SECRET, (err, token) => {
      if (err) {
        reject("ERROR al general el token");
      }

      resolve(token);
    });
  });
};

export default generate_jwt;
