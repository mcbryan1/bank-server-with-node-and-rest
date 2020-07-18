//Setting Up Express
const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const {
  listBanksController,
  createBankController,
  updateBankController,
  deleteBankController,
} = require("./controllers");

//Middleware
server.use(bodyParser.json());

//Routes
server.get("/bank", listBanksController);
server.post("/bank", createBankController);
server.put("/bank", updateBankController);
server.delete("/bank", deleteBankController);

//Listening To Server
server.listen(3000, () => console.log("Server Is Ready For Any Request"));
