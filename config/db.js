const mongoose = require('mongoose') // gets the mongoose package

const config = require('config') // gets the config package, which allows this file to get properties from default.json

const db = config.get('mongoURI') // gets the mongodb string

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log('MongoDB connected...')
  } catch (err) {
    console.error(err.message)
    //exits process with failure
    process.exit
  }
}
module.exports = connectDB // allows for the connectDB function to be exported for use in server.js
