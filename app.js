const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

//set up express app
const app = express()

//log request to console
app.use(logger('dev'))

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//set up default catch all route sending a welcome message in JSON format
app.get('*', (req, res) => {
  return res.status(200).send({ message: "Successful status 200"})
})

module.exports = app
