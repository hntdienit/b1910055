import Comments from "../models/Comments.js";

const getPosts = async (req, res, next) => {
  // const listOfPosts = await Posts.findAll();
  // return res.status(200).json(listOfPosts);
  return res.status(200).json([null]);
};

const getPostId = async (req, res, next) => {
  const postId = req.params.postId;
  const comments = await Comments.findAll({ where: { PostId: postId } });
  return res.status(200).json(comments);
};

const postPosts = async (req, res, next) => {
  const comment = req.body;

  const username = req.user.username;
  comment.username = username;
  await Comments.create(comment);
  return res.status(201).json(comment);
};

const deleteComment = async (req, res, next) => {
  console.log("vao delete: ");
  const commentId = req.params.commentId;
  await Comments.destroy({
    where: {
      id: commentId,
    },
  });
  return res.status(201).json("xoa thanh cong");
};

export default {
  getPosts,
  getPostId,
  postPosts,
  deleteComment,
};
