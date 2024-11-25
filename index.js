require("@dotenvx/dotenvx").config();

const cors = require("cors");
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://127.0.0.1:5500", // Adjust to match your frontend's origin
    methods: ["GET", "POST"], // Allow specific HTTP methods
    allowedHeaders: ["Content-Type"], // Allow specific headers
  })
);
app.use("/image-upload", require("./image-upload"));
app.get("/", function (_req, res) {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
