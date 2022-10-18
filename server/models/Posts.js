import {DataTypes} from 'sequelize'
import sequelize from '../config/db.js';

const Posts = sequelize.define('Posts', {
    name: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
}, {
    // Other model options go here
});

export default Posts