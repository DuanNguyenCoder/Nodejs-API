const userModel = require("../models/user");

const getUser = (req, res) => {
  res.send(userModel.find({}));
};

const createUser = async (req, res) => {
  const mail = req.email;
  if (!(await userModel.findOne(mail))) {
    const newUser = await userModel.create(req.body);
    res.json(newUser);
  } else {
    throw new Error("user already exists");
  }
};
const loginUser = (req, res) => {
  const { email, passwords } = req.body;
};
const deleteUser = () => {};
const updateUser = () => {};

module.exports = { getUser, createUser, updateUser, deleteUser };
