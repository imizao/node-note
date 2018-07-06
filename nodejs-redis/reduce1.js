var items = [10, 120, 1000];

var reducer = function (sumSoFar, item) { 
  sumSoFar.sum = sumSoFar.sum + item;  
  return sumSoFar;
};

var total = items.reduce(reducer, {sum:0});

console.log(total);