const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require('./schema.js');  

const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));
 
const PORT = process.env.PORT ||  5000

app.listen(PORT, () => console.log(`server started at port ${PORT}`));