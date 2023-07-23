const express = require("express");
// require("./config/mongoose.config");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
// const router = require("./routes/index");
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json("hello");
});

app.use(
  cors({
    // origin: "http://localhost:4000",
    origin: "*",
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// router(app);

app.listen(PORT, () => {
  console.log(`server is started add port ${PORT}`);
});
