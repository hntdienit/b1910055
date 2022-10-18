import { Sequelize } from 'sequelize'
const sequelize = new Sequelize('b1910055', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});


 
export default sequelize