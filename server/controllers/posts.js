import Posts from "../models/Posts.js";

const getPosts = async (req, res, next) => {
  const listOfPosts = await Posts.findAll();
  return res.status(200).json(listOfPosts);
};

const getPost = async (req, res, next) => {
  const id = req.params.id
  const post = await Posts.findByPk(id)
  return res.status(200).json(post);
};

const postPosts = async (req, res, next) => {
  const post = req.body;
  await Posts.create(post);
  return res.status(201).json(post);
};

export default {
  getPosts,
  getPost,
  postPosts,
};
