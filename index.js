require("@dotenvx/dotenvx").config();

const cors = require("cors");
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
