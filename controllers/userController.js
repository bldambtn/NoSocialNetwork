const { User, Thought } = require("../models");

const userController = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user by ID
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .populate("thoughts friends")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with this ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with this ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with this ID" })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: "User and their thoughts deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
  // Add Friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } }, // Add friend to the friends array
      { new: true } // Return the updated user
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with this ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove Friend
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } }, // Remove friend from friends array
      { new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with this ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};

// Export userController 
module.exports = userController;
