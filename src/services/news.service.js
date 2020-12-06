const cache = require('../cache');
const { prepareRequestOptions, invokeApi } = require('../utils/helper');
const { API_CONSTANTS } = require('../utils/constants');

const getNews = (query, region) => {
  let params = { q: query };
  if (region) {
    params = { ...params, region };
  }

  const URL = `${API_CONSTANTS.BASE_URL}/auto-complete`;
  const OPTIONS = prepareRequestOptions(API_CONSTANTS.METHODS.GET, URL, params);

  // get value from cache if present
  const result = cache.getValue(query);

  return new Promise((resolve, reject) => {
    // check in cache first
    if (result !== undefined) {
      resolve(result);
      // regardless of above, invoke API every time so that cache is updated for that key
      invokeApi(OPTIONS, query);
    } else {
      // else invoke api
      invokeApi(OPTIONS, query, resolve, reject);
    }
  });
};

module.exports = {
  getNews,
};
