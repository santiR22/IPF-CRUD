import Profile from "../models/profile.models.js";

export const getProfiles = async (_req, res) => {
  const users = await Profile.find();

  res.json(users);
};

export const getProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Profile.findOne({ _id: id });
    res.json(user);
  } catch (error) {
    res.json({
      msg: "Error al obtener usuario",
    });
  }
};

export const createProfile = async (req, res) => {
  let { email, password } = req.body;

  const user = new User({ email, password });
  await user.save();

  res.json({
    msg: "Usuario agregado",
  });
};

export const updateProfile = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  try {
    const UpdatedProfile = await Profile.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    );
    return res.json(UpdatedProfile);
  } catch (error) {
    return res.status(401).json({ msg: "Error al actualizar usuario" });
  }
  // res.status(401).json({
  //   msg: "no se enviaron datos",
  // });
};

export const deleteProfile = async (req, res) => {
  const { id } = req.params;

  try {
    await Profile.findByIdAndDelete(id);

    return res.status(200).json({
      msg: "Perfil eliminado",
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
