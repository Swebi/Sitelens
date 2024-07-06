<script>
  import { capturedImage, url } from "../stores/store";
</script>

<div
  class="relative flex justify-center items-center bg-transparent"
  id="print"
>
  <img
    src="/ipadproL.png"
    alt="MacBook"
    class="w-[310px] xs:w-[380px] sm:w-[430px] md:w-[550px] lg:w-[600px] xl:w-[800px] h-auto"
  />
  {#if $capturedImage}
    <img
      src={$capturedImage}
      alt="Captured Screenshot"
      class="absolute xl:-top-[21px] xs:-top-[10px] sm:-top-[11px] md:-top-[14px] lg:-top-[16px] -top-[8px] left-0 transform scale-[0.742]"
    />
  {:else}
    <iframe
      id="inlineFrameExample"
      title="Inline Frame Example"
      class="absolute w-[1440px] h-[900px] transform scale-[0.16] xs:scale-[0.195] sm:scale-[0.221] md:scale-[0.2825] lg:scale-[0.309] xl:scale-[0.41] xs:-top-[341px] sm:-top-[327px] md:-top-[292px] lg:-top-[279px] xl:-top-[221px] -top-[361px]"
      src={$url}
    />
  {/if}
</div>
