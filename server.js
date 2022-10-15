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
      connectionString : process.env.DATABASE_URL,
      ssl: true
    }
  });

const app = express();
 
app.use(bodyParser.json());

app.use(cors())

app.get('/', (req,res) =>{
    res.send('working!')
})

app.post('/signin', (req, res) =>{singin.handleSignin(req,res,db,bcrypt)})

app.post('/register', (req, res) =>{register.handleRegister(req,res,db,bcrypt)})


app.listen(process.env.PORT || 3001, ()=>{
    console.log(`app is running on port ${process.env.PORT}`)
})