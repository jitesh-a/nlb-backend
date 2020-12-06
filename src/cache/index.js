/* Node cache (in memory) for improving performace - can be replaced with redis */
const NodeCache = require('node-cache');

// review TTL once
const cache = new NodeCache({ stdTTL: 10000, checkperiod: 12000 });

const getCache = () => cache;

const setValue = (key, value) => cache.set(key, value, 10000);

const getValue = (key) => cache.get(key);

module.exports = {
  getCache,
  setValue,
  getValue,
};
