let shoppingCart = (function () {
    let cart = [];
    // construcor
    function Item(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count
    }
    //save cart
    function saveCart() {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart))
    }

    //loadCart
    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }

    if (sessionStorage.getItem('shoppingCart') != null) {
        loadCart();
    }
    let obj = {};

    //add to  cart

    obj.addItemToCart = function (name, price, count) {
        for (let item in cart) {
            if (cart[item].name === name) {
                cart[item].count++;
                saveCart();
                return
            }
        }
        let item = new Item(name, price, count);
        cart.push(item);
        saveCart();
    }

    //remove from cart
    obj.removeItemFromCart = function (name) {
        for (let item in cart) {
            if (cart[item].name === name) {
                cart[item].count--;
                if (cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    //clear cart
    obj.clearCart = function () {
        cart = [];
        saveCart();
    }

    //countCart
    obj.countCart = function () {
        let countCart = 0;
        for (let item in cart) {
            countCart += cart[item].count;
        }
        return countCart;
    }
    //total cart
    obj.totalCart = function () {
        let totalCart = 0;
        for (let item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2)); //преобразует в число с десятичными
    }

    //list cart
    return obj;
})();