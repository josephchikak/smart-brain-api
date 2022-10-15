const express = require('express')
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const singin = require('./controllers/singin');


const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : '',
      password : '',
      database : 'smart-brain'
    }
  });

const app = express();
 

app.use(bodyParser.json());
app.use(cors())

app.get('/', (req,res) =>{
    res.send(database.users)
})

app.post('/signin', (req, res) =>{singin.handleSignin(req,res,db,bcrypt)})

app.post('/register', (req,res) =>{register.handleRegister(req,res,db,bcrypt)})


app.listen(process.env.PORT || 3001, ()=>{
    console.log(`app is running on port ${process.env.PORT}`)
})