const express = require('express')
const expressLayouts = require('express-ejs-layouts');

const app = express();

// Routes
app.use('/', require('./routes/index.js'));
 app.use('/users', require('./routes/users.js'));

 app.get
app.listen(5004, () => {
    console.log('server is listening on port 5004....')
  })
  