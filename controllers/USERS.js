import utils from '../utils/writer.js';
import USERS from '../service/USERSService';

export const createUser = function createUser (req, res, next, body) {
  USERS.createUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

export const deleteUser = function deleteUser (req, res, next, userId) {
  USERS.deleteUser(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

export const readUserById = function readUserById (req, res, next, userId) {
  USERS.readUserById(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

export const readUsers = function readUsers (req, res, next, limit, offset, initialDate, finalDate) {
  USERS.readUsers(limit, offset, initialDate, finalDate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

export const updateUser = function updateUser (req, res, next, body, userId) {
  USERS.updateUser(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
