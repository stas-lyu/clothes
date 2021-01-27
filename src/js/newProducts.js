let categoryNews = document.querySelector('#newItems .multiple-items');
let modal = document.getElementById("my_modal");

let span_close = document.getElementsByClassName("close_modal_window")[0];
let orderBtnOrderForm = document.getElementById('order');
let cancelBtnOrderForm = document.getElementById('cansel');

let productDetailsModal = document.querySelector('#product_modal_window');

let spanCloseProductDetailsModal = document.querySelector('.close_modal_window_product');

span_close.onclick = function () {
    modal.style.display = "none";
}

orderBtnOrderForm.onclick = function (e) {
    e.preventDefault();
}

cancelBtnOrderForm.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == productDetailsModal) {
        productDetailsModal.style.display = "none";
    }
}


spanCloseProductDetailsModal.onclick = function () {
    productDetailsModal.style.display = "none";
}



axios
    .get("/products")
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

            //             function changeLink(link, value) {
            //                 let windowWidth = document.documentElement.clientWidth;
            //
            //                 if (windowWidth <= 1199) {
            //                     link.innerHTML = `<svg
            //  xmlns="http://www.w3.org/2000/svg"
            //  width="9px" height="24px">
            // <image  x="0px" y="0px" width="9px" height="24px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAYCAMAAAAfxSccAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAgVBMVEVGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6v////dyEg5AAAAKXRSTlMAPK9BxMIGYWYK1uQabJcT4vk7gcAd7WSR4xgn9Z85NLa3F8EH5WfDQjL7mrQAAAABYktHRCpTvtSeAAAAB3RJTUUH5QEHETcgnGd4IwAAAHNJREFUCNdVj1kSglAQA1lEUXEBNwQV2e37X9AnAaw3X12ZykziuJ7vaBYES9EKQtF6wzYS7mAvOhyJE+EJzjJdrnCTmMI9Gyh/QCrxCfFroMKI75lKe/t3/K5U9mXzrW7sBHMqk7SNpvTd1KgfG7neR/AFKBcLgi3YMvMAAAAASUVORK5CYII=" />
            // </svg>`
            //                 } else {
            //                     link.innerHTML = value
            //                 }
            //             }

            changeArrow();
            // changeLink(products, `Все новинки`);
            // changeLink(recommend, `Все рекомендации`);
            // changeLink(sale, `Все товары`);
            // $(window).on('resize', () => changeArrow(), changeLink(products, `Все новинки`), changeLink(recommend, `Все рекомендации`), changeLink(sale, `Все товары`));
        });

        return data;
    })
    // .then((data) => {
    //     // item_modal_window(data);
    // })
    // .then(() => {
    //     // item_Prodocuts_Modal_Window(data);
    // })
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

    des.append(title);
    priceBlock.className = 'priceBlock';
    price.className = 'price';
    price.innerHTML = 'Цена:';
    priceBlock.append(price);
    currentPrice.innerHTML = item.currentPrice;
    priceBlock.append(currentPrice);
    oldPrice.innerHTML = item.currentPrice * 1.2;
    priceBlock.append(oldPrice);
    div.append(priceBlock);
    footerItem.className = 'footerItem';
    btnBuy.className = 'btn_by';
    btnBuy.addEventListener('click', () => {
        showOrderForm();
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

function showProductDetails(item) {
    document.querySelector('.heading').innerHTML = item.name;
    document.querySelector('.photoImg').src = item.imageUrls[0].split(',')[0];
    document.querySelector('.paragBrand').innerHTML = `<b>Brand:</b> <a href="#">${item.brand}</a>`;
    document.querySelector('.productColor').innerHTML = `<b>Color:</b> ${item.color}`;
    document.querySelector('.descriptionProduct').innerHTML = `<b>Description:</b> ${item.description}`;
    document.querySelector('.costPrice').innerHTML = `CurrentPrice: <span class="spanText">${item.currentPrice * 1.2}</span> <b>${item.currentPrice}</b>`

    productDetailsModal.style.display = 'block';
}

function createProductDetailsModal() {
    let modal_content = document.querySelector('.modal_content_product');

    let divProduct = document.createElement('div');
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
    let paragBrend = document.createElement('p');
    paragBrend.className = 'paragBrand';

    divContent.append(paragBrend);
    let productColor = document.createElement('p');
    productColor.className = 'productColor';

    divContent.append(productColor);
    let description = document.createElement('p');
    description.className = 'descriptionProduct';

    divContent.append(description);
    let costPrice = document.createElement('p');
    costPrice.className = 'costPrice';

    divContent.append(costPrice);

    let btnOrder = document.createElement('button');
    btnOrder.className = 'btnOrder';
    btnOrder.addEventListener('click', () => {
        document.querySelector('#product_modal_window').style.display = 'none';
        // showOrderForm();
    });
    btnOrder.innerHTML = 'Заказать';
    divContent.append(btnOrder);
}