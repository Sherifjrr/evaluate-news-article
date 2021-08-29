const dotenv = require("dotenv");
dotenv.config();

var path = require("path");
const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const mockAPIResponse = require("./mockAPI.js");

var app = express();

const apiURL = "https://api.meaningcloud.com/sentiment-2.1";
const apiKey = process.env.API_KEY;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("dist"));

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

app.post("/add-url", async (req, res) => {
  const { articleUrl } = req.body;
  const articleCheck = `${apiURL}?key=${apiKey}$url=${articleUrl}$lang=en`;
  fetch(articleCheck)
    .then((response) => response.json())
    .then((data) => res.send(data))
    .catch((error) => console.log(error));
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.listen(8081, (error) => {
  if (error) throw new Error(error);
  console.log(`Server listening on port 8081!`);
});

module.exports = {
  app,
};
