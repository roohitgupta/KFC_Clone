function setData(data, key) {
  return window.localStorage.setItem(key, JSON.stringify(data));
}

function getData(anda) {
  try {
    return JSON.parse(window.localStorage.getItem(anda));
  } catch {
    console.error(`Cannot found anything for key ${anda} in localstorage`);
    windows.alert(`Cannot found anything for key ${anda} in localstorage`);
    return;
  }
}

function addToCart(id) {
    console.log("added to cart");
    let cart = getData("cart");
    let count = 0;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == id) {
        cart[i].count++;
        count = cart[i].count;
        console.log("count", count);
      }
    }
    if (count == 0) {
      cart.push({
        id,
        count: 1,
      });
      count = 1;
    }
    setData(cart, "cart");
  }
  
  function removeFromCart(id) {
    console.log("removing from cart");
    let cart = getData("cart");
    let count = -1;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == id) {
        cart[i].count--;
        count = cart[i].count;
      }
    }
    if (count == 0) {
      cart.pop({
        id,
        count: 0,
      });
    }
    setData(cart, "cart");
  }


  function getItemsById() {
    let items = getData("items");
    let itemsById = {};
    for (let i = 0; i < items.length; i++) {
      let idTmp = items[i].id;
      delete items[i].id;
      itemsById[idTmp] = items[i];
    }
    return itemsById;
  }      
  
  function getCartProducts() {
    let cart = getData("cart");
    let cartProducts = [];
    let products = getItemsById()
    for (let i = 0; i < cart.length; i++) {
      pid = cart[i].id
      cartProducts.push({
        id: pid,
        count: cart[i].count,
        ...products[pid],
      });
    }
    return cartProducts;
  }
  
  function calculatePrices() {
        
    let cartItems = getCartProducts();
    total = 0;
    savings = 0;
    for (let i=0; i<cartItems.length; i++){
        const item = cartItems[i];
        total += Number(item.price)*Number(item.count);
    }
    savings = Math.floor(total*0.1);
    return [total, savings];
}


let userr = getData('user');
if (userr){
    document.getElementById('sign-in').innerText = userr.nameData;
} else {
    document.getElementById('sign-in').innerText = "Sign In";
}

let [totallPrice, savedd] = calculatePrices();
document.getElementsByClassName('nav-item-2')[0].innerHTML = "$ " + totallPrice;