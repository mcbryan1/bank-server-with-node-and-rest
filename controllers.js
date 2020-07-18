let BankModel = require('./model')

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

  module.exports ={
      listBanksController,
      createBankController,
      updateBankController,
      deleteBankController
  }