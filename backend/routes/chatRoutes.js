const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  removeFromGroup,
  addToGroup,
  renameGroup,
} = require("../controllers/chatControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(protect, accessChat); //working
router.route("/").get(protect, fetchChats); //not working 
router.route("/group").post(protect, createGroupChat); //working
router.route("/rename").put(protect, renameGroup); //working
router.route("/groupremove").put(protect, removeFromGroup); //working
router.route("/groupadd").put(protect, addToGroup); //working

module.exports = router;