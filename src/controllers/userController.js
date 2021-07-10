const { update } = require('../models/user');
const User = require('../models/user');
// const moment = require('moment');
// moment().format(); 

module.exports = {
 
  //GET - return all users
  async getAll(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },

  //GET - find user by id
  async get(req, res) {
    try{
        const { id } = req.params;
        const user = await User.findByPk(id);

        if(!user){
            return res.status(400).json({ error: 'User not found' });
        }

        return res.json(user);
    } catch (err){
        return res.status(500).json({ error: err });
    }
  },

  //POST - create user
  async create(req, res) {
    try{
        const { name, dob, address, description } = req.body;
        //moment("12-25-1995", "MM-DD-YYYY");
        const user = await User.create({ name, dob, address, description });
        return res.json(user);; 

    } catch (err){
        return res.status(500).json({ error: err });
    }
  },

  //PUT - update user by id
  async update(req, res) {
    try{
        const { id } = req.params;
        const { name, dob, address, description } = req.body;
        console.log(id);
        const user = await User.findByPk(id);

        if(!user){
            return res.status(400).json({ error: 'User not found' });
        }

        user.update({ name, dob, address, description });

        return res.json(user);
    } catch (err){
        return res.status(500).json({ error: err });
    }
  },

  //DELETE - delete user by id
  async delete(req, res) {
    try{
        const { id } = req.params;
        const user = await User.findByPk(id);

        if(!user){
            return res.status(400).json({ error: 'User not found' });
        }

        user.destroy();

        return res.json(user);
    } catch (err){
        return res.status(500).json({ error: err });
    }
  }
};