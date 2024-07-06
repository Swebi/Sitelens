<script>
  import { capturedImage, url } from "../stores/store";
</script>

<div class="relative bg-transparent" id="print">
  <img src="/mac.png" alt="MacBook" class="w-[900px] h-auto" />
  {#if $capturedImage}
    <img
      src={$capturedImage}
      alt="Captured Screenshot"
      class="absolute -top-[24px] left-0 transform scale-[0.74]"
    />
  {:else}
    <iframe
      id="inlineFrameExample"
      title="Inline Frame Example"
      class="absolute -top-[192px] -left-[270px] w-[1440px] h-[900px] transform scale-[0.462]"
      src={$url}
    />
  {/if}
</div>
