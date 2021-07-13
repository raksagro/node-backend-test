const User = require('../models/user');

module.exports = {
 
  //GET - return all users
  async getAll(req, res) {
    try{
      const users = await User.findAll();

      if(!users || users.length == 0){
        return res.status(400).json({ error: 'Users not found, probably not registered' });
      }

      return res.status(200).json({ message: 'Users returned successfully', users });
    } catch (err){ 
      return res.status(500).json({ error: err });
    }
  },

  //GET - find user by id
  async get(req, res) {
    try{
      const { id } = req.params;
      const user = await User.findByPk(id);

      if(!user){
          return res.status(400).json({ error: 'User not found' });
      }

      return res.status(200).json({ message: 'User data returned successfully', user });
    } catch (err){
      return res.status(500).json({ error: err });
    }
  },

  //POST - create user
  async create(req, res) {
    try{
        const { name, dob, address, description } = req.body;
        const user = await User.create({ name, dob, address, description });

        return res.status(200).json({ message: 'User created successfully', user });
    } catch (err){
        return res.status(500).json({ error: err });
    }
  },

  //PUT - update user by id
  async update(req, res) {
    try{
        const { id } = req.params;
        const { name, dob, address, description } = req.body;
        const user = await User.findByPk(id);

        if(!name || !dob || !address || !description){
          return res.status(400).json({ error: 'Fields cannot be empty' });
        }

        if(!user){
            return res.status(400).json({ error: 'User not found' });
        }

        user.update({ name, dob, address, description });

        return res.status(200).json({ message: 'User updated successfully', user });
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

        return res.status(200).json({ message: 'User deleted successfully', user });
    } catch (err){
        return res.status(500).json({ error: err });
    }
  }
};