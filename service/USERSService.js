'use strict';


/**
 * Create user
 * Create user into system
 *
 * body User_create User created (optional)
 * no response value expected for this operation
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete user by ID
 * Delete an user by his ID
 *
 * userId UUID 
 * no response value expected for this operation
 **/
exports.deleteUser = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Read user by ID
 * Read an user by his ID
 *
 * userId UUID 
 * returns response_200_user
 **/
exports.readUserById = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user" : {
    "id" : "39fc527d-1cb0-43b8-a7b6-6a9129713aac",
    "name" : "Pedro Soares",
    "dob" : "1993-10-29",
    "address" : {
      "zipCode" : "01234-000",
      "street" : "Adelia Fonseca do Bom Retiro",
      "number" : 317,
      "complement" : "APTO 33",
      "district" : "Vila São Tirol",
      "city" : "São Paulo",
      "state" : "SP",
      "country" : "Brasil"
    },
    "description" : "Desenvolvedor Fullstack",
    "createdAt" : "2020-04-12",
    "updatedAt" : "2020-04-12"
  },
  "statusCode" : 200
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Read users
 * Read all users
 *
 * limit Integer limit integer
 * offset Integer offset integer
 * initialDate Date initial date string (optional)
 * finalDate Date final date string (optional)
 * returns response_200_users
 **/
exports.readUsers = function(limit,offset,initialDate,finalDate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "users" : [ {
    "id" : "39fc527d-1cb0-43b8-a7b6-6a9129713aac",
    "name" : "Pedro Soares",
    "dob" : "1993-10-29",
    "address" : {
      "zipCode" : "01234-000",
      "street" : "Adelia Fonseca do Bom Retiro",
      "number" : 317,
      "complement" : "APTO 33",
      "district" : "Vila São Tirol",
      "city" : "São Paulo",
      "state" : "SP",
      "country" : "Brasil"
    },
    "description" : "Desenvolvedor Fullstack",
    "createdAt" : "2020-04-12",
    "updatedAt" : "2020-04-12"
  }, {
    "id" : "39fc527d-1cb0-43b8-a7b6-6a9129713aac",
    "name" : "Pedro Soares",
    "dob" : "1993-10-29",
    "address" : {
      "zipCode" : "01234-000",
      "street" : "Adelia Fonseca do Bom Retiro",
      "number" : 317,
      "complement" : "APTO 33",
      "district" : "Vila São Tirol",
      "city" : "São Paulo",
      "state" : "SP",
      "country" : "Brasil"
    },
    "description" : "Desenvolvedor Fullstack",
    "createdAt" : "2020-04-12",
    "updatedAt" : "2020-04-12"
  } ],
  "statusCode" : 200
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update user by ID
 * Update an user by his ID
 *
 * body User_update Broker info update (optional)
 * userId UUID 
 * no response value expected for this operation
 **/
exports.updateUser = function(body,userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

