import Posts from "../models/Posts.js";
import Likes from "../models/Likes.js";

const getPostsNotAuth = async (req, res, next) => {
  const listOfPosts = await Posts.findAll({ include: [Likes] });

  const likedPosts = await Likes.findAll();

  return res.status(200).json({listOfPosts: listOfPosts, likedPosts: likedPosts});
};

const getPosts = async (req, res, next) => {
  const listOfPosts = await Posts.findAll({ include: [Likes] });

  const likedPosts = await Likes.findAll({ where: { UserId: req.user.id } });

  return res.status(200).json({listOfPosts: listOfPosts, likedPosts: likedPosts});
};

const getPost = async (req, res, next) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  return res.status(200).json(post);
};

const postPosts = async (req, res, next) => {
  const post = req.body;
  await Posts.create(post);
  return res.status(201).json(post);
};

export default {
  getPostsNotAuth,
  getPosts,
  getPost,
  postPosts,
};
