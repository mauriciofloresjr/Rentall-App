import { Sequelize } from 'sequelize';

import sequelize from '../utils/database.js';

//definition of table to be created in DB
const Listings = sequelize.define('listings', {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   title: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   description: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   category: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   price: {
      type: Sequelize.INTEGER,
      allowNull: false,
   },
});

export default Listings;