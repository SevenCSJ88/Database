const User = require("../model/userModel");

const createUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};
const findAll = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw error;
  }
};
const findById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    throw error;
  }
};

const updateUsername = async (userId, newUsername) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not");
    }
    user.username = newUsername;
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (userId) => {
  try {
    const user = await User.findByIdAndDelete(userId);
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  findById,
  findAll,
  updateUsername,
  deleteUser,
};
