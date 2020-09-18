let BankModel = require("./model");

//Controllers
// List all Banks
const listBanksController = (req, res) => {
  const { id } = req.params;
  if (id) {
    BankModel.find({ _id: id })
      .then((banks) => {
        res.json({ data: banks });
      })
      .catch((error) => console.log(error));
  } else {
    BankModel.find({})
      .then((banks) => {
        res.json({ data: banks });
      })
      .catch((error) => console.log(error));
  }
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
  bank
    .save()
    .then((result) => {
      res.json({ message: "Create Successful", data: result });
    })
    .catch((error) => console.log(error));
};

//Update Bank Details
const updateBankController = (req, res) => {
  const {
    id,
    name,
    branch,
    location,
    phone,
    address,
    accountNumber,
  } = req.body;
  BankModel.findById(id)
    .then((bank) => {
      if (bank) {
        bank.name = name;
        bank.branch = branch;
        bank.location = location;
        bank.phone = phone;
        bank.address = address;
        bank.accountNumber = accountNumber;
        bank.save();
        res.json({ message: "Update Successful", data: bank });
      }
      res.json({ message: "Document Cannot Be Found", data: bank });
    })
    .catch((error) => console.log(error));
};

//Delete Banks
const deleteBankController = (req, res) => {
  const { id } = req.body;
  BankModel.findByIdAndRemove(id).then((deletedBank) => {
    if (deletedBank) {
      res.json({ message: "Bank Deleted", data: deletedBank });
    }
    res.json({ message: "Bank Not Found", data: deletedBank });
  });
};

module.exports = {
  listBanksController,
  createBankController,
  updateBankController,
  deleteBankController,
};
