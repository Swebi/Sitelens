<script>
  import html2canvas from "html2canvas";
  import Mac from "./Mac.svelte";
  import Iphone from "./iphone.svelte";
  import Ipad from "./ipad.svelte";

  import axios from "axios";
  import { capturedImage, height, url, width, device } from "../stores/store";
  import { Search, Download, RotateCcw, House } from "lucide-svelte";
  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  const downloadScreenshot = async () => {
    try {
      const response = await axios.get(
        `${SERVER_URL}/api/screenshot?resX=${$width}&resY=${$height}&outFormat=jpg&waitTime=200&isFullPage=false&dismissModals=false&url=${$url}`,

        { responseType: "blob" }, // Ensure the response is treated as a blob
      );

      //   console.log(response);

      // Create a blob URL from the response data
      const imageUrl = URL.createObjectURL(response.data);
      //   console.log(imageUrl);
      capturedImage.set(imageUrl);
    } catch (error) {
      console.error("Error capturing screenshot:", error);
    }
  };

  const downloadDivAsImage = () => {
    html2canvas(document.getElementById("print")).then((canvas) => {
      const dataUrl = canvas.toDataURL("image/jpg");
      const downloadLink = document.createElement("a");
      downloadLink.href = dataUrl;
      downloadLink.download = "preview.jpg";
      downloadLink.click();
    });
  };
</script>

<div
  class="hidden w-[95%] 2xl:w-[90%] h-[82vh] lg:flex justify-center items-center border-t-[30px] border-l-[0px] border-r-[0px] border-b-[30px] mb-16 shadow-2xl border-[#F7F7F7] rounded-3xl"
>
  <div
    class="w-[5%] 2xl:w-[4%] h-full flex flex-col justify-start items-center bg-[#F7F7F7] gap-4 2xl:gap-5"
  >
    <img src="/logor.jpeg" class="lg:h-8 xl:h-10 2xl:h-12 mt-4" alt="" />
    <House size={30} />
  </div>
  <div
    class="w-[74%] 2xl:w-[74%] h-full flex justify-center items-center border"
  >
    <div class="">
      {#if $device === "ipad"}
        <Ipad />
      {:else if $device === "iphone"}
        <Iphone />
      {:else}
        <Mac />
      {/if}
    </div>
  </div>
  <div
    class="w-[22%] h-full bg-[#F7F7F7] flex flex-col p-5 2xl:p-7 justify-start items-end"
  >
    <h1
      class="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center bg-gradient-to-r from-[#8e3830] via-[#e75542] to-[#d8834f] bg-clip-text text-transparent"
    >
      Dashboard
    </h1>
    <div
      class="flex flex-col justify-center items-end mt-10 2xl:mt-16 gap-4 w-full"
    >
      <h1 class="text-2xl font-light text-left text-[#000000]">Device</h1>

      <Button class=" bg-[#ac3434] hover:bg-[#ac3434]"
        >Choose <ChevronDownOutline
          class="w-6 h-6 ms-2 text-white dark:text-white bg-[#ac3434]"
        /></Button
      >
      <Dropdown>
        <DropdownItem
          on:click={() => {
            device.set("mac");
            height.set(1440);
            width.set(900);

            url.set("");
            capturedImage.set("");
          }}>MacBook</DropdownItem
        >
        <DropdownItem
          on:click={() => {
            device.set("iphone");
            height.set(844);
            width.set(390);
            url.set("");
            capturedImage.set("");
          }}>iPhone</DropdownItem
        >
        <!-- <DropdownItem
          on:click={() => {
            device.set("ipad");
            url.set("");
            capturedImage.set("");
          }}>iPad</DropdownItem
        > -->
      </Dropdown>
      <h1 class="text-2xl font-light text-left text-[#000000] mt-4">URL</h1>
      <div
        class="flex flex-col xl:flex-row justify-center items-end 2xl:items-center w-full gap-4 xl:gap-2"
      >
        <input
          type="url"
          placeholder="https://insight-forge.vercel.app"
          class="bg-white shadow-lg border rounded-md text-sm 2xl:text-base p-2 h-12 w-full 2xl:w-[90%] font-light text-black text-right"
          bind:value={$url}
        />
        <button
          class=" px-5 py-3 flex justify-end gap-5 h-fit w-[150px] xl:w-fit bg-[#ac3434] text-white rounded"
          on:click={downloadScreenshot}
        >
          <p class="block xl:hidden">Search</p>
          <Search />
        </button>
      </div>
      <div
        class="w-full flex flex-col justify-end items-end lg:gap-6 2xl:gap-4 mt-4 xl:mt-8 2xl:mt-10"
      >
        <button
          class=" px-5 py-3 flex justify-end gap-5 h-fit w-[150px] bg-[#ac3434] text-white rounded"
          on:click={downloadDivAsImage}
        >
          Download <Download />
        </button>
        <button
          class=" px-5 py-3 flex justify-end gap-5 h-fit w-[150px] bg-[#ac3434] text-white rounded"
          on:click={() => {
            capturedImage.set("");
            url.set("");
          }}
        >
          Reset <RotateCcw />
        </button>
      </div>
    </div>
  </div>
</div>

<!-- mobile dash -->

<div
  class="lg:hidden w-[99%] h-[82vh] flex flex-col justify-center items-center border-t-[20px] border-x-[10px] xs:border-x-[20px] sm:border-x-[30px] border-b-[0px] mb-16 shadow-2xl border-[#F7F7F7] rounded-3xl"
>
  <div
    class="w-full h-[4%] flex justify-between items-center bg-[#F7F7F7] gap-5 px-2 pb-4"
  >
    <img src="/logor.jpeg" class="h-8" alt="" />
    <h1
      class="text-xl sm:text-2xl font-bold text-center bg-gradient-to-r from-[#8e3830] via-[#e75542] to-[#d8834f] bg-clip-text text-transparent"
    >
      Dashboard
    </h1>
  </div>
  <div class="h-[70%] w-full flex justify-center items-center border">
    <div class="">
      {#if $device === "ipad"}
        <Ipad />
      {:else if $device === "iphone"}
        <Iphone />
      {:else}
        <Mac />
      {/if}
    </div>
  </div>
  <div
    class="h-[26%] w-full bg-[#F7F7F7] flex flex-col p-0 justify-evenly items-start"
  >
    <div class="flex w-full justify-start items-center gap-4">
      <h1 class="text-lg font-light text-left text-[#000000]">Device</h1>

      <Button
        class=" bg-[#ac3434] hover:bg-[#ac3434] w-fit h-fit p-2 px-4 text-sm"
        >Choose <ChevronDownOutline
          class="w-3 h-3 text-white dark:text-white bg-[#ac3434]"
        /></Button
      >
      <Dropdown>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownItem>Sign out</DropdownItem>
      </Dropdown>
    </div>

    <div class="flex w-full justify-start items-center gap-10">
      <h1 class="text-lg font-light text-left text-[#000000]">URL</h1>
      <input
        type="url"
        placeholder="https://insight-forge.vercel.app"
        class="bg-white shadow-lg rounded-md text-sm p-2 h-10 w-[90%] max-w-[450px] font-light text-black text-left"
        bind:value={$url}
      />
    </div>

    <div class="flex w-full gap-4 justify-start items-center">
      <button
        class="px-3 py-2 bg-[#ac3434] text-white rounded"
        on:click={downloadScreenshot}
      >
        <Search />
      </button>
      <button
        class="px-3 py-2 bg-[#ac3434] text-white rounded"
        on:click={downloadDivAsImage}
      >
        <Download />
      </button>
      <button
        class="px-3 py-2 bg-[#ac3434] text-white rounded"
        on:click={() => {
          capturedImage.set("");
          url.set("");
        }}
      >
        <RotateCcw />
      </button>
    </div>
  </div>
</div>
