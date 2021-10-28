const express = require("express");
const router = express.Router();
const axios = require("axios");
const qs = require("qs");

require("dotenv").config();

router.get("/comics", async (req, res) => {
  try {
    const filters = {};

    if (req.query.title) {
      filters.title = req.query.title;
    }

    if (req.query.limit) {
      filters.limit = req.query.limit;
    }

    if (req.query.skip) {
      filters.skip = req.query.skip;
    }

    const comics = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${
        process.env.REACTEUR_API_KEY
      }&${qs.stringify(filters)}`
    );

    res.status(200).json(comics.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
