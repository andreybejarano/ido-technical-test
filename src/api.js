require('dotenv').config();
const api = require('express')();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const config = require('./config');
const basePath = '';

// Not use morgan for logs in Production
if (config.env !== 'production') {
  api.use(morgan('dev'));
}

// Disabled x-powered-by for security
api.disable('x-powered-by');

// Parse body params and attach them to req.body
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

// include routes and expose in base path
api.use(basePath, require('./routes'));

// Start server on http://localhost:{{config.port}}
api.listen(config.port, () => {
  console.log(`Server started on port ${config.port} (${config.env})`);
});
