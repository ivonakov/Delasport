const { marketCategories, markets } = require("./data.js");
let matchedMarkets = {};

const categories = marketCategories.rules.map(e => {
  return e.key;
});

Object.entries(markets).forEach(entry => {
  let key = entry[0];
  let value = entry[1];

  if (categories.includes(key)) {
    matchedMarkets[key] = value;
  }
});

console.log("\n Task 1 matchedMarkets: \n \n", matchedMarkets, "\n");
