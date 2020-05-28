//create the router object
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { getUser, addUser, validateUser } = require("./users");

// handle post request to register new user
router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //change getUser function to getUsrByName for below
  let user = await getUser(req.body.name);
  if (user) return res.status(400).send("Username already exists.");

  //since user and password are valid, hash the password
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(req.body.password, salt);

  //since user is valid, save to database
  user = await addUser(req.body.name, hashed);
  res.send(user);
});

module.exports = router;
