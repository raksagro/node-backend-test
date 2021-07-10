require("dotenv").config();

module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  define: {
    timestamps: true,
  },
};