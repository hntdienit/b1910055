import users from './users.js'

/* import routes */
import categories from "./categories.js"
// import variations from './variations.js';
import shippingmethods from './shippingmethods.js';
// import variationoptions from './variationoptions.js';
import products from './products.js';
import promotions from './promotions.js';

const router = (app) => {
  app.get("/", (req, res, next) => {
    return res.status(200).json({
      message: "server run ok!",
    });
  });

  // router-delete
  app.use("/auth", users);
  /* router */
  app.use("/categories", categories);
  // app.use("/variations", variations);
  app.use("/shippingmethods", shippingmethods);
  // app.use("/variationoptions", variationoptions);
  app.use("/products", products);
  app.use("/promotions", promotions);

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
