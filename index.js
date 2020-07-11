//Setting Up Express
const express = require("express");
const bodyParser = require("body-parser");
const server = express();

//Middleware
server.use(bodyParser.json());

//Database
const bankDB = [];

//Models
class BankModel {
  constructor({ name, branch, location, phone, address, accountNumber }) {
    this.name = name;
    this.branch = branch;
    (this.location = location),
      (this.phone = phone),
      (this.address = address),
      (this.accountNumber = accountNumber);
  }
  save() {
    bankDB.push(this);
    return this;
  }
}

//Controllers
const listBanksController = (req, res) => {};
const createBankController = (req, res) => {
  const { name, branch, location, phone, address, accountNumber } = req.body;
  const bank = new BankModel({
    name,
    branch,
    location,
    phone,
    address,
    accountNumber,
  });
  bank.save();
  res.json({message: "Create Successful", data: bank})
};
const updateBankController = (req, res) => {};
const deleteBankController = (req, res) => {};

//Routes
server.get("/bank", listBanksController);
server.post("/bank", createBankController);
server.put("/bank", updateBankController);
server.delete("/bank", deleteBankController);

//Listening To Server
server.listen(3000, () => console.log("Server Is Ready For Any Request"));
