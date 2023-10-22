const express = require("express");
const router = express.Router();
const {
  getUser,
  deleteUser,
  updateUser,
  createUser,
  loginUser,
  getOneUser,
} = require("../controller/userController");

router.route("/User").get(getUser);
router.route("/User/:id").get(getOneUser);
router.route("/User/:id").put(updateUser);
router.route("/User").post(createUser);
router.route("/User").put();
router.route("/User").delete(deleteUser);
router.route("/User/login").post(loginUser);

module.exports = router;
