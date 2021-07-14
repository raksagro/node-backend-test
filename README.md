<h1 align="center">

Raks Development Test API 

</h1>

## **:computer: About**
This project consists of a technical test for backend development with NodeJS.

A CRUD API was built to manage user data using MySQL database.

And finally, tests were implemented using Jest.

### How has been designed 
The project was divided into simple layers of database, models and controllers:

* The controller mediates the input and output of data, communicating with the User model.
* The model manages the behavior of the data and communicates with the database, making access to the data that must be collected, recorded or updated.
* The database was structured using ORM Sequelize migrations.

App, routes and server startup configuration files were also generated.

![Imagem](https://uploaddeimagens.com.br/images/003/333/252/full/teste.jpg?1626205764)

## ⚙️ NodeJS API

The API has the basic features of creating, reading, updating and deleting.

* **POST: /user**: Create a new user 
```bash
Example: localhost:3000/user

Body:
{
  "name": "Natasha Romanoff",
  "dob": "2021-07-09",
  "address": "Avengers Mansion",
  "description": "Black Widow"
}

Return: 
{
    "message": "User created successfully",
    "user": {
        "id": 2,
        "name": "Natasha Romanoff",
        "dob": "2021-07-09",
        "address": "Avengers Mansion",
        "description": "Black Widow",
        "updatedAt": "2021-07-13T20:18:18.061Z",
        "createdAt": "2021-07-13T20:18:18.061Z"
    }
}
```

* **GET: /userid**: Get a user by id
```bash
Example: localhost:3000/user1

Return: 
{
    "message": "User data returned successfully",
    "user": {
        "id": 3,
        "name": "Loki",
        "dob": "2021-06-09",
        "address": "Asgard",
        "description": "God of cheating and Prince of Asgard",
        "createdAt": "2021-07-11T14:19:02.000Z",
        "updatedAt": "2021-07-11T14:19:02.000Z"
    }
}
```

* **GET /users**: Get all database users
```bash
Example: localhost:3000/users

Return: 
{
    "message": "Users returned successfully",
    "users": [
        {
            "id": 3,
            "name": "Loki",
            "dob": "2021-06-09",
            "address": "Asgard",
            "description": "God of cheating and Prince of Asgard",
            "createdAt": "2021-07-11T14:19:02.000Z",
            "updatedAt": "2021-07-11T14:19:02.000Z"
        }
     ]
}
```

* **PUT /userid**: Update a user by id
```bash
Example: localhost:3000/user2

Body:
{
  "name": "Black Widow",
  "dob": "2021-07-09",
  "address": "Avengers Mansion",
  "description": "Natasha Romanoff"
}

Return: 
{
    "message": "User updated successfully",
    "user": {
        "id": 2,
        "name": "Black Widow",
        "dob": "2021-07-09",
        "address": "Avengers Mansion",
        "description": "Natasha Romanoff",
        "updatedAt": "2021-07-13T20:18:18.061Z",
        "createdAt": "2021-07-13T20:18:18.061Z"
    }
}
```

* **DELETE: /userid**: Get a user by id
```bash
Example: localhost:3000/user2

Return: 
{
    "message": "User deleted successfully",
    "user": {
        "id": 2,
        "name": "Black Widow",
        "dob": "2021-07-09",
        "address": "Avengers Mansion",
        "description": "Natasha Romanoff",
        "updatedAt": "2021-07-13T20:18:18.061Z",
        "createdAt": "2021-07-13T20:18:18.061Z"
    }
}
```
### API return code:

Status | Message | Description
------------ | ------------- | -------------
200 | Success | The requested resource was successfully processed and returned.
201 | Created | The resource entered was created successfully.
400 | Bad Request | The request does not conform to the expected format
500 | Internal Server Error | An error occurred on the server while trying to process the request.

## :rocket: How to run the code

Before you begin, you will need to have the following tools installed on your machine: 
* [Git](https://git-scm.com) 
* [Node.js](https://nodejs.org/en/)
* [MySQL](https://www.mysql.com/)
* In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/)

Create and configure the **.env** file like this:
```bash
  PORT=3000

  DB_HOST=localhost
  DB_USERNAME=your_user_name
  DB_DATABASE=your_database_name
  DB_PASS=you_database_password
```
_Remember to configure according to your local MySQL settings._

On your terminal do the following:
```bash
  # Clone this repository
  $ git clone https://github.com/Nadine-Schneider/node-backend-test.git

  # Install the dependencies
  $ npm i
  
  # Create database
  $ npx sequelize db:create
  
  # Run the migrations
  $ npx sequelize db:migrate
  
  # Run seeders to create initial data
  $ npx sequelize-cli db:seed:all

  # Run the application in development mode
  $ npm run dev
  
  # You can also run the tests
  $ npm run test
```
Congratulations the server will run on the port set in PORT :tada:

You can try the API with Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/c2737faf8ec32af89f88?action=collection%2Fimport)


## 🛠 Technologies

The following technologies were used in the construction of the project:

* [NodeJS](https://nodejs.org/en/)
* [ExpressJS](https://expressjs.com/)
* [MySQL](https://www.mysql.com/)
* [Sequelize](https://sequelize.org/)
* [Jest](https://jestjs.io/)

## **:raising_hand: Author**

<a href="https://github.com/Nadine-Schneider" target="_blank">**Nadine Schneider**</a> 

<td align="center"><img src="https://avatars0.githubusercontent.com/u/38010089?s=300&v=4" width="100px;" alt=""/><br /></td>

## :mailbox_with_no_mail: Contact 

Nadine Schneider - nadine_schneider@hotmail.com 


