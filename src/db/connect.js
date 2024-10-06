import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
  mongoose.connect('mongodb://localhost:27017/expense-db');
  console.log("connected to mongodb");
  } catch (error) { console.error("Failed to connect to MongoDb", error) }
}