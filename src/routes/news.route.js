const express = require('express');

const router = express.Router();
const { getNews } = require('../services/news.service');
const { APP_CONSTANTS } = require('../utils/constants');
const { validateParam } = require('../utils/helper');

/* GET news listing. */
router.get('/', async (req, res) => {
  const query = req.query.q;
  validateParam(APP_CONSTANTS.QUERY_PARAMS.QUERY, query, res);
  try {
    const result = await getNews(query);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
