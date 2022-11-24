import User from "../models/user.models.js";

export const ExisteEmail = async (req, res, next) => {
  const { email } = req.body;
  const emailEncontrado = await User.findOne({ email: email });
  console.log(emailEncontrado)
  if (emailEncontrado) {
    return res.status(401).json({
      message: "Este usuario ya esta registrado",
      email: email,
    });
  }
  next();
};