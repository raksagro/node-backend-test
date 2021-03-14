require('dotenv/config')
import { Sequelize, Dialect } from 'sequelize'
import database from '../config/database.js'

const sequelize: Sequelize = new Sequelize(
  {
    dialect: 'mysql' as Dialect,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    username: database.username,
    password: database.password,
    host: database.host,
    port: 3306,
    database: database.database,
    define: {
      timestamps: true,
      underscored: true
    }
  }
)

export default sequelize;