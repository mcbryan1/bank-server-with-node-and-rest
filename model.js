const mongoose = require("mongoose");

const BankSchema = new mongoose.Schema({
  name: String,
  location: String,
  address: String,
  accountNumber: String,
  branch: String,
});
const BankModel = mongoose.model("Banks", BankSchema);

module.exports = BankModel;
