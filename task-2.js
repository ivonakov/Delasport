const { matchedMarkets } = require("./matched.js");

let sorted = {};

Object.keys(matchedMarkets)
  .sort(function(a, b) {
    return matchedMarkets[a].info.order - matchedMarkets[b].info.order;
  })
  .forEach(function(key) {
    sorted[key] = matchedMarkets[key];
  });

console.log("\n Task 2 sorted matchedMarkets (by info.order) : \n \n", sorted, "\n");
