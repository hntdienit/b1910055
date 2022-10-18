import "dotenv/config";
import express from "express";
const app = express();
import { fileURLToPath } from 'url'
import path from 'path'

import sequelize from './config/db.js'
import relationship from './models/Relationship.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Kết nối Mysql
try {
    await sequelize.authenticate()
    relationship()
    // await sequelize.sync({ force: true })
    await sequelize.sync()
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

app.listen(process.env.PORT, () => {
  console.log(`✅ server runing on http://localhost:${process.env.PORT}`);
});
