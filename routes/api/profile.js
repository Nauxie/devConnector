const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const User = require('../../models/User')
const Profile = require('../../models/Profile')
const { check, validationResult } = require('express-validator')

//@route  GET api/profile/me
//desc    get current users profile
//@access Private

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate('user', ['name', 'avatar'])

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' })
    }
    res.json(profile)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})
//@route  POST api/profile/me
//desc    get current users profile
//@access Private

module.exports = router
