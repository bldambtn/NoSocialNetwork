const router = require("express").Router();
const userRoutes = require("./api/userRoutes");
const thoughtRoutes = require("./api/thoughtRoutes");

// Use user routes under /api/users
router.use("/users", userRoutes);

// Use thought routes under /api/thoughts
router.use("/thoughts", thoughtRoutes);

module.exports = router;
