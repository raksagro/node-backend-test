require("dotenv").config();

//console.log(process.env.DB_USERNAME +", " + process.env.DB_PASS + ", " + process.env.DB_DATABASE);

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