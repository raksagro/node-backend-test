const config = require('config');

module.exports = {
   "type": config.get('App.database.type'),
   "host": config.get('App.database.host'),
   "port": config.get('App.database.port'),
   "username": config.get('App.database.username'),
   "password": config.get('App.database.password'),
   "database": config.get('App.database.database'),
   "synchronize": true,
   "logging": false,
   "entities": [
      "dist/domain/entities/**/*.entity.js"
   ]
}