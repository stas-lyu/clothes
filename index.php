<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <link rel="stylesheet" href="dist/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="dist/css/slick.css">
    <link rel='stylesheet' href='dist/css/main.css'>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <title>internet shop</title>
</head>

<body>
<div class="container">
<header>
    <div class="one">
        <p>Ваш регион: <a href="">Москва</a></p>
        <h1>ho<span>my</span>ru</h1>
        <p>оборудование и решения для voip</p>
    </div>
    <div class="two">
        <div class="left"><img src="src/img/bg-a.png" alt=""><a href="">обратный <br> звонок</a></div>
        <div class="right">+7 495 2-55-44-66 <br> (пн-пт с 9 до 18 ч) <br>
            <p><img src="src/img/viber.png" alt="">
                <img src="src/img/watts-app.png" alt=""> +7 903 111-11-11
            </p>
            <a href="">info@homy.ru</a>
        </div>
    </div>
    <div class="three">
        <div class="top"><img src="src/img/P.png" alt="">
            <p><span>voip решения</span> <br> для экономних людей</p>
        </div>
        <div id="search">
            <form id="header_search_form" type="GET">
                <div class="header_search_input_wrapper">
                    <input type="search" class="header_search_input" placeholder="Поиск по сайту">
                </div>
                <div class="header_search_button_wrapper">
                    <button type="submit" class="header_search_button">искать</button>
                </div>
            </form>
        </div>
    </div>
    <div class="four"><a href="" class="exit">Войти </a><a href="">Личний кабинет</a>
        <button type="button" data-toggle="modal" data-target="#cart"><img src="src/img/shop.png" alt="" class="shop"> корзина <br> 0/0</button>

<<<<<<< HEAD:index.php
    <div id="my_modal" class="modal">
        <form class="modal_content" method="post" action="send.php">
            <span class="close_modal_window">×</span>
            <div class="order">
                <p>Заказать</p>
            </div>
            <div class="customer_name">
                <label>
                    <p>Имя</p>
                    <input type="text" name="fio" class="name" required>
                </label>
                <label>
                    <p>E-mail</p>
                    <input type="text" name="email" class="email">
                </label>
                <label>
                    <p>Телефон</p>
                    <input type="number" name="tel" class="phoneNumber" required>
                </label>
            </div>
            <div class="btn_cansel_order">
                <button id="cansel">Отмена</button>
                <input type="submit" id="order">Заказать
            </div>
        </form>
    </div>
=======
>>>>>>> 0ecc307a1323f6137f6d8cc3c1d8c344f18f859b:index.html

        <p><img src="src/img/heart.png" alt=""> Избранное: <span>0</span><img src="src/img/search.png" alt="">
            Сравнение: <span>0</span></p>

    </div>
</header>
</div>
<div id="search_result">
    <section class="search_result_items">
        <div class="container">
            <div class="search_items">
                <div class="header">
                    <h2>Результат поиска</h2>
                    <div class="horizonLine"></div>
                    <a href="#" class="allNewProducts">Все найденые товары</a>
                </div>
                <div class="multiple-items">
                </div>
            </div>
        </div>
    </section>
</div>

<div id="cart" class="modal">

            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Корзина</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <table class="show-cart table">

                    </table>
                    <div>Общая сумма: $<span class="total-cart"></span></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                    <button type="button" id="addToCart" class="btn btn-primary">Оформить заказ</button>
                </div>
            </div>


    <form class="modal_content" method="post" action="send.php">
        <span class="close_modal_window">×</span>
        <div class="customer_name">
            <label>
                <p>Имя</p>
                <input type="text" name="fio" class="name">
            </label>
            <label>
                <p>E-mail</p>
                <input type="text" name="email" class="email">
            </label>
            <label>
                <p>Телефон</p>
                <input type="number" name="tel" class="phoneNumber">
            </label>
        </div>
        <div class="btn_cansel_order">
            <input type="submit" id="order" placeholder="">
        </div>
        <button type="button" id="cansel">Отмена</button>
    </form>
</div>

<div id="product_modal_window" class="product_modal_window">
    <div class="modal_content_product">
        <span class="close_modal_window_product">×</span>

    </div>
</div>

<section id="products">
    <div class="container">
        <div id="newItems">
            <div class="header">
                <h2>Новинки</h2>
                <div class="horizonLine"></div>
                <a href="#" class="allNewProducts">Все новинки</a>
            </div>
            <div class="multiple-items">
                <!--                <div class="slider-item">-->
                <!--&lt;!&ndash;                    <img src="" class="slider_img" alt="product image">&ndash;&gt;-->
                <!--&lt;!&ndash;                    <div class="description">&ndash;&gt;-->
                <!--&lt;!&ndash;                        <h3 class="slider_title"><a href="#"></a></h3>&ndash;&gt;-->
                <!--&lt;!&ndash;                        <div class="priceBlock">&ndash;&gt;-->
                <!--&lt;!&ndash;                            <span class="price">Цена:</span>&ndash;&gt;-->
                <!--&lt;!&ndash;                            <span class="currentPrice"></span>&ndash;&gt;-->
                <!--&lt;!&ndash;                            <span class="oldPrice"></span>&ndash;&gt;-->
                <!--&lt;!&ndash;                        </div>&ndash;&gt;-->
                <!--&lt;!&ndash;                        <div class="footerItem">&ndash;&gt;-->
                <!--&lt;!&ndash;                            <button type="button" class="btn_by" id="btn_by"><span class="bucketIcon">&ndash;&gt;-->
                <!--&lt;!&ndash;                  <svg&ndash;&gt;-->
                <!--&lt;!&ndash;                          xmlns="http://www.w3.org/2000/svg"&ndash;&gt;-->
                <!--&lt;!&ndash;                          width="20px" height="17px">&ndash;&gt;-->
                <!--&lt;!&ndash;<path fill-rule="evenodd" fill="rgb(255, 255, 255)"&ndash;&gt;-->
                <!--&lt;!&ndash;      d="M19.408,6.459 L17.412,12.358 C17.412,12.358 17.249,13.234 16.405,13.234 L6.334,13.234 C5.330,13.234 5.287,12.134 5.287,12.134 L4.025,2.705 L0.783,1.883 C0.295,1.759 0.000,1.264 0.124,0.779 C0.249,0.293 0.745,-0.000 1.233,0.124 L5.077,1.100 C5.440,1.192 5.709,1.495 5.756,1.865 L6.333,6.537 L6.938,11.333 L16.049,11.333 L16.523,9.744 L8.885,9.741 C8.468,9.741 8.130,9.405 8.130,8.990 C8.130,8.575 8.468,8.239 8.885,8.239 L16.970,8.237 L17.475,6.538 L9.522,6.539 C9.073,6.539 8.709,6.176 8.709,5.728 C8.709,5.281 9.073,4.919 9.522,4.919 L18.511,4.920 C20.000,4.920 19.408,6.458 19.408,6.459 ZM7.353,13.771 C8.249,13.771 8.976,14.494 8.976,15.385 C8.976,16.277 8.249,17.000 7.353,17.000 C6.457,17.000 5.730,16.277 5.730,15.385 C5.730,14.494 6.457,13.771 7.353,13.771 ZM14.435,13.771 C15.330,13.771 16.057,14.494 16.057,15.385 C16.057,16.277 15.330,17.000 14.435,17.000 C13.538,17.000 12.812,16.277 12.812,15.385 C12.812,14.494 13.538,13.771 14.435,13.771 Z"/>&ndash;&gt;-->
                <!--&lt;!&ndash;</svg>&ndash;&gt;-->
                <!--&lt;!&ndash;                </span> Купить&ndash;&gt;-->
                <!--&lt;!&ndash;                            </button>&ndash;&gt;-->
                <!--&lt;!&ndash;                            <a href="#" class="detail">Подробнее</a>&ndash;&gt;-->
                <!--&lt;!&ndash;                        </div>&ndash;&gt;-->
                <!--&lt;!&ndash;                    </div>&ndash;&gt;-->
                <!--                </div>-->
            </div>
        </div>
        <!--            <div class="multiple-items">-->
        <!--                <div class="slider-item">-->
        <!--                    <img src="" alt="product image">-->
        <!--                    <div class="description">-->
        <!--                        <h3><a href="#"></a></h3>-->
        <!--                        <div class="priceBlock">-->
        <!--                            <span class="price">Цена:</span>-->
        <!--                            <span class="currentPrice"></span>-->
        <!--                            <span class="oldPrice"></span>-->
        <!--                        </div>-->
        <!--                        <div class="footerItem">-->
        <!--                            <button type="button" class="btn_by"><span class="bucketIcon">-->
        <!--                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="17px">-->
        <!--                                        <path fill-rule="evenodd" fill="rgb(255, 255, 255)"-->
        <!--                                            d="M19.408,6.459 L17.412,12.358 C17.412,12.358 17.249,13.234 16.405,13.234 L6.334,13.234 C5.330,13.234 5.287,12.134 5.287,12.134 L4.025,2.705 L0.783,1.883 C0.295,1.759 0.000,1.264 0.124,0.779 C0.249,0.293 0.745,-0.000 1.233,0.124 L5.077,1.100 C5.440,1.192 5.709,1.495 5.756,1.865 L6.333,6.537 L6.938,11.333 L16.049,11.333 L16.523,9.744 L8.885,9.741 C8.468,9.741 8.130,9.405 8.130,8.990 C8.130,8.575 8.468,8.239 8.885,8.239 L16.970,8.237 L17.475,6.538 L9.522,6.539 C9.073,6.539 8.709,6.176 8.709,5.728 C8.709,5.281 9.073,4.919 9.522,4.919 L18.511,4.920 C20.000,4.920 19.408,6.458 19.408,6.459 ZM7.353,13.771 C8.249,13.771 8.976,14.494 8.976,15.385 C8.976,16.277 8.249,17.000 7.353,17.000 C6.457,17.000 5.730,16.277 5.730,15.385 C5.730,14.494 6.457,13.771 7.353,13.771 ZM14.435,13.771 C15.330,13.771 16.057,14.494 16.057,15.385 C16.057,16.277 15.330,17.000 14.435,17.000 C13.538,17.000 12.812,16.277 12.812,15.385 C12.812,14.494 13.538,13.771 14.435,13.771 Z" />-->
        <!--                                    </svg>-->
        <!--                                </span> Купить-->
        <!--                            </button>-->
        <!--                            <a href="#" class="detail">Подробнее</a>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </div>-->
    </div>
    <!--        <div id="sale">-->
    <!--            <div class="header">-->
    <!--                <h2>Распродажа</h2>-->
    <!--                <div class="horizonLine"></div>-->
    <!--                <a href="#" class="allNewProducts">Все товары</a>-->
    <!--            </div>-->
    <!--            <div class="multiple-items">-->
    <!--                <div class="slider-item">-->
    <!--                    <img src="" alt="product image">-->
    <!--                    <div class="description">-->
    <!--                        <h3><a href="#"></a></h3>-->
    <!--                        <div class="priceBlock">-->
    <!--                            <span class="price">Цена:</span>-->
    <!--                            <span class="currentPrice"></span>-->
    <!--                            <span class="oldPrice"></span>-->
    <!--                        </div>-->
    <!--                        <div class="footerItem">-->
    <!--                            <button type="button" class="btn_by">-->
    <!--                                <span class="bucketIcon"><svg xmlns="http://www.w3.org/2000/svg" width="20px"-->
    <!--                                        height="17px">-->
    <!--                                        <path fill-rule="evenodd" fill="rgb(255, 255, 255)"-->
    <!--                                            d="M19.408,6.459 L17.412,12.358 C17.412,12.358 17.249,13.234 16.405,13.234 L6.334,13.234 C5.330,13.234 5.287,12.134 5.287,12.134 L4.025,2.705 L0.783,1.883 C0.295,1.759 0.000,1.264 0.124,0.779 C0.249,0.293 0.745,-0.000 1.233,0.124 L5.077,1.100 C5.440,1.192 5.709,1.495 5.756,1.865 L6.333,6.537 L6.938,11.333 L16.049,11.333 L16.523,9.744 L8.885,9.741 C8.468,9.741 8.130,9.405 8.130,8.990 C8.130,8.575 8.468,8.239 8.885,8.239 L16.970,8.237 L17.475,6.538 L9.522,6.539 C9.073,6.539 8.709,6.176 8.709,5.728 C8.709,5.281 9.073,4.919 9.522,4.919 L18.511,4.920 C20.000,4.920 19.408,6.458 19.408,6.459 ZM7.353,13.771 C8.249,13.771 8.976,14.494 8.976,15.385 C8.976,16.277 8.249,17.000 7.353,17.000 C6.457,17.000 5.730,16.277 5.730,15.385 C5.730,14.494 6.457,13.771 7.353,13.771 ZM14.435,13.771 C15.330,13.771 16.057,14.494 16.057,15.385 C16.057,16.277 15.330,17.000 14.435,17.000 C13.538,17.000 12.812,16.277 12.812,15.385 C12.812,14.494 13.538,13.771 14.435,13.771 Z" />-->
    <!--                                    </svg></span> Купить-->
    <!--                            </button>-->
    <!--                            <a href="#" class="detail">Подробнее</a>-->
    <!--                        </div>-->
    <!--                    </div>-->
    <!--                </div>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--        </div>-->
</section>



<div class="container">
<footer>
    <div class="top_footer">
        <div class="one_footer">
            <img src="src/img/logo copy.png" alt=""> <br>
            <p>© ХомиРу, 2006-2016 Оборудование и решения для VoIP

            </p> <br>
            <p>Перепечатка материалов возможна только с активной ссылкой на homy.ru</p>
        </div>
        <div class="two_footer">
            г. Москва, Зеленоград, Панфиловский пр., дом 8, строение 1 <br> <a href="">Схема проезда</a>
        </div>
        <div class="three_footer">
            <ul>
                <li>Доставка и оплата</li>
                <li>Гарантии и возврат</li>
                <li>Техподдержка</li>
                <li> Контакты</li>
            </ul>
            <div class="left"><img src="src/img/bg-a.png" alt=""><a href="">обратный <br> звонок</a></div>
        </div>
        <div class="four_footer">

            <span>+7 495 2-55-44-66 </span> <br> (пн-пт с 9 до 18 ч) <br>
            <p><img src="src/img/viber.png" alt="">
                <img src="src/img/watts-app.png" alt=""> +7 903 111-11-11
            </p>
            <a href="">info@homy.ru</a>
            <img src="src/img/vk.png" alt="" class="vk">
        </div>
    </div>
    <div class="bottom">
        <p></p>
    </div>
</footer>
</div>
<script src="dist/js/slick.min.js"></script>
<script type="text/javascript" src="dist/js/bundle.js"></script>
</body>

</html>