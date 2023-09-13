const { Router } = require("express");
const {
  createPost,
  deletePost,
  formCreateNewPost,
  formUpdatePost,
  getAllPost,
  updatePost,
  getPost
} = require("../src/controllers/post.controllers");

const router = Router();

router.get("/", getAllPost);
router.get('/details/:id',getPost)
router.get("/create", formCreateNewPost);
router.get("/update/:id", formUpdatePost);
router.get("/delete/:id", deletePost);

router.post("/", createPost);
//    CONTROLAR
router.post("/update", updatePost);

module.exports = router;
