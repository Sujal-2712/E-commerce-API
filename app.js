const express = require('express');
require('./src/db/conn');
const item = require('./src/models/items');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
const router=require('./src/router/item');
app.use(router);



app.listen(3000, () => {
    console.log(`http://localhost:${PORT}`);
})


