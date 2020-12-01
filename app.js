const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("conneted to mongo yeahh");
});

mongoose.connection.on("error", (err) => {
  console.log("err connecting", err);
});

app.use(express.json());

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});
