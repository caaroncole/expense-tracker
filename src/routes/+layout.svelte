<script>
  import Topbar from "../lib/components/Topbar.svelte";
</script>
<div class="container">
  <div class="nav-bar">
    <Topbar />
  </div>
  <div class="content">
    <slot />
  </div>
</div>


<style>
  :global(body) {
    background-color: paleturquoise;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
  }

  .container {
    display: flex; /* Enables flexbox layout */
    flex-direction: column; /* Stacks children vertically */
    min-height: 100vh; /* Makes the container fill the viewport height */
  }

  .nav-bar {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: aquamarine;
  }

  .content {
    flex: 1; /* Allows the content area to grow and fill available space */
  
  }
</style>

