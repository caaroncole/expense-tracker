import { writable } from "svelte/store";

export const transactionStore = writable([]);

export const getTransactions = async (fetchFn = fetch) => {
  const response = await fetchFn('/api/transactions')
  const data = await response.json();
  transactionStore.set(data);
};

export const addTransaction = async (transaction) => {
  try {
    const response = await fetch('/api/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transaction)
    });
    if (response.ok) {
      const newTransaction = await response.json()
    transactionStore.update(currentTransactions => [...currentTransactions, newTransaction ])
    }
  } catch (error) {
    console.error("Failed to create expense in store")
  }
};
