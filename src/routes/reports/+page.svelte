<script>
  import { transactionStore, getTransactions } from '$lib/stores/transactionStore';
  import LineChart from '../../lib/components/LineChart.svelte';
  import { aggregateTransactions } from '$lib/helpers/aggregateTransactions.js';
  import { aggregateCategories } from '$lib/helpers/aggregateCategories.js'
  import DoughnutChart from '../../lib/components/DoughnutChart.svelte';
  import { onMount } from 'svelte';

  let inputMonths = 3;
  let lineChartMonths = [];
  let lineChartDebits = [];
  let lineChartDeposits = [];
  let categoryTotals;
  
    // Fetch transactions when component mounts
    onMount(async () => {
    await getTransactions(); // Wait for the data to be fetched
    updateAggregatedData();  // Aggregate data after store is populated
  });

  // Reactive statement to update chart data when inputMonths or transactionStore changes
  $: if ($transactionStore.length > 0) {
    updateAggregatedData();
  }

  // Function to update the chart data using aggregateTransactions
  function updateAggregatedData() {
    const aggregatedTransactions = aggregateTransactions($transactionStore, inputMonths);
    ({ categoryTotals } = aggregateCategories($transactionStore, inputMonths))
    lineChartMonths = aggregatedTransactions.chartMonths;
    lineChartDebits = aggregatedTransactions.chartDebits;
    lineChartDeposits = aggregatedTransactions.chartDeposits;
    
  }

</script>
 <div class="header">
  <h1>Reports</h1>
</div>
<div class="form">
  <p>Previous number of months:</p>

  <form on:submit|preventDefault={updateAggregatedData}>
    <input type="text" bind:value={inputMonths} />
    <button type="submit">Update</button>
  </form>
</div>
<div class="charts">
  <LineChart {lineChartMonths} {lineChartDebits} {lineChartDeposits} />
  <DoughnutChart {categoryTotals} />
</div>

<style>
  .header {
    border-bottom: 2px solid darkslategrey;
    padding: .2rem .5rem;
  }
  input {
    padding: .5rem 1rem;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    transition: border-color, box-shadow .5s ease-in-out;

  }
  input:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25);
  }
  .charts {
    display: flex;
  }
</style>