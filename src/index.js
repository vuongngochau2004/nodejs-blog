const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const morgan = require('morgan');
const app = express();
const port = 3000;

const route = require('./routes');

const db = require('./config/db'); 

// Connect to DB 

db.connect(); 

app.use(express.static(path.join(__dirname, 'public')));

// method-override 
app.use(methodOverride('_method')); 


// action -- middleware -- controller
// body parser
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// Template handlebars

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
    
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
