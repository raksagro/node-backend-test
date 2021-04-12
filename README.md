
# Raks Technical Test API

  

API developed for the purpose of testing my technical knowledge in back-end development.
  
 

# Goal

  
The goal is to develop an API in Node.JS with endpoints for Creating, Reading, Editing and Deleting information in the user table. As a bonus, create an endpoint that returns the user's location according to the registered address.

  

# Installation

### Requirements

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

- [Node.js](https://nodejs.org/) 
  

### Clone the repository

```
$ git clone https://github.com/pedrolucasD/node-backend-test.git
```

### Access the cloned repository path

```
$ cd node-backend-test
```

### Install dependencies

```
$ npm i
```
### Create a .env file into root path like the follow example:
 
```
NODE_ENV=development
PORT=8080
API_KEY=e11ca31f-fb8c-4579-b6a7-fc20f8a50039
GOOGLE_API_URL='https://maps.googleapis.com/maps/api/geocode/json'
GOOGLE_API_KEY=
```
### Create the config folder into root path and create the config.js file inside it (./config/config.js) like the follow example:
 
```
require('dotenv').config();

module.exports = {
  development: {
    database: 'databaseName',
    username: 'userName',
    password: 'userPassword',
    dialect: 'dialect',
    port: DBPort,
    host: 'yourHost',
    dialectOptions: {
      decimalNumbers: true
    }
  }
}
```

### Run server

```
$ npm run dev
```

The server will run on the port set into .env file

  

# How to use

With the server running, access the Swagger documentation that contains all the details of the existing endpoints and the tests

```
http://localhost:8080/docs
```

  

# Technologies

- [Node.js](https://nodejs.org/)
- [Swagger](https://swagger.io/) OAS3.0
- [Sequelize](https://sequelize.org/)
- [Postgres](https://www.postgresql.org/)
  

# Author

Pedro Soares

plucas.soarespinto@gmail.com