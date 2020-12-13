const basicAuth = require('express-basic-auth');
const express = require('express');
const compression = require('compression');
const sapRoute = require('./routes/sapRoute');

const app = express();
const port = process.env.PORT || 3030;

app.use(
  basicAuth({
    users: { linkapi: 'components@20' },
  })
);

app.use(compression());
app.use(express.json());
app.use('/api/sap', sapRoute);

var server = app.listen(port);
server.setTimeout(900000);

console.log(`API SAP started and running on port ${port}`);
