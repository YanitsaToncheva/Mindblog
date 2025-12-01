import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import 'dotenv/config';

import routes from './routes.js';

import { authMiddleware } from './middlewares/authMiddleware.js';
import helpers from './views/helpers/index.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';



const app = express();

//Setup database
try {
    await mongoose.connect('mongodb://localhost:27017', {
        dbName: 'mind-blog',
    });
    console.log('Database connected successfully!');
} catch (err) {
    console.error('Cannot connect to database: ', err.message)
}

//Config handlebars

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
    helpers,
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

//Add static middleware
app.use(express.static('src/public'));

//Add cookie-parser
app.use(cookieParser());

// Add body parser
app.use(express.urlencoded({extended: false}));

// Use auth middleware
app.use(authMiddleware);

//Add routes
app.use(routes);

//Add global error handling

app.use(errorMiddleware);

app.listen(process.env.PORT, () => console.log(`Server is listening on http://localhost:${process.env.PORT}...`));