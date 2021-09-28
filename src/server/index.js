var path = require('path')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv')
dotenv.config()


// Require Express to run server and routes
const express = require('express')

// Require axios that support the Promise API and Make http requests from node.js
const axios = require('axios')

// Start up an instance of app
const app = express()

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Cors for cross origin allowance (allows the browser and server to communicate without security interruptions)
const cors = require('cors');
app.use(cors())

// Initialize the main project folder
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


// Setup empty JS object to act as endpoint for all routes
projectData = {}

// API Code
console.log(`Your API key is ${process.env.API_KEY}`)

//Post route
app.post('/postUrl', (req, res) =>{
    console.log(req.body.url)
    const url = req.body.url
    apiData(url)
    .then((res)=>{
        projectData.agreement = res.data.agreement
        projectData.confidence = res.data.confidence
        projectData.irony = res.data.irony
        projectData.score = res.data.score_tag
        projectData.model = res.data.model
    }).then(()=>res.send(projectData))
})

// function to get data from external api (meaning cloud) by personal API Key
const apiData = async (url) =>{
    const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?'
    const key = `key=${process.env.API_KEY}&url=`
    const lang = '&lang=en'

    console.log(baseUrl+key+url+lang)
    try {
        const apiRes = await axios(baseUrl+key+url+lang)
        console.log(apiRes)
        return apiRes
    } catch (error) {
        console.log('Error : ', error)
    }
}

//Get route
app.get('/getResults', (req, res) =>{
    console.log(projectData)
    res.send(projectData)
})

// Setup Server
const port = 3030
const server = app.listen(port, listening)
function listening(){
    console.log(`server running on localhost: ${port}`)
}
