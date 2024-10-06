import { getTransactions } from '../../lib/stores/transactionStore.js';
export async function load({ fetch }) {
  const transactions = await getTransactions(fetch);
  return transactions;
} 