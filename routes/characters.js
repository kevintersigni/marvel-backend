const express = require("express");
const router = express.Router();
const axios = require("axios");
const qs = require("qs");

require("dotenv").config();

router.get("/characters", async (req, res) => {
  try {
    const filters = {};

    if (req.query.name) {
      filters.name = req.query.name;
    }

    if (req.query.limit) {
      filters.limit = req.query.limit;
    }

    if (req.query.skip) {
      filters.skip = req.query.skip;
    }

    const characters = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${
        process.env.REACTEUR_API_KEY
      }&${qs.stringify(filters)}`
    );
    res.json(characters.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});

router.get("/character/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const id = req.params.id;

    const character = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${id}?apiKey=${process.env.REACTEUR_API_KEY}`
    );
    res.json(character.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
