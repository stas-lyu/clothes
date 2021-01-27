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
            if (cart[item].name === name) {
                cart[item].count++;
                saveCart();
                return
            }
        }

        let item = new Item(name, price, count);
        cart.push(item);
        saveCart()
    };

    // Set count from item
    obj.setCountForItem = function (name, count) {
        for (let i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    };

    //Remove item from cart
    obj.removeItemFromCart = function (name) {
        for (let item in cart) {
            if (cart[item].name === name) {
                cart[item].count--;
                if (cart[item].count === 0) {
                    cart.splice(item, 1)
                }
                break;
            }
        }
        saveCart();
    };

    // Clear cart
    obj.clearCart = function () {
        cart = [];
        saveCart();
    };

    //Count cart
    obj.totalCount = function () {
        let totalCount = 0;
        for (let item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount
    };

    //Total cart

    obj.totalCart = function () {
        let totalCart = 0;
        for (let item in cart) {
            totalCart += cart[item].price * cart[item].count
        }
        return Number(totalCart.toFixed(2))
    };

    //List cart

    // List cart
    obj.listCart = function () {
        let cartCopy = [];
        for (let i in cart) {
            let item = cart[i];
            let itemCopy = {};
            for (let p in item) {
                itemCopy[p] = item[p];

            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    };

    return obj;

})();

$('.add-to-cart').click(function (event) {
    event.preventDefault();
    let name = $(this).data('name');
    let price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
});

$('.clear-cart').click(function () {
    shoppingCart.clearCart();
    displayCart();
});

function displayCart() {
    let cartArray = shoppingCart.listCart();

    let output = "";

    output += "<tr>"
    + "<td>" + cartArray[i].name + "</td>"
    + "<td>(" + cartArray[i].price + ")</td>";
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
}

let showCart = $('.show-cart');


showCart.on("click", function (event) {
    let name = $(this).data('name');
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
});

showCart.on("click", ".minus-item",
    function (event) {
        let name = $(this).data('name');
        shoppingCart.removeItemFromCart(name);
    });

