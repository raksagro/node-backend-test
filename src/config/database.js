const path = require('path')

const environment = process.env.NODE_ENV || 'dev'
const envPath = path.join(__dirname, '../','../',environment + '.env')

require('dotenv').config({ path: envPath })

module.exports =  {
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  ssl: true,
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true
  }
} 