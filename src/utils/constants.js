const API_CONSTANTS = {
  METHODS: {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
  },
  HEADERS: {
    'x-rapidapi-key': 'd2ef1bc74emshc328bb2ddb5eb0ap12c961jsn65ef49fe3a4f',
    'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
  },
  BASE_URL: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com',
};

const APP_CONSTANTS = {
  QUERY_PARAMS: {
    SYMBOL: 'symbol',
    QUERY: 'q',
  },
};

module.exports = {
  API_CONSTANTS,
  APP_CONSTANTS,
};
