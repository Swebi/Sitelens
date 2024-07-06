<script>
  import { capturedImage, url } from "../stores/store";
</script>

<div
  class="relative flex justify-center items-center bg-transparent"
  id="print"
>
  <img
    src="/iphone13.png"
    alt="iphone"
    class="pointer-events-none w-[220px] xs:w-[210px] sm:w-[200px] md:w-[200px] lg:w-[280px] 2xl:w-[350px] h-auto"
  />
  {#if $capturedImage}
    <img
      src={$capturedImage}
      alt="Captured Screenshot"
      class="absolute -z-10 rounded-[28px] -top-[26px] xs:-top-[24px] sm:-top-[24px] md:-top-[23px] lg:-top-[30px] xl:-top-[32px] 2xl:-top-[38px] left-0 transform scale-[0.85]"
    />
  {:else}
    <iframe
      id="inlineFrameExample"
      title="Inline Frame Example"
      class="absolute -z-10 w-[390px] h-[844px] transform scale-[0.472] xs:scale-[0.452] sm:scale-[0.43] lg:scale-[0.605] 2xl:scale-[0.752] -top-[210px] xs:-top-[220px] sm:-top-[230px] md:-top-[230px] lg:-top-[153px] 2xl:-top-[84px] rounded-[44px]"
      src={$url}
    />
  {/if}
</div>
