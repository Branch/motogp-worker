// Import express framework
const express = require('express')

// Import middleware
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')

// Import route
const motogpRouter = require('./routes/motogp-route')

// Setup default port
const PORT = process.env.PORT || 4001

// Create express app
const app = express()

// Implement middleware
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.json())

app.use('/motogp', motogpRouter)

app.use((err, req, res, next) => {
    let origin = req.get('origin');
    console.error(err.stack)
    res.status(500).send(origin);

    console.error(err.stack)
    res.status(500).send('Something broke!')
})



// Start express app
app.listen(PORT, function() {
    console.log(`Server is running on: ${PORT}`)
})
