const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getPost,
  createPost,
  deletePost,
  updatePost,
} = require("../controllers/postController.js");
const requireAuth = require('../middleware/auth.js')
router.use(requireAuth)

router.get("/", getAllPosts);
router.get("/:id", getPost);
router.post('/', createPost);
router.delete('/:id', deletePost);
router.patch("/:id", updatePost);

module.exports = router;
