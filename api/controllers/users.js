const User = require("../models/user");


const createUser = async(req, res, next) => {
    try {
        const user = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          registrationDate: req.body.registrationDate,
        });
    
        const result = await user.save();
        console.log(result);
        res.status(201).json({
          message: "Created user successfully",
          user: result,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const getAllUsers = async(req, res, next) => {
    try {
        const docs = await User.find();
        console.log(docs);
        res.status(201).json({
          message: "List Of all the Users",
          user: docs,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const getUserById = async(req, res, next) => {
    try {
        const doc = await User.findById(req.params.id);
        console.log(doc);
        res.status(201).json({
          message: "This is the User",
          user: doc,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const updateUserById = async(req, res, next) => {
    try {
        const doc = await User.findOneAndUpdate(
          { _id: req.params.id },
          {
            $set: {
              username: req.body.username,
              email: req.body.email,
              password: req.body.password,
              registrationDate: req.body.registrationDate,
            },
          },
          { new: true }
        );
        console.log(doc);
        res.status(201).json({
          message: " User updated",
          user: doc,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const deleteUserById = async(req, res, next) => {
    try {
        const result = await User.findByIdAndDelete(req.params.id);
        console.log(result);
        res.status(201).json({
          message: "The User is Deleted",
          user: result,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
};