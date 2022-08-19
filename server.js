// set consts for express environment, mongoclient, .env and PORT
const express = require('express'),
        app = express(),
        MongoClient = require('mongodb').MongoClient,
        PORT = process.env.PORT || 8000,
        ObjectId = require('mongodb').ObjectId
require('dotenv').config()

//connect to DB
let db,
        dbConnectionStr = process.env.DB_STRING,
        dbName = 'schidtter'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
        .then(client => {
                console.log(`Connected to ${dbName} database`)
                db = client.db(dbName)
        })

//set view engine to EJS, static public folder for CSS, IMG, and JS routing, init JSON method
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//render ejs on load
app.get('/', (request, response) => {
        db.collection('schidtter').find().toArray()
                .then(data => {
                        response.render('index.ejs', { info: data })
                })
                .catch(err => console.error(err))
})

//add a new post to the main page
app.post('/addPost', (request, response) => {
        db.collection('schidtter').insertOne({
                userName: request.body.username,
                userPost: request.body.postForText,
                upvote: 1,
                downvote: 0
        })

                .then(result => {
                        console.log('new post created')
                        response.redirect('/')
                })
                .catch(err => console.log(err))
})


//adds one like to each post --- 
app.put(`/addOneUpvote`, async (request, response) => {
        console.log(`getting there ${request.body.info}`)
        console.log(request.body.upvote)
        const query = {"_id" : ObjectId(`${request.body.info}`)}
        const update = { $inc: {
                upvote: 1
        }}
          db.collection('schidtter').updateOne(query, update)
                 .then(result => {
                         console.log(`Got some upvote action ${request.body.info}`)
                         response.json('Upvote be done, yo')
                 })
                 .catch(err => console.log(err))
}) 

//need to add a downvote here
app.put(`/addOneDownvote`, async (request, response) => {
        console.log(`getting there ${request.body.info}`)
        console.log(request.body.upvote)
        const query = {"_id" : ObjectId(`${request.body.info}`)}
        const update = { $inc: {
                downvote: 1
        }}
          db.collection('schidtter').updateOne(query, update)
                 .then(result => {
                         console.log(`Got some upvote action ${request.body.info}`)
                         response.json('Upvote be done, yo')
                 })
                 .catch(err => console.log(err))
}) 




//delete to delete the post




//initiate server listening
app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`)
})
