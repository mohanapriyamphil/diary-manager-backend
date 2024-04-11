const express = require("express");
const app = express();
const cors = require('cors')
require("dotenv").config();
const connectToMongoDB = require("./database.config");
const postRoute = require('./routes/postRoute.js')
const userRoute = require('./routes/userRoute.js')

app.use(express.json());
app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method)
})

app.use('/api/posts', postRoute);
app.use('/api/user', userRoute);

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
