/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/StylemodalWindow.scss":
/*!****************************************!*\
  !*** ./src/scss/StylemodalWindow.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/scss/StylemodalWindow.scss?");

/***/ }),

/***/ "./src/scss/alex.scss":
/*!****************************!*\
  !*** ./src/scss/alex.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/scss/alex.scss?");

/***/ }),

/***/ "./src/scss/fonts.scss":
/*!*****************************!*\
  !*** ./src/scss/fonts.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/scss/fonts.scss?");

/***/ }),

/***/ "./src/scss/search.scss":
/*!******************************!*\
  !*** ./src/scss/search.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/scss/search.scss?");

/***/ }),

/***/ "./src/scss/timer.scss":
/*!*****************************!*\
  !*** ./src/scss/timer.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/scss/timer.scss?");

/***/ }),

/***/ "./src/scss/typography.scss":
/*!**********************************!*\
  !*** ./src/scss/typography.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/scss/typography.scss?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_modalWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/modalWindow.js */ \"./src/js/modalWindow.js\");\n/* harmony import */ var _js_modalWindow_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_modalWindow_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_pavlutska_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/pavlutska.js */ \"./src/js/pavlutska.js\");\n/* harmony import */ var _scss_search_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/search.scss */ \"./src/scss/search.scss\");\n/* harmony import */ var _scss_fonts_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/fonts.scss */ \"./src/scss/fonts.scss\");\n/* harmony import */ var _scss_StylemodalWindow_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/StylemodalWindow.scss */ \"./src/scss/StylemodalWindow.scss\");\n/* harmony import */ var _scss_alex_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scss/alex.scss */ \"./src/scss/alex.scss\");\n/* harmony import */ var _scss_typography_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scss/typography.scss */ \"./src/scss/typography.scss\");\n/* harmony import */ var _js_timer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/timer.js */ \"./src/js/timer.js\");\n/* harmony import */ var _js_timer_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_timer_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _js_newProducts_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/newProducts.js */ \"./src/js/newProducts.js\");\n/* harmony import */ var _scss_timer_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scss/timer.scss */ \"./src/scss/timer.scss\");\n/* harmony import */ var _js_form_validator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/form_validator.js */ \"./src/js/form_validator.js\");\n/* harmony import */ var _js_form_validator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_js_form_validator_js__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/form_validator.js":
/*!**********************************!*\
  !*** ./src/js/form_validator.js ***!
  \**********************************/
/***/ (() => {

eval("$(\"#order\").click(() => {\n    let name = $('input[name=fio]').val();\n    let tel = $('input[name=tel]').val();\n    let send = true;\n    if (name === \"\") {\n        send = false;\n    } else if (tel === \"\") {\n        send = false\n    }\n\n    if (send) {\n        let userInfo = {\n            'user_name': name,\n            'user_tel': tel,\n        };\n\n        $.post('send.php', userInfo)\n    }\n});\n\n//# sourceURL=webpack:///./src/js/form_validator.js?");

/***/ }),

/***/ "./src/js/modalWindow.js":
/*!*******************************!*\
  !*** ./src/js/modalWindow.js ***!
  \*******************************/
/***/ (() => {

eval("// let modal = document.getElementById(\"my_modal\");\n// let btn = document.querySelectorAll('.btn_by');\n// let span = document.getElementsByClassName(\"close_modal_window\")[0];\n// let close = document.querySelector('#cansel');\n//\n// for( let key in btn ){\n//     btn[key].onclick = function(e){\n//         modal.style.display = \"block\";\n//         console.log(e)\n//     }\n// }\n//\n//  span.onclick = function () {\n//     modal.style.display = \"none\";\n//  }\n//\n//  close.onclick = function () {\n//     modal.style.display = \"none\";\n//  }\n//  window.onclick = function (event) {\n//     if (event.target == modal) {\n//         modal.style.display = \"none\";\n//     }\n// };\n\n\n//# sourceURL=webpack:///./src/js/modalWindow.js?");

/***/ }),

/***/ "./src/js/newProducts.js":
/*!*******************************!*\
  !*** ./src/js/newProducts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewCard\": () => /* binding */ createNewCard,\n/* harmony export */   \"initSlick\": () => /* binding */ initSlick,\n/* harmony export */   \"changeArrow\": () => /* binding */ changeArrow,\n/* harmony export */   \"item_modal_window\": () => /* binding */ item_modal_window\n/* harmony export */ });\nlet categoryNews = document.querySelector('#newItems .multiple-items');\n\naxios\n    .get(\"localhost:5000/products\")\n    .then(data => {\n        return data.data\n    })\n    .then((data) => {\n        return data.filter(item => {\n            return item.categories === 'watch';\n        });\n    })\n    .then((data) => {\n        data.map((item => {\n            let card = createNewCard(item);\n            categoryNews.append(card);\n        }));\n        return data;\n    })\n    .then((data) => {\n\n        $(document).ready(function () {\n\n            initSlick($('#newItems .multiple-items'));\n\n\n            let products = document.querySelector(\"#products .allNewProducts\");\n            let recommend = document.querySelector('#recommend .allNewProducts');\n            let sale = document.querySelector('#sale .allNewProducts');\n\n            //             function changeLink(link, value) {\n            //                 let windowWidth = document.documentElement.clientWidth;\n            //\n            //                 if (windowWidth <= 1199) {\n            //                     link.innerHTML = `<svg\n            //  xmlns=\"http://www.w3.org/2000/svg\"\n            //  width=\"9px\" height=\"24px\">\n            // <image  x=\"0px\" y=\"0px\" width=\"9px\" height=\"24px\"  xlink:href=\"data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAYCAMAAAAfxSccAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAgVBMVEVGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6v////dyEg5AAAAKXRSTlMAPK9BxMIGYWYK1uQabJcT4vk7gcAd7WSR4xgn9Z85NLa3F8EH5WfDQjL7mrQAAAABYktHRCpTvtSeAAAAB3RJTUUH5QEHETcgnGd4IwAAAHNJREFUCNdVj1kSglAQA1lEUXEBNwQV2e37X9AnAaw3X12ZykziuJ7vaBYES9EKQtF6wzYS7mAvOhyJE+EJzjJdrnCTmMI9Gyh/QCrxCfFroMKI75lKe/t3/K5U9mXzrW7sBHMqk7SNpvTd1KgfG7neR/AFKBcLgi3YMvMAAAAASUVORK5CYII=\" />\n            // </svg>`\n            //                 } else {\n            //                     link.innerHTML = value\n            //                 }\n            //             }\n\n            changeArrow();\n            // changeLink(products, `Все новинки`);\n            // changeLink(recommend, `Все рекомендации`);\n            // changeLink(sale, `Все товары`);\n            // $(window).on('resize', () => changeArrow(), changeLink(products, `Все новинки`), changeLink(recommend, `Все рекомендации`), changeLink(sale, `Все товары`));\n        });\n\n        return data;\n    })\n    .then((data) => {\n        console.log(data);\n        let modal = document.getElementById(\"my_modal\");\n        let modalContent = document.querySelector(\"#my_modal .modal_content\");\n        let btn = document.querySelectorAll('.btn_by');\n        let span = document.getElementsByClassName(\"close_modal_window\")[0];\n        let close = document.querySelector('#cansel');\n\n        for (let key of btn) {\n            key.onclick = function (e) {\n                let div = document.createElement('div');\n                div.className = 'card';\n                modal.style.display = \"block\";\n                console.log(e.target.id);\n                let newData = data.filter((item) => {\n                    return item.id == e.target.id\n                });\n\n                newData.map((item) => {\n                    let title = document.createElement(('h4'));\n                    title.innerHTML = \"\";\n                    title.innerHTML = item.name;\n                    div.append(title);\n                    modalContent.prepend(div);\n                })\n            }\n        }\n\n        let deleteCard = function () {\n            let card = document.querySelector(\".card\");\n            card.remove()\n        };\n\n        span.onclick = function () {\n            modal.style.display = \"none\";\n            deleteCard()\n        };\n\n        close.onclick = function () {\n            deleteCard();\n            modal.style.display = \"none\";\n        };\n        window.onclick = function (event) {\n            if (event.target == modal) {\n                modal.style.display = \"none\";\n                deleteCard();\n            }\n        };\n        return data;\n    })\n\n    .then((data) => {\n        item_modal_window(data);\n\n    })\n    .catch(err => {\n        console.log(err)\n        /*Do something with error, e.g. show error to user*/\n    });\n\n\nfunction createNewCard(item) {\n    let div = document.createElement('div');\n    let img = document.createElement('img');\n    let des = document.createElement('div');\n    let title = document.createElement('h3');\n    let imgWrapper = document.createElement('div');\n    let priceBlock = document.createElement('div');\n    let currentPrice = document.createElement('span');\n    let oldPrice = document.createElement('span');\n    let price = document.createElement('span');\n    let footerItem = document.createElement('div');\n    let btnBuy = document.createElement('button');\n    div.className = 'slider-item';\n    imgWrapper.className = 'img_wrapper';\n    imgWrapper.append(img);\n    img.src = item.imageUrls[0].split(',')[0];\n    div.append(imgWrapper);\n    des.className = 'description';\n    div.append(des);\n    title.innerHTML = item.name;\n    des.append(title);\n    priceBlock.className = 'priceBlock';\n    price.className = 'price';\n    price.innerHTML = 'Цена:';\n    priceBlock.append(price);\n    currentPrice.innerHTML = item.currentPrice;\n    priceBlock.append(currentPrice);\n    oldPrice.innerHTML = item.currentPrice * 1.2;\n    priceBlock.append(oldPrice);\n    div.append(priceBlock);\n    footerItem.className = 'footerItem';\n    btnBuy.className = 'btn_by';\n    btnBuy.innerHTML = \"<span class=\\\"bucketIcon\\\"><svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"20px\\\" height=\\\"17px\\\"><path fill-rule=\\\"evenodd\\\" fill=\\\"rgb(255, 255, 255)\\\" d=\\\"M19.408,6.459 L17.412,12.358 C17.412,12.358 17.249,13.234 16.405,13.234 L6.334,13.234 C5.330,13.234 5.287,12.134 5.287,12.134 L4.025,2.705 L0.783,1.883 C0.295,1.759 0.000,1.264 0.124,0.779 C0.249,0.293 0.745,-0.000 1.233,0.124 L5.077,1.100 C5.440,1.192 5.709,1.495 5.756,1.865 L6.333,6.537 L6.938,11.333 L16.049,11.333 L16.523,9.744 L8.885,9.741 C8.468,9.741 8.130,9.405 8.130,8.990 C8.130,8.575 8.468,8.239 8.885,8.239 L16.970,8.237 L17.475,6.538 L9.522,6.539 C9.073,6.539 8.709,6.176 8.709,5.728 C8.709,5.281 9.073,4.919 9.522,4.919 L18.511,4.920 C20.000,4.920 19.408,6.458 19.408,6.459 ZM7.353,13.771 C8.249,13.771 8.976,14.494 8.976,15.385 C8.976,16.277 8.249,17.000 7.353,17.000 C6.457,17.000 5.730,16.277 5.730,15.385 C5.730,14.494 6.457,13.771 7.353,13.771 ZM14.435,13.771 C15.330,13.771 16.057,14.494 16.057,15.385 C16.057,16.277 15.330,17.000 14.435,17.000 C13.538,17.000 12.812,16.277 12.812,15.385 C12.812,14.494 13.538,13.771 14.435,13.771 Z\\\"/></svg></span> Купить\";\n    footerItem.append(btnBuy);\n    div.append(footerItem);\n    btnBuy.id = item.id;\n    return div;\n}\n\nfunction initSlick(id) {\n    id.slick({\n        infinite: false,\n        slidesToShow: 4,\n        slidesToScroll: 4,\n        speed: 800,\n        nextArrow: `<div class=\"slick-custom-arrow slick-custom-arrow-left\">\n        </div>`,\n        prevArrow: `<div class=\"slick-custom-arrow slick-custom-arrow-right\">\n        </div>`,\n        responsive: [{\n            breakpoint: 979,\n            settings: {\n                slidesToShow: 3,\n                slidesToScroll: 3\n            }\n        },\n            {\n                breakpoint: 749,\n                settings: {\n                    slidesToShow: 2,\n                    slidesToScroll: 2\n                }\n            },\n            {\n                breakpoint: 575,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1\n                }\n            }\n        ]\n    });\n}\n\nfunction changeArrow() {\n    let nextArrow = $('.slick-custom-arrow-left');\n    let prevArrow = $('.slick-custom-arrow-right');\n    let windowWidth = document.documentElement.clientWidth;\n\n    for (let i = 0; i < nextArrow.length; i++) {\n        if (windowWidth <= 1199) {\n            nextArrow[i].innerHTML = `<i class=\"fas fa-angle-left\"></i>`\n        } else nextArrow[i].innerHTML = `<svg \n       xmlns=\"http://www.w3.org/2000/svg\"\n       width=\"16px\" height=\"44px\">\n      <path fill-rule=\"evenodd\"  fill=\"rgb(255, 88, 22)\"\n       d=\"M16.000,41.944 L12.610,44.000 L0.000,22.221 L1.159,22.000 L0.000,21.779 L12.610,-0.000 L16.000,2.056 L7.006,22.000 L16.000,41.944 Z\"/>\n      </svg>`\n    }\n\n    for (let j = 0; j < prevArrow.length; j++) {\n        if (windowWidth <= 1199) {\n            prevArrow[j].innerHTML = `<i class=\"fas fa-angle-right\"></i>`\n        } else prevArrow[j].innerHTML = `<svg \n       xmlns=\"http://www.w3.org/2000/svg\"\n       width=\"16px\" height=\"44px\">\n      <path fill-rule=\"evenodd\"  fill=\"rgb(255, 88, 22)\"\n       d=\"M16.000,22.221 L3.390,44.000 L0.000,41.944 L8.994,22.000 L0.000,2.056 L3.390,-0.000 L16.000,21.779 L14.841,22.000 L16.000,22.221 Z\"/>\n      </svg>`\n    }\n}\n\nfunction item_modal_window(data) {\n    let slider_item = [...document.querySelectorAll('.slick-slide')];\n    let product_modal_window = document.getElementById(\"product_modal_window\");\n    let span_close = document.getElementsByClassName(\"close_modal_window_product\")[0];\n    let modal_content = document.querySelector('.modal_content_product');\n\n    for (let key of slider_item) {\n\n        slider_item[key].id = data[key].id;\n\n        console.log(\"data key is \" + data[key].id);\n\n        slider_item[key].onclick = function (event) {\n\n            if (event.target.className !== 'btn_by') {\n\n                let divProduct = document.createElement('div');\n                divProduct.className = 'divProduct';\n                let divPhoto = document.createElement('div');\n                divPhoto.className = 'divPhoto';\n                let divContent = document.createElement('div');\n                divContent.className = 'divContent';\n                modal_content.append(divProduct);\n                divProduct.append(divPhoto);\n                divProduct.append(divContent);\n                let photoImg = document.createElement('img');\n                photoImg.src = data[key].imageUrls[0].split(',')[0];\n                divPhoto.append(photoImg);\n                let h2 = document.createElement('h2');\n                h2.className = 'heading';\n                h2.innerHTML = data[key].name;\n                divContent.append(h2);\n                let paragBrend = document.createElement('p');\n                paragBrend.className = 'paragBrand';\n                paragBrend.innerHTML = `<b>Brand:</b> <a href=\"#\">${data[key].brand}</a>`;\n                divContent.append(paragBrend);\n                let parametrs = document.createElement('p');\n                parametrs.innerHTML = `<b>Parametrs:</b> ${data[key].parametrs[0]}`;\n                divContent.append(parametrs);\n                let productColor = document.createElement('p');\n                productColor.innerHTML = `<b>Color:</b> ${data[key].color}`;\n                divContent.append(productColor);\n                let costPrice = document.createElement('p');\n                costPrice.className = 'costPrice';\n                costPrice.innerHTML = `CurrentPrice: <span class=\"spanText\">${data[key].currentPrice * 1.2}</span> <b>${data[key].currentPrice}</b>`\n                divContent.append(costPrice);\n                let btnOrder = document.createElement('button');\n                btnOrder.className = 'btnOrder';\n                btnOrder.innerHTML = 'Заказать';\n                divContent.append(btnOrder);\n\n                product_modal_window.style.display = \"block\";\n            }\n            span_close.onclick = function () {\n                product_modal_window.style.display = \"none\";\n                let product = document.querySelector('.divProduct')\n                product.remove()\n            };\n\n            window.onclick = function (event) {\n                if (event.target == product_modal_window) {\n                    product_modal_window.style.display = \"none\";\n                    let product = document.querySelector('.divProduct')\n                    product.remove()\n                }\n            }\n\n\n        }\n    }\n\n}\n\n//# sourceURL=webpack:///./src/js/newProducts.js?");

/***/ }),

/***/ "./src/js/pavlutska.js":
/*!*****************************!*\
  !*** ./src/js/pavlutska.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newProducts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProducts */ \"./src/js/newProducts.js\");\n\nconst headerSearchInput = $('.header_search_input');\nconst headerSearchButton = $('.header_search_button');\nconst searchResult = $('#search_result .multiple-items');\nlet slickActive = false;\n\nheaderSearchButton.click((event) => {\n    if (headerSearchInput.css('display') == 'none') {\n        headerSearchInput.css('display', 'block');\n        event.preventDefault();\n        return;\n    }\n\n    const searchInputVal = headerSearchInput.val();\n    if (searchInputVal == '' || searchInputVal == undefined) {\n        return;\n    }\n\n    fetch('/products?q=' + searchInputVal)\n        .then(response => {\n            return response.json();\n        })\n        .then(data => {\n            if (slickActive) {\n                searchResult.slick('unslick');\n                searchResult.empty();\n            }\n             data.forEach(element => {\n                let card = (0,_newProducts__WEBPACK_IMPORTED_MODULE_0__.createNewCard)(element);\n                searchResult.append(card);\n            });\n            return data;\n        }).then((data) => {\n            $('#search_result').css('display', 'block');\n            (0,_newProducts__WEBPACK_IMPORTED_MODULE_0__.initSlick)(searchResult);\n            (0,_newProducts__WEBPACK_IMPORTED_MODULE_0__.changeArrow)();\n            slickActive = true;\n            (0,_newProducts__WEBPACK_IMPORTED_MODULE_0__.item_modal_window)(data);\n        })\n        .catch(err => {\n            console.error(err);\n        });\n\n    event.preventDefault();\n});\n\n//# sourceURL=webpack:///./src/js/pavlutska.js?");

/***/ }),

/***/ "./src/js/timer.js":
/*!*************************!*\
  !*** ./src/js/timer.js ***!
  \*************************/
/***/ (() => {

eval("function newBox(timerBody, endOfAction){\n    let body = document.querySelector(timerBody);\n    let box = document.createElement(\"div\");\n    box.setAttribute(\"id\", \"timer\");\n    box.style.cssText = `width: 233px;\n    height: 400px;\n    border: 1px solid #dbdee6;\n    border-radius: 10px;`;\n    body.append(box);\n\n    let link1 = document.createElement(\"a\");\n    link1.innerHTML = \"Название акции\";\n    link1.setAttribute(\"href\", \"#\");\n    link1.style.cssText = `font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    font-size: 16px;\n    display: block;\n    margin: 17px 0 15px 20px;`;\n    box.append(link1);\n\n    let img = document.createElement(\"img\");\n    img.style.cssText = `width: 100%;\n    height: 123px;\n    object-fit: cover;`;\n    img.setAttribute(\"src\", \"dist/img/timer.jpg\");\n    box.append(img);\n\n    let p = document.createElement(\"p\");\n    p.innerHTML = \"Важными преимуществом использования айпи телефона вместо обычного, является на порядок более низкая цена соединения.\";\n    p.style.cssText = `font-family: 'Roboto', sans-serif;\n    font-weight: 400;\n    line-height: 1.3;\n    font-size: 13px;\n    margin: 15px 20px;`;\n    box.append(p);\n\n    let greyDiv = document.createElement(\"div\");\n    greyDiv.style.cssText = `background-color: #dbdee6;\n    height: 65px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;`;\n    box.append(greyDiv);\n\n    let pTime = document.createElement(\"p\");\n    pTime.innerHTML =\"Срок действия:\";\n    pTime.style.cssText = `width: 60px;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 300;\n    font-size: 13px;\n    margin: 20px 15px 20px 20px;`\n    greyDiv.append(pTime);\n\n    let divTime = document.createElement(\"div\");\n    greyDiv.append(divTime);\n\n    let time = document.createElement(\"p\");\n    time.setAttribute(\"id\", \"time\");\n    time.style.cssText = `margin: 0;\n    margin-right: 17px;\n    font-size: 23px;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;`;\n    divTime.append(time);\n    Timer(endOfAction);\n\n    let nameTime = document.createElement(\"p\");\n    nameTime.style.cssText = `font-size: 11px;\n    color: #989da0;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 300;\n    word-spacing: 4px;\n    margin: 0;\n    margin-right: 17px;`;\n    nameTime.innerHTML = \" дней  часов  минут\";\n    divTime.append(nameTime);\n\n    let link2 = document.createElement(\"a\");\n    link2.innerHTML = \"Подробнее\";\n    link2.setAttribute(\"href\", \"#\");\n    link2.style.cssText = `font-family: 'Roboto', sans-serif;\n    font-weight: 300;\n    font-size: 13px;\n    display: block;\n    width: 100%;\n    margin: 15px 0;\n    text-align: center;`;\n    box.append(link2);\n\n}\n\nfunction Format(time) {\n    return +time < 10 ? '0' + time : time;\n}\n\nfunction Timer (date) {\n    let s = (new Date(date)).getTime() - (new Date()).getTime();\n    s = parseInt(s / 1000);\n\n    let d = parseInt(s / 86400);\n    s -= d * 86400;\n    let h = parseInt(s / 3600);\n    s -= h * 3600;\n    let m = parseInt(s / 60);\n    s -= m * 60;\n\n    // console.log(h + ':' + m + ':' + s);\n    document.querySelector('#time').innerHTML = Format(d) + ':' + Format(h) + ':' + Format(m);\n\n    if ((new Date(date)).getTime() >= (new Date()).getTime()) {\n       setTimeout(() => {\n            Timer(date);\n       }, 1000); \n    } \n}\n\nnewBox(\"body\", \"April 1, 2021\");\n// Timer('May 1, 2021');\n\n//# sourceURL=webpack:///./src/js/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;