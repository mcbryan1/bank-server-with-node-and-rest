//Setting Up Express
const express = require("express");
const bodyParser = require("body-parser");
const server = express();

//Middleware
server.use(bodyParser.json());

//Database
let banksDb = [];

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
    banksDb.push(this);
    return this;
  }
  static all() {
    return banksDb;
  }

  static update(updateInfo = {}) {
    banksDb = banksDb.map((bank) => {
      if (bank.name === updateInfo.name) {
        return { ...bank, ...updateInfo };
      }
      return bank;
    });
  }
  static delete({ name }) {
    let deletedBank = null;
    banksDb = banksDb.filter((bank) => {
      if (bank.name !== name) {
        return true;
      }
      deletedBank = bank;
      return false;
    });
    return deletedBank;
  }
}

//Controllers
//List all Banks
const listBanksController = (req, res) => {
  const banks = BankModel.all();
  res.json({ data: banks });
};

//Create All Banks
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
  res.json({ message: "Create Successful", data: bank });
};

//Update Bank Details
const updateBankController = (req, res) => {
  const { name, branch, location, phone, address, accountNumber } = req.body;
  const updateBank = BankModel.update({
    name,
    branch,
    location,
    phone,
    address,
    accountNumber,
  });
  res.json({ message: "Update Successful", data: updateBank });
};
const deleteBankController = (req, res) => {
  //Delete Banks
  const { name } = req.body;
  const deletedBank = BankModel.delete({ name });
  res.json({ message: "Bank Deleted", data: deletedBank });
};

//Routes
server.get("/bank", listBanksController);
server.post("/bank", createBankController);
server.put("/bank", updateBankController);
server.delete("/bank", deleteBankController);

//Listening To Server
server.listen(3000, () => console.log("Server Is Ready For Any Request"));
