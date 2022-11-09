import "dotenv/config";
import express from "express";
import cors from "cors";
import logger from "morgan"; /* when debug console.log */
import { fileURLToPath } from "url";
import path from "path";

import sequelize from "./config/db.js";
import relationship from "./models/Relationship.js";
import router from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/* connection Mysql */
try {
  await sequelize.authenticate();
  relationship();
  // await sequelize.sync({ force: true })
  await sequelize.sync();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

/* take data req.body */
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: true }));

/* middlewares */
app.use(express.json());
app.use(cors());
// app.use(cors({
//   origin: "http://localhost:3005",
//   methods: "GET,POST,PUT,DELETE,PATCH",
//   credentials: true,
// }))
app.use(logger("dev")); /* when debug console.log */

app.use("/uploads",express.static("./uploads"))

/* routes */
router(app);

/* start server */
app.listen(process.env.PORT, () => {
  console.log(`✅ server runing on http://localhost:${process.env.PORT}`);
});
