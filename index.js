const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config();
app.use(cors());

const charactersRoutes = require("./routes/characters");
const comicsRoutes = require("./routes/comics");

app.use(charactersRoutes);
app.use(comicsRoutes);

app.get("/", (req, res) => {
  res.json("Bienvenue sur l'API Marvel de Kevin");
});

app.all("*", (req, res) => {
  res.status(404).send("Page introuvable");
});

app.listen(process.env.PORT, () => {
  console.log("Server has started");
});
