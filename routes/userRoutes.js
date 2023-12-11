const express = require("express");
const router = express.Router();
const userService = require("../services/userService");

router.post("/", async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const users = await userService.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await userService.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const user = await userService.updateUsername(
      req.params.id,
      req.body.username
    );

    res.json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
});

module.exports = router;
