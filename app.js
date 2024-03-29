const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router=require("./router/route")
const app = express();

app.use(bodyParser());
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://ragavendran954:Raga12345@testing.ia3bbne.mongodb.net/project"
  )
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

  app.use(router)
 const PORT=process.env.PORT || 8074
app.listen(PORT);
