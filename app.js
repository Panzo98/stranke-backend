const express = require("express");
const cors = require("cors");
require("dotenv/config");
const app = express();

const userRoutes = require("./routes/userRoutes");
const mjestaRoutes = require("./routes/mjestaRoutes");

app.use(express.json());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1", mjestaRoutes);

app.options("*", cors());

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
