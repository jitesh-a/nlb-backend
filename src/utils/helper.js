const axios = require('axios').default;
const cache = require('../cache');

const { API_CONSTANTS } = require('./constants');

const prepareRequestOptions = (method, url, params, headers, body) => ({
  method,
  url,
  params,
  headers: {
    ...API_CONSTANTS.HEADERS,
    ...headers,
  },
  body,
  // getRequestBody(body)
});

const invokeApi = (options, cacheKey, cbResolve, cbReject) => {
  axios.request(options)
    .then((response) => {
      const { data } = response;
      if (cbResolve !== undefined) {
        // resolve
        cbResolve(data);
      }
      cache.setValue(cacheKey, data);
    })
    .catch((error) => {
      // reject
      if (cbReject !== undefined) {
        // resolve
        cbReject(error);
      }
    });
};

const validateParam = (key, value, res) => {
  // assuming max length allowed as 60
  if (value === null || value === undefined || value.length > 60) {
    const MESSAGE = `Missing/Invalid value for query param ${key}`;
    res.status(400).send(MESSAGE);
  }
};

module.exports = {
  prepareRequestOptions,
  invokeApi,
  validateParam,
};
