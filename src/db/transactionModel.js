import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['debit', 'deposit'],
    required: [true, "Type is required"]
  },
  
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true }
});

export const Transaction = mongoose.model("Transaction", transactionSchema);