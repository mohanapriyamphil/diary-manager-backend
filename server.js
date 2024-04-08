const express = require("express");
const app = express();
require("dotenv").config();
const connectToMongoDB = require("./database.config");
const postRoute = require('./routes/postRoute.js')

app.use(express.json());

app.use('/api/posts', postRoute);

//connectin to mongodb
connectToMongoDB()
  .then(() => {
    //connecting to server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err.message));
