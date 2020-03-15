const { marketCategories, markets } = require("./data.js");
let matchedMarkets = {};

marketCategories.rules.forEach(element => {
  if (markets.hasOwnProperty(element.key)) {
    matchedMarkets[element.key] = markets[element.key];
  }
});

// console.log('\n matchedMarkets: \n \n', matchedMarkets, '\n');

module.exports = {
  matchedMarkets: matchedMarkets
};
