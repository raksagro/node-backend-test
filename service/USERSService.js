import db from '../models';
import { respondWithCode } from '../utils/writer'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


/**
 * Create user
 * Create an user.
 *
 * body User_create User created (optional)
 * no response value expected for this operation
 **/
export const createUser = function (body) {
  return new Promise(async function (resolve, reject) {
    let secureBody = {
      id: uuidv4(),
      name: body.name,
      dob: new Date(body.dob).toJSON(),
      address: {
        zipCode: body.address.zipCode ? body.address.zipCode : "",
        street: body.address.street ? body.address.street : "",
        number: body.address.number ? body.address.number : "",
        complement: body.address.complement ? body.address.complement : "",
        district: body.address.district ? body.address.district : "",
        city: body.address.city ? body.address.city : "",
        state: body.address.state ? body.address.state : "",
        country: body.address.country ? body.address.country : "",
      },
      description: body.description,
    }
    await db.user.create(secureBody).then((result) => {
      if (result)
        resolve(respondWithCode(200, { statusCode: 200, result }));
      else
        reject(respondWithCode(404, { statusCode: 404, message: "User not created" }))
    }).catch((error) => {
      reject(respondWithCode(500, { message: "Internal server error", error }));
    });
  });
}


/**
 * Delete user by ID
 * This method deletes a user by passing his ID.
 *
 * userId UUID 
 * no response value expected for this operation
 **/
export const deleteUserById = function (userId) {
  return new Promise(async function (resolve, reject) {
    await db.user.destroy({
      where: {
        id: userId
      }
    }).then((result) => {
      if (result)
        resolve(respondWithCode(200, { statusCode: 200, message: "User deleted" }));
      else
        reject(respondWithCode(404, { statusCode: 404, message: "Not found user" }))
    }).catch((error) => {
      console.log(error)
      reject(respondWithCode(500, { statusCode: 500, message: "Internal server error" }));
    });
  });
}


/**
 * Read user by ID
 * This method returns an object containing a user registered into system by passing his ID
 *
 * userId UUID 
 * returns response_200_user
 **/
export const readUserById = function (userId) {
  return new Promise(async function (resolve, reject) {
    await db.user.findOne({
      where: {
        id: userId
      }
    }).then((result) => {
      if (result)
        resolve(respondWithCode(200, { statusCode: 200, user: result }));
      else
        reject(respondWithCode(404, { statusCode: 404, message: "Not found user" }))
    }).catch((error) => {
      console.log(error)
      reject(respondWithCode(500, { statusCode: 500, message: "Internal server error" }));
    });
  });
}


/**
 * Read all users
 * This method returns a list containing all users registered into system
 *
 * returns response_200_users
 **/
export const readUsers = function () {
  return new Promise(async function (resolve, reject) {
    await db.user.findAll({
      where: {}
    }).then((result) => {
      if (result) {
        resolve(respondWithCode(200, { statusCode: 200, users: result }));
      }
      else {
        payload['clients'] = []
        reject(respondWithCode(404, { statusCode: 404, message: "Not found user" }));
      }
    }).catch((error) => {
      console.log(error)
      reject(respondWithCode(500, { statusCode: 500, message: "Internal server error" }));
    });
  });
}


/**
 * Update an user by ID
 * This method updates a user by passing only the fields that need to be changed.
 *
 * body User_update Broker info update (optional)
 * userId UUID 
 * no response value expected for this operation
 **/
export const updateUserById = function (body, userId) {
  return new Promise(async function (resolve, reject) {
    await db.user.update(body, {
      where: {
        id: userId
      }
    }).then((result) => {
      if (result[0])
        resolve(respondWithCode(200, { message: "User updated" }));
      else
        reject(respondWithCode(404, { message: "Not found user" }))
    }).catch((error) => {
      console.log(error)
      reject(respondWithCode(500, { message: "Internal server error" }));
    });
  });
}


/**
 * Get user localization by ID
 * This method returns the user's longitude and latitude, according to the registered address by passing the user ID
 *
 * userId UUID 
 * returns response_200_localization
 **/
exports.getUserLocalizationById = function (userId) {
  return new Promise(async function (resolve, reject) {
    await db.user.findOne({
      where: {
        id: userId
      }
    }).then(async (result) => {
      if (result) {
        let address = result.dataValues.address
        let location = `${address.number} ${address.street} ${address.city} ${address.state}`
        axios.get(process.env.GOOGLE_API_URL, {
          params: {
            address: location,
            key: process.env.GOOGLE_API_KEY
          }
        }).then((result) => {
          let localization = result.data.results[0].geometry
          let formattedResponse = {
            latitude: `${localization.location.lat}`,
            longitude: `${localization.location.lng}`
          }
          resolve(respondWithCode(200, { statusCode: 200, localization: formattedResponse }));
        }).catch((error) => {
          console.log(error)
          reject(respondWithCode(404, { statusCode: 404, message: "Not found address, check the registered address" }))
        })
      } else {
        reject(respondWithCode(404, { statusCode: 404, message: "Not found user" }))
      }
    }).catch((error) => {
      console.log(error)
      reject(respondWithCode(500, { statusCode: 500, message: "Internal server error" }));
    });
  });
}
