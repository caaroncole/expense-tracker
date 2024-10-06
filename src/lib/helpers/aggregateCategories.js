import moment from "moment";
import { getPreviousMonths } from "./previousMonths";


export const aggregateCategories = (transactions, months) => {
  const monthsArray = getPreviousMonths(months);
  
  let categoryTotals = {};

  transactions.forEach((transaction) => {
    const transactionMonth = moment(transaction.date).format('MMMM');

    if (monthsArray.includes(transactionMonth) && transaction.type === 'debit') {
      categoryTotals[transaction.category] = 0;
      categoryTotals[transaction.category] += transaction.amount
    };
  });

  return {
    categoryTotals
  }
}