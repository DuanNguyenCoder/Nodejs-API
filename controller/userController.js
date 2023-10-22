const { Error } = require("mongoose");
const generateJWT = require("../config/jwt");
const userModel = require("../models/user");
const asyncHandler = require("express-async-handler");

const getUser = async (req, res) => {
  dataUser = await userModel.find();
  res.send(dataUser);
};

const createUser = asyncHandler(async (req, res) => {
  const mail = req.email;
  if (!(await userModel.findOne(mail))) {
    const newUser = await userModel.create(req.body);
    res.json(newUser);
  } else {
    throw new Error("user already exists");
  }
});
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const findUser = await userModel.findOne({ email });

  if (findUser && (await findUser.isPasswordMatched(password))) {
    console.log("login success");
    res.json({
      _id: findUser?._id,
      name: findUser?.name,
      mobile: findUser?.mobile,
      role: findUser?.role,
      token: generateJWT(findUser._id),
    });
  } else {
    throw new Error("invalid credentials");
  }
});
const deleteUser = asyncHandler(async (req, res) => {
  const mail = req.body.mail;
  console.log(mail);
  await userModel
    .findOneAndRemove(mail)
    .then(function (models) {
      res.json({ message: "delete success", dataDelete: models });
    })
    .catch((err) => res.json(err));
});

const getOneUser = async (req, res) => {
  const idUser = req.params.id;
  await userModel
    .findById(idUser)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: "not exist" }));
};
const updateUser = async (req, res) => {
  const idUser = req.params.id;
  console.log("update ");

  await userModel
    .findByIdAndUpdate(idUser, req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      res.json({ message: "not exist" });
    });
  res.json(req.body);
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  getOneUser,
};
