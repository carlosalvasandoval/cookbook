const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {mysql} = require ('./database');
const app = express();
//settings
app.set('port',process.env.PORT || 3000);
//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/recipes',require('./routes/recipe.routes.js'));

//Staticc files
app.use(express.static(path.join(__dirname,'public')))

//Starting the server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});