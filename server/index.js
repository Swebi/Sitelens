const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/api/screenshot", async (req, res) => {
  try {
    const { resX, resY, outFormat, waitTime, isFullPage, dismissModals, url } =
      req.query;

    const apiUrl = `${process.env.API_URL}/api/screenshot?resX=${resX}&resY=${resY}&outFormat=${outFormat}&waitTime=${waitTime}&isFullPage=${isFullPage}&dismissModals=${dismissModals}&url=${url}`;

    const response = await axios.get(apiUrl, { responseType: "arraybuffer" });

    res.send(response.data);
  } catch (error) {
    console.error("Error capturing screenshot:", error);
    res.status(500).send("Error capturing screenshot");
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
