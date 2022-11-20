import addresses from './addresses.js'
import users from './users.js'
import carts from "./carts.js"
import categories from "./categories.js"
import orders from "./orders.js"
import shippingmethods from './shippingmethods.js';
import products from './products.js';
import promotions from './promotions.js';

const router = (app) => {
  app.get("/", (req, res, next) => {
    return res.status(200).json({
      message: "server run ok!",
    });
  });

  app.use("/addresses", addresses);
  app.use("/auth", users);
  app.use("/carts", carts);
  app.use("/categories", categories);
  app.use("/orders", orders);
  app.use("/shippingmethods", shippingmethods);
  app.use("/products", products);
  app.use("/promotions", promotions);

  app.use("/:error", (req, res, next) => {
    const err = new Error("Not Found!");
    err.status = 404;
    next(err);
  });

  /* show error when debug console.log */
  app.use((err, req, res, next) => {
    const error = app.get("env") === "development" ? err : {};
    const status = err.status || 500;
    return res.status(status).json({
      error: {
        message: error.message,
      },
    });
  });
};

export default router;
