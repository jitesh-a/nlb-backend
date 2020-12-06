const express = require('express');

const router = express.Router();
const { getAnalysis } = require('../services/analysis.service');
const { APP_CONSTANTS } = require('../utils/constants');
const { validateParam } = require('../utils/helper');

/* GET Analysis listing. */
router.get('/', async (req, res) => {
  const { symbol } = req.query;
  validateParam(APP_CONSTANTS.QUERY_PARAMS.SYMBOL, symbol, res);
  try {
    const result = await getAnalysis(symbol);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
