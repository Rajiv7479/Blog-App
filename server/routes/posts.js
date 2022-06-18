const express = require("express");
const router = express.Router();
const {
  getAllPost,
  createPost,
  deletePost,
  updatePost,
  getPost,
} = require("../controllers/posts");

router.route("/").get(getAllPost).post(createPost);
router.route("/:id").get(getPost).patch(updatePost).delete(deletePost);

// router.get("/", getAllPost);
// router.post("/", createPost);
// router.get("/:id", getPost);
// router.delete("/:id", deletePost);
// router.patch("/:id", updatePost);

module.exports = router;
