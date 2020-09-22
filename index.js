const user = {
  name: "Bruce",
  active: true,
  cart: [],
  purchases: [],
};

const compose = (f, g) => (...args) => f(g(...args)); // compose is often available trough a library (https://ramdajs.com/docs/#compose)
const purchaseItem = (...fns) => fns.reduce(compose); // will loop and execute each function

function addItemToCart(user, item) {
  // TODO
}

function applyTaxToItems(user) {
  // TODO
}

function buyItem(user) {
  // TODO
}
function emptyUserCart(user) {
  // TODO
}

console.log(
  purchaseItem(
    emptyUserCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
  )(user, { name: "laptop", price: 60 })
);
