const basicAuth = require('express-basic-auth');
const express = require('express');
const sapRoute = require('./routes/sapRoute');

const app = express();
const port = process.env.PORT || 3030;

app.use(
  basicAuth({
    users: { linkapi: 'components@20' },
  })
);

app.use(express.json());
app.use('/api/sap', sapRoute);

app.listen(port, '0.0.0.0');

console.log(`Running on port ${port}`);
