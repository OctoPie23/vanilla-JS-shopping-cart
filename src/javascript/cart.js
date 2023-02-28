let basket = JSON.parse(localStorage.getItem('data')) || [];
let label = document.getElementById('label');
let finalCart = document.getElementById('final-cart');

function itemCalculate() {
    let cartItem = document.getElementById("cartItems");
    let count = 0;
    basket.forEach((item) => (count += item.quantity));
    cartItem.textContent = count;
}

itemCalculate();

let generateCart = () => {
    if (basket.length !== 0) {
        return finalCart.innerHTML = basket.map((x) => {
            let { id, item } = x;
            let search = data.find((x) => x.id === id) || [];
            let { img, price, name } = search;
            return `
          <div class="cart-item">
            <img width="100" src=${img} alt="" />
            <div class="details">
            
              <div class="title-price-x">
                <h4 class="title-price">
                  <p>${name}</p>
                  <p class="cart-item-price">$${price}</p>
                </h4>
                <i onclick="removeItem(${id})" class="bi bi-trash2-fill"></i>
              </div>
              <div class="cart-buttons">
                <div class="buttons">
                  <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                  <div id=${id} class="quantity">${item}</div>
                  <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
              </div>
              <h3>$ ${item * price}</h3>
            
            </div>
          </div>
          `
        }).join('');
    } else {
        finalCart.innerHTML = "";
        label.innerHTML = `
        <h2>Your cart is empty!</h2>
        <a href="index.html">
            <button class="home-btn">Back to Home</button>
        </a>
        `;
    }
};

generateCart();
