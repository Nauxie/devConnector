const express = require('express')
const router = express.Router()

//@route  POST api/users
//desc    add a user to users
//@access Public

router.post('/', (req, res) => {
  console.log(res.body)
})

module.exports = router
