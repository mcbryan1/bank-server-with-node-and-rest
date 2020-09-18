//Setting Up Express
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const server = express();
const {
  listBanksController,
  createBankController,
  // updateBankController,
  // deleteBankController,
} = require("./controllers");

//Middleware
server.use(bodyParser.json());

//Routes
server.get("/bank/:id?", listBanksController);
server.post("/bank", createBankController);
// server.put("/bank", updateBankController);
// server.delete("/bank", deleteBankController);

//Connect To database and Listening To Server
mongoose
  .connect(
    "mongodb+srv://codetrainUser:Nnmvdr7uO5438KW4@cluster0.mzmfo.mongodb.net/codetrain?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    server.listen(3000, () => console.log("Server Is Ready For Any Request"));
  })
  .catch((error) => console.log(error));
