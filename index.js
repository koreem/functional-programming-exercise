const user = {
  name: "Bruce",
  active: true,
  cart: [],
  purchases: [],
};

const history = [];

const compose = (f, g) => (...args) => f(g(...args)); // compose is often available trough a library (https://ramdajs.com/docs/#compose)
const purchaseItem = (...fns) => fns.reduce(compose); // will loop and execute each function

function addItemToCart(user, item) {
  history.push(user);
  const updatedCart = user.cart.concat(item);
  return { ...user, cart: updatedCart };
}

function applyTaxToItems(user) {
  const { cart } = user;
  const taxRate = 1.21;
  const updatedCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  return { ...user, cart: updatedCart };
}

function buyItem(user) {
  history.push(user);
  return { ...user, purchases: user.cart };
}
function emptyUserCart(user) {
  history.push(user);
  return { ...user, cart: [] };
}

console.log(
  purchaseItem(
    emptyUserCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
  )(user, { name: "laptop", price: 60 })
);

console.log(history);
