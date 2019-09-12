import express from 'express';
import morgan from 'morgan';
import path from 'path';
import bunyan from 'bunyan';
const app = express();
//settings
app.set('port',process.env.PORT || 3000);
const log = bunyan.createLogger({name:'System init'});
log.info('we are running env: '+process.env.ENV);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/recipes',require('./routes/recipe.routes.js'));

//Staticc files
app.use(express.static(path.join(__dirname,'public')))

//Starting the server
app.listen(app.get('port'),()=>{
    log.info(`Server on port ${app.get('port')}`);
});