const express = require('express');
const { ConnectMongoDb } = require('./src/db/conn');
const router = require('./src/router/item');
const { logReqRes } = require('./src/middleware/index');


const PORT = process.env.PORT || 3000;
const app = express();

// middlewares
app.use(express.json());
app.use(logReqRes("log.txt"));

//connection
ConnectMongoDb("mongodb://127.0.0.1/E-commerce")
  .then(() => {
    console.log("Database Connected!!");
  })
  .catch((err) => {
    console.error(err);
  });

// Routers
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
