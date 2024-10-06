import moment from "moment";
import { getPreviousMonths } from "./previousMonths";

export function aggregateTransactions(transactions, months) {
  // Get an array of month names based on the number of previous months
  const monthsArray = getPreviousMonths(months);

  // Initialize local objects for monthly totals
  let monthlyDebits = {};
  let monthlyDeposits = {};

  // Initialize both `monthlyDebits` and `monthlyDeposits` for each month
  monthsArray.forEach((month) => {
    monthlyDebits[month] = 0;
    monthlyDeposits[month] = 0;
  });

  // Iterate over the transactions and categorize them into debits and deposits
  transactions.forEach((transaction) => {
    // Format the transaction's date to get the month name
    const transactionMonth = moment(transaction.date).format('MMMM');
    
    // Check if the transactionMonth is within the specified range of months
    if (monthsArray.includes(transactionMonth)) {
      // Depending on the type of transaction, add it to the appropriate monthly category
      if (transaction.type === 'debit') {
        monthlyDebits[transactionMonth] += parseFloat(transaction.amount);
      } else if (transaction.type === 'deposit') {
        monthlyDeposits[transactionMonth] += parseFloat(transaction.amount);
      }
    }
  });

  // Extract the month labels and the corresponding debit and deposit totals
  const chartMonths = Object.keys(monthlyDebits).reverse();
  const chartDebits = Object.values(monthlyDebits).reverse();
  const chartDeposits = Object.values(monthlyDeposits).reverse();
  

  // Return an object containing both the months and aggregated values for each type
  return {
    chartMonths,  // Array of month labels
    chartDebits,  // Array of debit amounts for each month
    chartDeposits // Array of deposit amounts for each month
  };
}
