require('dotenv').config();
const { Sequelize } = require('sequelize');

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const UserModel = require('./models/User')
const FavouriteModel = require('./models/Favourite')

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/rickandmorty`,
   // URL
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
UserModel(sequelize)
//
FavouriteModel(sequelize)
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favourite } = sequelize.models;

User.belongsToMany(Favourite, {through: 'user_favourite', timestamps: false})
Favourite.belongsToMany(User, {through: 'user_favourite', timestamps: false})


module.exports = {
   User,
   Favourite,
   conn: sequelize,
};
