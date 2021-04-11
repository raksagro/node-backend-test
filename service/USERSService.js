/**
 * Create user
 * Create an user.
 *
 * body User_create User created (optional)
 * no response value expected for this operation
 **/
export const createUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete user by ID
 * This method deletes a user by passing his ID.
 *
 * userId UUID 
 * no response value expected for this operation
 **/
export const deleteUser = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Read user by ID
 * This method returns an object containing a user registered into system by passing his ID
 *
 * userId UUID 
 * returns response_200_user
 **/
export const readUserById = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve()
  });
}


/**
 * Read all users
 * This method returns a list containing all users registered into system
 *
 * returns response_200_users
 **/
export const readUsers = function() {
  return new Promise(function(resolve, reject) {
    resolve()
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
export const updateUser = function(body,userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

