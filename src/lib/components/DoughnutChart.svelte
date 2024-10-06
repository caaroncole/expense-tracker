<script>
  // Import Doughnut from svelte-chartjs and automatically register all components
  import { Doughnut } from 'svelte-chartjs';
  import 'chart.js/auto'; // Import the complete auto-configuration of Chart.js

  export let categoryTotals;
  

  $: data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
        hoverBackgroundColor: [
          '#FF5A5E',
          '#5AD3D1',
          '#FFC870',
          '#A8B3C5',
          '#616774',
        ],
      },
    ],
  };
</script>
<div class="chart" style="width: 100%; height: 300px;">
<Doughnut {data} options={{ responsive: true }} />
</div>
