let categoryNews = document.querySelector('#newItems .multiple-items');
let modal = document.getElementById("cart");
let span_close = document.getElementsByClassName("close_modal_window")[0];
let orderBtnOrderForm = document.getElementById('order');
let cancelBtnOrderForm = document.getElementById('cansel');
let addToCart = document.querySelector('#addToCart');
let productDetailsModal = document.querySelector('#product_modal_window');

let spanCloseProductDetailsModal = document.querySelector('.close_modal_window_product');

span_close.onclick = function () {
    let blockRemove = document.querySelector('.blockItem');
    blockRemove.remove();
    modal.style.display = "none";
};

orderBtnOrderForm.onclick = function (e) {
    e.preventDefault();
};

cancelBtnOrderForm.onclick = function () {
    let blockRemove = document.querySelector('.blockItem');
    blockRemove.remove();
    modal.style.display = "none";
};

window.onclick = function (event) {
    let blockRemove = document.querySelector('.blockItem');
    if (event.target == modal) {
        blockRemove.remove();
        modal.style.display = "none";
    }
    if (event.target == productDetailsModal) {
        if (blockRemove) {
            blockRemove.remove();
        }
        productDetailsModal.style.display = "none";
    }
};


spanCloseProductDetailsModal.onclick = function () {
    productDetailsModal.style.display = "none";
};

axios
    .get("https://katecod88.github.io/data/db.json")
    .then(data => {
        return data.data
    })
    .then((data) => {
        return data.filter(item => {
            return item.categories === 'watch';
        });
    })
    .then((data) => {
        data.map((item => {
            let card = createNewCard(item);
            categoryNews.append(card);

        }));
        createProductDetailsModal();
        return data;
    })
    .then((data) => {
        $(document).ready(function () {

            initSlick($('#newItems .multiple-items'));

            let products = document.querySelector("#products .allNewProducts");
            let recommend = document.querySelector('#recommend .allNewProducts');
            let sale = document.querySelector('#sale .allNewProducts');

            function changeLink(link, value) {
                let windowWidth = document.documentElement.clientWidth;

                if (windowWidth <= 1199) {
                    link.innerHTML = `<svg
             xmlns="http://www.w3.org/2000/svg"
             width="9px" height="24px">
            <image  x="0px" y="0px" width="9px" height="24px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAYCAMAAAAfxSccAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAgVBMVEVGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6v////dyEg5AAAAKXRSTlMAPK9BxMIGYWYK1uQabJcT4vk7gcAd7WSR4xgn9Z85NLa3F8EH5WfDQjL7mrQAAAABYktHRCpTvtSeAAAAB3RJTUUH5QEHETcgnGd4IwAAAHNJREFUCNdVj1kSglAQA1lEUXEBNwQV2e37X9AnAaw3X12ZykziuJ7vaBYES9EKQtF6wzYS7mAvOhyJE+EJzjJdrnCTmMI9Gyh/QCrxCfFroMKI75lKe/t3/K5U9mXzrW7sBHMqk7SNpvTd1KgfG7neR/AFKBcLgi3YMvMAAAAASUVORK5CYII=" />
            </svg>`
                } else {
                    link.innerHTML = value
                }
            }

            changeArrow();
            changeLink(products, `Все новинки`);
            changeLink(recommend, `Все рекомендации`);
            changeLink(sale, `Все товары`);
            $(window).on('resize', () => changeArrow(), changeLink(products, `Все новинки`), changeLink(recommend, `Все рекомендации`), changeLink(sale, `Все товары`));
        });

        return data;
    })
    .then(() => {
        // clearCart : Function
        // countCart : Function
        // totalCart : Function
        // listCart : Function
        // saveCart : Function
        // loadCart : Function

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


            //Remove all items from cart
            obj.removeItemFromCartAll = function (name) {
                for (let item in cart) {
                    if (cart[item].name === name) {
                        cart.splice(item, 1);
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
            document.querySelector('#product_modal_window').style.display = 'none';
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
            for (let i in cartArray) {
                output += "<tr>" +
                    "<td>" + cartArray[i].name + "</td>" +
                    "<td>(" + cartArray[i].price + ")</td>" +
                    "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>" +
                    "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>" +
                    "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>" +
                    "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>" +
                    " = " +
                    "<td>" + cartArray[i].total + "</td>" +
                    "</tr>";
            }
            $('.show-cart').html(output);
            $('.total-cart').html(shoppingCart.totalCart());
            $('.total-count').html(shoppingCart.totalCount());
        }

        let showCart = $('.show-cart');

        //Delete item button
        showCart.on("click", ".delete-item", function (event) {
            let name = $(this).data('name');
            shoppingCart.removeItemFromCartAll(name);
            displayCart();
        });

        //-1
        showCart.on("click", ".minus-item",
            function (event) {
                let name = $(this).data('name');
                shoppingCart.removeItemFromCart(name);
                displayCart();
            });

        //+1
        showCart.on("click", ".plus-item",
            function (event) {
                let name = $(this).data('name');
                shoppingCart.addItemToCart(name);
                displayCart();
            });

        //Item count input
        $('.show-cart').on("change", ".item-count", function (event) {
            let name = $(this).data('name');
            let count = Number($(this).val());
            shoppingCart.setCountForItem(name, count);
            displayCart();
        });

        displayCart();
    })

    .catch(err => {
        console.log(err)
        /*Do something with error, e.g. show error to user*/
    });


export function createNewCard(item) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.addEventListener('click', () => {
        showProductDetails(item);
    });
    let des = document.createElement('div');
    let title = document.createElement('h3');
    let imgWrapper = document.createElement('div');
    let priceBlock = document.createElement('div');
    let currentPrice = document.createElement('span');
    let oldPrice = document.createElement('span');
    let price = document.createElement('span');
    let footerItem = document.createElement('div');
    let btnBuy = document.createElement('button');
    let readMore = document.createElement('a');
    div.className = 'slider-item';
    imgWrapper.className = 'img_wrapper';
    imgWrapper.append(img);
    img.src = item.imageUrls[0].split(',')[0];
    div.append(imgWrapper);
    des.className = 'description';
    div.append(des);
    title.innerHTML = item.name;
    addToCart.dataset.name = item.name;
    addToCart.dataset.price = item.currentPrice;
    des.append(title);
    priceBlock.className = 'priceBlock';
    price.className = 'price';
    price.innerHTML = 'Цена:';
    priceBlock.append(price);
    currentPrice.innerHTML = item.currentPrice;
    currentPrice.dataset.price = item.currentPrice;
    priceBlock.append(currentPrice);
    oldPrice.innerHTML = item.currentPrice * 1.2;
    priceBlock.append(oldPrice);
    div.append(priceBlock);
    footerItem.className = 'footerItem';
    btnBuy.className = 'btn_by';
    btnBuy.addEventListener('click', () => {
        createOrderFormItem(item);
        /////
        showOrderForm(item);


    });
    btnBuy.innerHTML = "<span class=\"bucketIcon\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"17px\"><path fill-rule=\"evenodd\" fill=\"rgb(255, 255, 255)\" d=\"M19.408,6.459 L17.412,12.358 C17.412,12.358 17.249,13.234 16.405,13.234 L6.334,13.234 C5.330,13.234 5.287,12.134 5.287,12.134 L4.025,2.705 L0.783,1.883 C0.295,1.759 0.000,1.264 0.124,0.779 C0.249,0.293 0.745,-0.000 1.233,0.124 L5.077,1.100 C5.440,1.192 5.709,1.495 5.756,1.865 L6.333,6.537 L6.938,11.333 L16.049,11.333 L16.523,9.744 L8.885,9.741 C8.468,9.741 8.130,9.405 8.130,8.990 C8.130,8.575 8.468,8.239 8.885,8.239 L16.970,8.237 L17.475,6.538 L9.522,6.539 C9.073,6.539 8.709,6.176 8.709,5.728 C8.709,5.281 9.073,4.919 9.522,4.919 L18.511,4.920 C20.000,4.920 19.408,6.458 19.408,6.459 ZM7.353,13.771 C8.249,13.771 8.976,14.494 8.976,15.385 C8.976,16.277 8.249,17.000 7.353,17.000 C6.457,17.000 5.730,16.277 5.730,15.385 C5.730,14.494 6.457,13.771 7.353,13.771 ZM14.435,13.771 C15.330,13.771 16.057,14.494 16.057,15.385 C16.057,16.277 15.330,17.000 14.435,17.000 C13.538,17.000 12.812,16.277 12.812,15.385 C12.812,14.494 13.538,13.771 14.435,13.771 Z\"/></svg></span> Купить";
    footerItem.prepend(btnBuy);
    readMore.className = 'detail';
    readMore.addEventListener('click', () => {
        showProductDetails(item);
    });
    readMore.innerText = 'Подробнее';
    footerItem.append(readMore);
    div.append(footerItem);
    btnBuy.id = item.id;

    return div;
}

export function initSlick(id) {
    id.slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 800,
        nextArrow: `<div class="slick-custom-arrow slick-custom-arrow-left">
        </div>`,
        prevArrow: `<div class="slick-custom-arrow slick-custom-arrow-right">
        </div>`,
        responsive: [{
            breakpoint: 979,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
            {
                breakpoint: 749,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}

export function changeArrow() {
    let nextArrow = $('.slick-custom-arrow-left');
    let prevArrow = $('.slick-custom-arrow-right');
    let windowWidth = document.documentElement.clientWidth;

    for (let i = 0; i < nextArrow.length; i++) {
        if (windowWidth <= 1199) {
            nextArrow[i].innerHTML = `<i class="fas fa-angle-left"></i>`
        } else nextArrow[i].innerHTML = `<svg 
       xmlns="http://www.w3.org/2000/svg"
       width="16px" height="44px">
      <path fill-rule="evenodd"  fill="rgb(255, 88, 22)"
       d="M16.000,41.944 L12.610,44.000 L0.000,22.221 L1.159,22.000 L0.000,21.779 L12.610,-0.000 L16.000,2.056 L7.006,22.000 L16.000,41.944 Z"/>
      </svg>`
    }

    for (let j = 0; j < prevArrow.length; j++) {
        if (windowWidth <= 1199) {
            prevArrow[j].innerHTML = `<i class="fas fa-angle-right"></i>`
        } else prevArrow[j].innerHTML = `<svg 
       xmlns="http://www.w3.org/2000/svg"
       width="16px" height="44px">
      <path fill-rule="evenodd"  fill="rgb(255, 88, 22)"
       d="M16.000,22.221 L3.390,44.000 L0.000,41.944 L8.994,22.000 L0.000,2.056 L3.390,-0.000 L16.000,21.779 L14.841,22.000 L16.000,22.221 Z"/>
      </svg>`
    }
}


export function showOrderForm() {
    modal.style.display = "block";
}

function createOrderFormItem(item) {
    let showOrderItem = document.querySelector('.showOrderItem');
    let blockItem = document.createElement('div');
    blockItem.className = 'blockItem';
    showOrderItem.append(blockItem);

    let divShowImg = document.createElement('div');
    divShowImg.className = 'divShowImg';
    let imgShowItem = document.createElement('img');
    imgShowItem.className = 'imgShowItem';
    imgShowItem.src = item.imageUrls[0].split(',')[0];
    divShowImg.append(imgShowItem);
    blockItem.append(divShowImg);

    let divItemDescription = document.createElement('div');
    blockItem.append(divItemDescription);
    divItemDescription.className = 'divItemDescription';

    let ItemName = document.createElement('p');
    ItemName.className = 'ItemName';
    ItemName.innerHTML = item.name;
    divItemDescription.append(ItemName);

    let itemStar = document.createElement('p');
    itemStar.className = 'itemStar';
    for (let i = 0; i <= 3; i++) {
        itemStar.innerHTML += '<i class="fas fa-star"></i>';
    }
    itemStar.innerHTML += '<i class="far fa-star"></i>';
    divItemDescription.append(itemStar);

    let itemPrice = document.createElement('p');
    itemPrice.className = 'itemPrice';
    itemPrice.innerHTML = `₴${item.currentPrice} грн`;
    divItemDescription.append(itemPrice);

    let itemParamets = document.createElement('p');
    itemParamets.className = 'itemParamets';
    itemParamets.innerHTML = item.parametrs[0];
    divItemDescription.append(itemParamets);

    let itemDescription = document.createElement('p');
    itemDescription.className = 'itemDescription';
    itemDescription.innerHTML = item.description[0];
    divItemDescription.append(itemDescription);

    let itemQuantity = document.createElement('div');
    itemQuantity.className = 'itemQuantity';
    itemQuantity.innerHTML = '<b>Quantity:</b> ';
    let inputTextItem = document.createElement('input');
    inputTextItem.className = 'inputTextItem';
    inputTextItem.type = 'number';
    let placeholder = 5;
    inputTextItem.placeholder = placeholder;
    inputTextItem.setAttribute("disabled", "disabled");

    let buttonPlusItem = document.createElement('button');
    buttonPlusItem.className = 'buttonPlusItem plus-item';
    buttonPlusItem.innerHTML = '+';

    let buttonMinusItem = document.createElement('button');
    buttonMinusItem.className = 'buttonMinusItem minus-item';
    buttonMinusItem.innerHTML = '-';

    itemQuantity.append(inputTextItem);
    itemQuantity.append(buttonPlusItem);
    itemQuantity.append(buttonMinusItem);
    divItemDescription.append(itemQuantity);

    buttonPlusItem.addEventListener('click', function (e) {
        e.preventDefault();
        placeholder++;
        inputTextItem.placeholder = placeholder
    });
    buttonMinusItem.addEventListener('click', function (e) {
        e.preventDefault();
        if (placeholder == 0) {
            return;
        }
        placeholder--;
        inputTextItem.placeholder = placeholder
    });
}

function showProductDetails(item) {
    document.querySelector('.heading').innerHTML = item.name;
    document.querySelector('.photoImg').src = item.imageUrls[0].split(',')[0];
    document.querySelector('.paragBrand').innerHTML = `<b>Brand:</b> <a href="#">${item.brand}</a>`;
    document.querySelector('.productColor').innerHTML = `<b>Color:</b> ${item.color}`;
    document.querySelector('.descriptionProduct').innerHTML = `<b>Description:</b> ${item.description}`;
    document.querySelector('.costPrice').innerHTML = `CurrentPrice: <span class="spanText">${item.currentPrice * 1.2}</span> <b>${item.currentPrice}</b>`
    document.querySelector('.add-to-cart').dataset.name = item.name;
    document.querySelector('.add-to-cart').dataset.price = item.currentPrice;

    productDetailsModal.style.display = 'block';
}

function createProductDetailsModal() {
    let modal_content = document.querySelector('.modal_content_product');
    let divProduct = document.createElement('div');
    divProduct.innerHTML = '';
    divProduct.className = 'divProduct';
    let divPhoto = document.createElement('div');
    divPhoto.className = 'divPhoto';
    let divContent = document.createElement('div');
    divContent.className = 'divContent';
    modal_content.append(divProduct);
    divProduct.append(divPhoto);
    divProduct.append(divContent);
    let photoImg = document.createElement('img');
    photoImg.className = 'photoImg';

    divPhoto.append(photoImg);
    let h2 = document.createElement('h2');
    h2.className = 'heading';
    divContent.append(h2);

    let costPrice = document.createElement('p');
    costPrice.className = 'costPrice';
    divContent.append(costPrice);

    let btnOrder = document.createElement('button');
    btnOrder.className = 'btnOrder add-to-cart';

    btnOrder.innerHTML = 'Заказать';
    divContent.append(btnOrder);
    let paragBrend = document.createElement('p');
    paragBrend.className = 'paragBrand';
    divContent.append(paragBrend);

    let productColor = document.createElement('p');
    productColor.className = 'productColor';
    divContent.append(productColor);

    let description = document.createElement('p');
    description.className = 'descriptionProduct';
    divContent.append(description);
}

$('#sliderOne').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },

        768: {
            items: 4,
            nav: false
        },

        1024: {
            items: 6,
            nav: true,
            loop: false

        }
    }
});
