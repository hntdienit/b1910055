import posts from "./posts.js";
import comments from "./comments.js";
import users from './users.js'
import likes from "./like.js"

const router = (app) => {
  app.get("/", (req, res, next) => {
    return res.status(200).json({
      message: "server run ok!",
    });
  });

  /* router */
  app.use("/posts", posts);
  app.use("/comments", comments);
  app.use("/auth", users);
  app.use("/likes", likes);

  /* 404 */
  app.use("/:error", (req, res, next) => {
    const err = new Error("Not Found!");
    err.status = 404;
    next(err);
  });

  /* show error when debug console.log */
  app.use((err, req, res, next) => {
    const error = app.get("env") === "development" ? err : {};
    const status = err.status || 500;

    // response to client
    return res.status(status).json({
      error: {
        message: error.message,
      },
    });
  });
};

export default router;
