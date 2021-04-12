import * as utils from '../utils/writer.js';
import * as USERS from '../service/USERSService';

export const createUser = function createUser (req, res, next, body) {
  USERS.createUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

export const deleteUserById = function deleteUserById (req, res, next, userId) {
  USERS.deleteUserById(userId)
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

export const readUsers = function readUsers (req, res, next) {
  USERS.readUsers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

export const updateUserById = function updateUserById (req, res, next, body, userId) {
  USERS.updateUserById(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

export const getUserLocalizationById = function getUserLocalizationById (req, res, next, userId) {
  USERS.getUserLocalizationById(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};