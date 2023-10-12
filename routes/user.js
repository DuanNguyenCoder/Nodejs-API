const express = require("express");
const router = express.Router();
const {
  getUser,
  deleteUser,
  updateUser,
  createUser,
} = require("../controller/userController");

router.route("/User").get(getUser);
router.route("/User").post(createUser);
router.route("/User").put();
router.route("/User/{id}").delete();

module.exports = router;