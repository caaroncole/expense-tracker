<script>
  const links = {
    home: "/",
    transactions: "/transactions",
    reports: "/reports"
  }
  let selected = '';
</script>
<div class="nav-bar">
  <ul>
    {#each Object.entries(links) as [name, link] }
      <li><a href={link}
        class:selected={name === selected}
        on:click={() => (selected = name)}
        >{name}</a></li>
    {/each}
  </ul>
</div>
<style>

  ul {
    display: flex;
    gap: 15px;
  }
  li {
    list-style: none;
  }
  a {
    color: darkslategrey;
    font-size: 20px;
    text-decoration: none;
    border-radius: .5rem;
    padding: .25rem .75rem;
    text-transform: capitalize;
    transition: all .1s ease-in-out;
    font-weight: bold;
  }
  .selected {
    background-color: rgb(191, 255, 234);
    border: 1px solid darkslateblue;
    box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25);
    font-size: 23px;
    font-weight: 800;
  }
</style>