require("dotenv").config({
  path: process.env.NODE_ENV == "test" ? ".env.test" : ".env"
});

module.exports = {
  dialect: process.env.DB_DIALECT || 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  storage: "./__tests__/database.sqlite",
  define: {
    timestamps: true,
  },
};