const express = require("express");
const { register } = require("./routes/register");
const { connnection } = require("./Connection/connection");
const { UrlShorten } = require("./routes/urlShorten");
const { auth } = require("./controllers/authController");
const { login } = require("./Routes/login");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/", register);
app.use("/", login);

app.use(auth); // Users must be logged in before accessing the endpoints below

// Routes for URL shortening service
app.use("/", UrlShorten);

app.listen(8080, async () => {
  console.log("listening on port 8080");
  try {
    await connnection;
    console.log("connected to database");
  } catch (error) {
    console.log("error: ", error.message);
  }
});
