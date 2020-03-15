### Matching

```bash
npm run task-1
```

### Sorting

```bash
npm run task-2
```

### Running it in the console

Open the file  `preview.html` in your browser and look in the console.

## task-1

```node
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

```
## task-2

```node
let sorted = {};
// Check if matchedMarkets is empty
if (Object.entries(matchedMarkets).length === 0) {
  match();
}

Object.keys(matchedMarkets)
  .sort(function(a, b) {
    return matchedMarkets[a].info.order - matchedMarkets[b].info.order;
  })
  .forEach(function(key) {
    sorted[key] = matchedMarkets[key];
  });

```