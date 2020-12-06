const cache = require('../cache');
const { prepareRequestOptions, invokeApi } = require('../utils/helper');
const { API_CONSTANTS } = require('../utils/constants');

const getAnalysis = (symbol, region) => {
  let params = { symbol };
  if (region) {
    params = { ...params, region };
  }

  const URL = `${API_CONSTANTS.BASE_URL}/stock/v2/get-analysis`;
  const OPTIONS = prepareRequestOptions(API_CONSTANTS.METHODS.GET, URL, params);

  // get value from cache if present
  const result = cache.getValue(symbol);

  return new Promise((resolve, reject) => {
    // check in cache first
    if (result !== undefined) {
      resolve(result);
      // regardless of above, invoke API every time so that cache is updated for that key
      invokeApi(OPTIONS, symbol);
    } else {
      // else invoke api
      invokeApi(OPTIONS, symbol, resolve, reject);
    }
  });
};

module.exports = {
  getAnalysis,
};
