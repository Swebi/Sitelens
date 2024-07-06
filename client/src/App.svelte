<script>
  import Navbar from "./lib/Navbar.svelte";
  import Hero from "./lib/Hero.svelte";
  import Dashboard from "./lib/Dashboard.svelte";
</script>

<div
  class="flex flex-col items-center w-screen h-full overflow-x-hidden overflow-y-scroll p-5"
>
  <Navbar />

  <Hero />

  <Dashboard />
</div>
