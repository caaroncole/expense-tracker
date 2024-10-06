import moment from "moment";


export function getPreviousMonths(numOfMonths) {
  let monthArray = [];
  for (let i = 0; i < numOfMonths; i++) {
    monthArray.push(moment().subtract(i, 'months').format('MMMM'))
  }
  return monthArray
}

