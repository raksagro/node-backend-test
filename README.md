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

The API has the basic features of creating, editing, reading and deleting.

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

### How to run the code



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
