<script>
  import { transactionStore, getTransactions, addTransaction } from '$lib/stores/transactionStore';
  import { onMount } from 'svelte';
  import moment from 'moment';
  


  const categories = ['Groceries', 'Fast-Food', 'Rent', 'Utilities', 'Fuel']

  let formData = {
  type: '',
  amount: '',
  category: '',
  date: moment()
  }

  function handleSubmit() {
    addTransaction(formData)
  }

  function calculateBalance(transactions) {
    let balance = 0;
    transactions.forEach((transaction) => {
      if (transaction.type === 'deposit') {
        balance += transaction.amount;
      } else if (transaction.type === 'debit') {
        balance -= transaction.amount;
      }
    });
    return parseFloat(balance).toFixed(2);
  }

  function formatDate(date) {
    let formattedDate;
    return formattedDate = moment(date).format('MM-DD-YYYY HH:MM A')
    
  }
  
  onMount(getTransactions)
  
</script>
<div class="container">
  <div class="header">
    <h1>Transactions</h1>
  </div>
  <div class="table">
    <table>
      <thead>
        <th>Deposit/Debit</th>
        <th>Amount</th>
        <th>Category</th>
        <th>Date</th>
      </thead>
      <tbody>
        {#each $transactionStore as transaction }
          <tr>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.category}</td>
            <td>{formatDate(transaction.date)}</td>
          </tr>
        {/each}
      </tbody>
      <tfoot>
        <td>Balance</td>
        <td>{calculateBalance($transactionStore)}</td>
        <td></td>
        <td></td>
      </tfoot>
    </table>
  </div>


  <div class="form">
    <h3>Add a transaction</h3>
    <form on:submit|preventDefault={handleSubmit}>
      <label for="type">Type:</label>
      <select id="type" bind:value={formData.type} required>
        <option value="deposit">Deposit</option>
        <option value="debit">Debit</option>
      </select>
      <label for="amount">Amount:</label>
      <input id="amount" bind:value={formData.amount} required />
      <label for="category">Category:</label>
      <input id="category" bind:value={formData.category} required />
      <label for="date">Date:</label>
      <input id="date" type="date" bind:value={formData.date} required />
      <button type="submit">Submit</button>
    </form>
  </div>
</div>
<style>
  .container {
    flex: 1;
  }
  .header {
    border-bottom: 2px solid darkslategrey;
    padding: .2rem .5rem;
  }
  .table {
    margin: 2rem auto;
    width: 500px;
    height: 400px;
    display: flex;
    justify-content: space-around;
    border: 1px solid #ccc;
    overflow-y: auto;
    border-radius: 10px;
    border-collapse: collapse;
  }
  table {
    border-collapse: collapse;
    max-height: 400px;
    width: 100%;
  }

  tbody {
    vertical-align: top;
  }
  th {
    position: sticky;
    top: 0;
    background-color: darkseagreen;
  }
  th, td {
    padding: 5px 10px;
    color: darkslategrey;
    text-transform: capitalize;
  }
  tr {
    border: 1px solid black;
  }
  tr:nth-child(odd) {
    background-color: #f9f9f93d;
  }
  tr:nth-child(even) {
    background-color: #f9f9f973;
  }
  tfoot {
    bottom: 0;
    position: sticky;
    background-color: darkseagreen;
  }
</style>