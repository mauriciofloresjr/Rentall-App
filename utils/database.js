
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('logindb', 'root', 'project', {
    dialect: 'mysql',
    host: 'localhost', 
    port: 3306,
});

export default sequelize;