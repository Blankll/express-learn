const NodeCache = require('node-cache');

const nodeCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

export const getCache = (key) => {
  return nodeCache.get(key);
};
export const setCache = (key, value, ttl) => {
  return nodeCache.set(key, value, ttl);
};
