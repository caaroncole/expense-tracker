<script>
  import { Line } from 'svelte-chartjs';
  import 'chart.js/auto';

  export let lineChartMonths;
  export let lineChartDebits;
  export let lineChartDeposits;
  
  // Declare the data variable, but don't assign it yet
  let data;

  // Use a reactive statement to update the data whenever months change
  $: data = {
    labels: lineChartMonths, // Use the updated months array for the labels
    datasets: [
      {
        label: 'Expenses',
        fill: true,
        lineTension: 0.3,
        backgroundColor: 'rgba(225, 204, 230, .3)',
        borderColor: 'rgb(205, 130, 158)',
        borderCapStyle: 'butt',
        pointBorderColor: 'rgb(205, 130, 158)',
        pointBackgroundColor: 'rgb(255, 255, 255)',
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(0, 0, 0)',
        pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: lineChartDebits, // Ensure data length matches months
      },
      {
        label: 'Deposits',
        fill: true,
        lineTension: 0.3,
        backgroundColor: 'rgba(184, 185, 210, .3)',
        borderColor: 'rgb(35, 26, 136)',
        pointBorderColor: 'rgb(35, 26, 136)',
        pointBackgroundColor: 'rgb(255, 255, 255)',
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(0, 0, 0)',
        pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: lineChartDeposits, // Ensure data length matches months
      },
    ],
  };
</script>



<div class="chart" style="width: 100%; height: 400px;">
  <Line {data} options={{ responsive: true }} />
</div>

<style>
  /* You can add any specific styles for the chart here */
</style>
