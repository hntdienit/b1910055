import Posts from "../models/Posts.js";

const getPosts = async (req, res, next) => {
    const listOfPosts = await Posts.findAll()
  return res.status(200).json(listOfPosts);
};

const postPosts = async (req, res, next) => {
  const post = req.body;
  await Posts.create(post);
  return res.status(201).json(post);
};

export default {
  getPosts,
  postPosts,
};
