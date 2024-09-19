const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// Route to get all users and create a new user
router.route('/').get(getUsers).post(createUser);

// Route to get, update, or delete a single user by ID
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// Route to add and remove friends from a user's friend list
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
