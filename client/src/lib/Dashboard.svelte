<script>
  import html2canvas from "html2canvas";
  import Mac from "./Mac.svelte";
  import axios from "axios";
  import { capturedImage, url } from "../stores/store";
  import { Search, Download, RotateCcw, House } from "lucide-svelte";
  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  const downloadScreenshot = async () => {
    try {
      const response = await axios.get(
        `${SERVER_URL}/api/screenshot?resX=1440&resY=900&outFormat=jpg&waitTime=200&isFullPage=false&dismissModals=false&url=${$url}`,

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
  class="w-[90%] h-[82vh] flex justify-center items-center border-t-[30px] border-l-[0px] border-r-[0px] border-b-[30px] mb-16 shadow-2xl border-[#F7F7F7] rounded-3xl"
>
  <div
    class="w-[4%] h-full flex flex-col justify-start items-center bg-[#F7F7F7] gap-5"
  >
    <img src="/logor.jpeg" class="h-12 mt-4" alt="" />
    <House size={30} />
  </div>
  <div class="w-[74%] h-full flex justify-center items-center border">
    <div class=""><Mac /></div>
  </div>
  <div
    class="w-[22%] h-full bg-[#F7F7F7] flex flex-col p-7 justify-start items-end"
  >
    <h1
      class="text-5xl font-bold text-center bg-gradient-to-r from-[#8e3830] via-[#e75542] to-[#d8834f] bg-clip-text text-transparent"
    >
      Dashboard
    </h1>
    <div class="flex flex-col justify-center items-end mt-16 gap-4 w-full">
      <h1 class="text-2xl font-light text-left text-[#000000]">Device</h1>

      <Button class=" bg-[#ac3434] hover:bg-[#ac3434]"
        >Choose <ChevronDownOutline
          class="w-6 h-6 ms-2 text-white dark:text-white bg-[#ac3434]"
        /></Button
      >
      <Dropdown>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownItem>Sign out</DropdownItem>
      </Dropdown>
      <h1 class="text-2xl font-light text-left text-[#000000] mt-4">URL</h1>
      <div class="flex justify-center items-center w-full gap-2">
        <input
          type="url"
          placeholder="https://insight-forge.vercel.app"
          class="bg-white shadow-lg border rounded-md text-md p-2 h-10 w-[90%] font-light text-black text-right"
          bind:value={$url}
        />
        <button
          class="px-4 py-2 bg-[#ac3434] text-white rounded"
          on:click={downloadScreenshot}
        >
          <Search />
        </button>
      </div>
      <div class="w-full flex justify-end gap-4 mt-8">
        <button
          class=" px-5 py-3 flex gap-3 h-fit bg-[#ac3434] text-white rounded"
          on:click={downloadDivAsImage}
        >
          Download <Download />
        </button>
        <button
          class=" px-5 py-3 flex gap-3 h-fit bg-[#ac3434] text-white rounded"
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
