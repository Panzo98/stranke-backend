const express = require("express");
const cors = require("cors");
require("dotenv/config");

const app = express();

app.options("*", cors());

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
