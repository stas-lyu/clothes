let shoppingCart = (function () {

    let cart = [];

    //Constructor

    function Item(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count
    }

    //Save cart

    function saveCart() {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart))
    }

    //Load cart

    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }

    if (sessionStorage.getItem('shoppingCart') != null) {
        loadCart()
    }
    let obj = {};

    //Add to cart

    obj.addItemToCart = function (name, price, count) {
        for (let item in cart) {
            if(cart[item].name === name) {
                cart[item].count ++;
                saveCart();
                return
            }
        }

        let item = new Item(name, price, count);
        cart.push(item);
        saveCart()
    };

    //Remove item from cart
    obj.removeItemFromCart = function (name) {
        for (let item in cart) {
            if(cart[item].name === name) {
                cart[item].count --;
            }
        }
    }
});