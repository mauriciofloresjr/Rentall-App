import { Sequelize } from 'sequelize';

import sequelize from '../utils/database.js';

const User = sequelize.define('users', {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   //Server does a simple validation of Emails with form foo@bar.com
   email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {isEmail: true}
   },
   name: {
      type: Sequelize.STRING,
   },
   //Another validation for password, regex requires 8 characters 
   //with at least 1 letter, 1 number, and 1 special character
   password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {is: "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"}
   },
});

export default User;