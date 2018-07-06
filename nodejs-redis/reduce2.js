var reducers = {
  totalInEuros: function (state, item) {
    return state.euros += item.price * 0.8;
  },
  totalInYen: function (state, item) {
    return state.yens += item.price * 1;
  }
};

var manageReducers = function (reducers) {
  return function (state, item) {
    return Object.keys(reducers).reduce(
      function (nextState,key) { 
        reducers[key](state, item);
        return state;
      },
      {}
    );
  }
};

var bigTotalPriceReducer = manageReducers(reducers);
var initalState = {euros:0, yens:0};
var items = [{price: 10}, {price: 120}, {price: 1000}];
var totals = items.reduce(bigTotalPriceReducer, initalState);
console.log(totals);