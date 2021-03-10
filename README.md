# Raks Back-end Developer Test

Be sure to read **all** of this document carefully, and follow the guidelines within.

## Context

Build a RESTful API that can `create/read/update/delete` user data from a persistence store.

### User Model

```
{
  "id": "xxx",                  // user ID (must be unique)
  "name": "backend test",       // user name
  "dob": "",                    // date of birth
  "address": "",                // user address
  "description": "",            // user description
  "createdAt": ""               // user created date
  "updatedAt": ""               // user updated date
}
```

### Functionality

- The API should follow typical RESTful API design pattern.
- The data should be saved in the DB.
- Provide proper API documentation.
- Proper error handling should be used.

## What We Care About

Use any libraries that you would normally use if this were a real production App. Please note: we're interested in your code & the way you solve the problem, not how well you can use a particular library or feature.

_We're interested in your method and how you approach the problem just as much as we're interested in the end result._

Here's what you should strive for:

- Good use of current Node.js & API design best practices.
- Solid testing approach.
- Extensible code.

## Implementation Path:

### Basic Requirements

  - Use Node.js `LTS` and any framework of your choice.
  - Use any SQL DB. MySQL DB is preferred.
  - Write concise and clear commit messages.
  - Write clear **documentation** on how it has been designed and how to run the code.

### Bonus
  - **Use typescript.
  - Use of Sequelize ORM (https://sequelize.org/)
  - Provide proper unit tests.
  - Add a read only endpoint to fetch location information based off the user's address (use [NASA](https://api.nasa.gov/api.html) or [Mapbox](https://www.mapbox.com/api-documentation/) APIs)
  - Providing an online demo is welcomed, but not required.

## Q&A

> Where should I send back the result when I'm done?

Fork this repo and send us a pull request when you think you are done. Or send me the link of the forked repo.

> What if I have a question?

Create a new issue in this repo or send me an email.
