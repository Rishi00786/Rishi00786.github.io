const express = require('express')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Mail = require('../models/E-mail')

router.post('/contact', [
    body('name', 'Name must be of at least 3* Characters').isLength({ min: 3 }),
    body('email', 'Please enter valid mail id').isEmail(),
    body('phone','Enter a valid phone no.').isMobilePhone()
],async (req, res) => {
    // If any error occur in above three statements it will display it
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //finding user with same-email address
    try {
      let user = await Mail.findOne({ email: req.body.email })
      if (user) {
        return res.status(400).json({ error: "User with this E-mail address already exists" })
      }
      //Creating a new user
      user = await Mail.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
      });
      return res.status(200).json(user)
      } catch (error) {
      console.error(error.message)
      return res.status(400).json({ error: "Some UnKnown Error occured" })
    }
  
  })
module.exports = router