
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('logindb', 'root', 'project', {
    dialect: 'mysql',
    host: 'localhost', 
    port: 3306,
    pool: {
        max: 100,
        min: 0,
        idle: 30000,
        acquire: 60000,
    },
});

export default sequelize;