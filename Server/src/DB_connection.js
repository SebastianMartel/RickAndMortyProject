require('dotenv').config();
const { Sequelize } = require('sequelize');

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env; //from .env
const UserModel = require('./models/User')
const FavouriteModel = require('./models/Favourite')


// postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
   const sequelize = new Sequelize(
      `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
      { logging: false, native: false }
   );

   
FavouriteModel(sequelize)
UserModel(sequelize)


   const { User, Favourite } = sequelize.models;

User.belongsToMany(Favourite, {through: 'user_favourite', timestamps: false})
Favourite.belongsToMany(User, {through: 'user_favourite', timestamps: false})


module.exports = {
   User,
   Favourite,
   conn: sequelize,
};
