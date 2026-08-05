const session = require('express-session');

require("dotenv").config();


module.exports = session({
    secret: process.env.SECRET_KEY || '9999',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
});
