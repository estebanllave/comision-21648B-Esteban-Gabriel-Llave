const { postModel } = require("../models/Post");

// controladores que renderizan páginas
const getAllPost = async (req, res) => {
  const allPosts = await postModel.findAll();

  res.render("index",{allPosts});
};

//traido solo un post para ver los detalles
const getPost = async (req,res) =>{
  //recupero el id
  const postId = req.params.id;

  //para obtener el post que viene de Db
  const post = await postModel.findByPk(postId);
  if (!post) {
    return res.redirect("/posts");
  }

  res.render("details",{post})
}

const formCreateNewPost = async (req, res) => {
  res.render("new-post");
};

const formUpdatePost = async (req, res) => {
  const postId = req.params.id;

  const post = await postModel.findByPk(postId);

  if (!post) {
    return res.redirect("/post");
  }

  res.render("update-post",{post});
};

// controladores que efectuan cambios en la base de datos y redireccionan
const createPost = async (req, res) => {
  const { author, title, content,image } = req.body;
  
  await postModel.create({author, title, content, image });
 //una vez creeada vuelve al index
  res.redirect("/post");
  // res.send("post creador")
};

const updatePost = async (req, res) => {
  const { id,title, author, content, image } = req.body;

  const post = await postModel.findByPk(id);

  await post.update({ title, author, content, image });

  res.redirect("/post");
};

const deletePost = async (req, res) => {
  const postId = req.params.id;

  const post = await postModel.findByPk(postId);

  await post.destroy();

  res.redirect("/post");
};

module.exports = {
  createPost,
  deletePost,
  formCreateNewPost,
  formUpdatePost,
  getAllPost,
  updatePost,
  getPost
};
