import Likes from "../models/Likes.js";

const postLike = async (req, res, next) => {
  const { PostId } = req.body;
  const UserId = req.user.id;

  const found = await Likes.findOne({
    where: { PostId: PostId, UserId: UserId },
  });

  if (!found) {
    await Likes.create({ PostId: PostId, UserId: UserId });
    return res.status(201).json({ liked: true });
  } else {
    await Likes.destroy({
      where: {
        PostId: PostId,
        UserId: UserId,
      },
    });
    return res.status(201).json({ liked: false });
  }
};

// const getPost = async (req, res, next) => {
// //   const id = req.params.id
// //   const post = await Posts.findByPk(id)
// //   return res.status(200).json(post);
// };

// const postPosts = async (req, res, next) => {
// //   const post = req.body;
// //   await Posts.create(post);
// //   return res.status(201).json(post);
// };

export default {
  postLike,
  //   getPost,
  //   postPosts,
};
