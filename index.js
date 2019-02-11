const express = require('express');
const passport = require('passport');
cost GoogleStrategy = require('passport-google-oauth20').Strategy();

const app = express();

passport.use(new GoogleStrategy());



app.get('/', (req,res) => {
    res.send('Dude, Im not a Monk here');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);