import { dbConnect } from "../../../db/connect";
import { Transaction } from "../../../db/transactionModel";
import { json } from "@sveltejs/kit";

dbConnect();

export async function GET() {
  try {
    const transactions = await Transaction.find();
    return json(transactions);
  } catch (error) {
    return json({ error: "Error finding transactions"}, { status: 500 });
  }
}

export async function POST({ request }) {
  try{ 
    const data = await request.json();
    const transaction = new Transaction(data);
    await transaction.save();
    return json(transaction, { status: 201 });
  } catch (error) {
    return json({ error: "Failed to create Transaction"}, { status: 500 });
  } 
}