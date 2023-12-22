const express = require("express");
const { register } = require("./routes/register");
const { connnection } = require("./Connection/connection");
const { UrlShorten } = require("./routes/urlShorten");
const { auth } = require("./controllers/authController");
const { login } = require("./routes/login");


require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/", register);
app.use("/", login);


// Routes for URL shortening service
app.use("/", UrlShorten);

app.listen(process.env.PORT, async () => {
  console.log(`listening on port ${process.env.PORT}`);
  try {
    await connnection;
    console.log("connected to database");
  } catch (error) {
    console.log("error: ", error.message);
  }
});
