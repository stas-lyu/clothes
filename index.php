<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <link rel="stylesheet" href="dist/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="dist/css/slick.css">
    <link rel='stylesheet' href='dist/css/main.css'>
    <link rel="stylesheet" href="dist/owl-carousel/owl.carousel.min.css">
    <link rel="stylesheet" href="dist/owl-carousel/owl.theme.default.css">
    <title>internet shop</title>
    <script src="dist/owl-carousel/owl.carousel.min.js"></script>
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
            <button type="button" class="btn" data-toggle="modal" data-target="#exampleModal"><img
                        src="src/img/shop.png" alt="" class="shop"> корзина <br> 0/0
            </button>

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

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <table class="show-cart table">

                </table>
                <div>Всего к оплате: <span class="total-cart"></span></div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn clear-cart btn-primary">Очистить корзину</button>
                <button type="button" id="addToCart" class="btn btn-primary">Оформить заказ</button>
            </div>
        </div>
    </div>
</div>

<div id="cart" class="modal">


    <form class="modal_content" method="post" action="send.php">
        <span class="close_modal_window">×</span>
        <div class="showOrderItem"></div>
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
            <button type="button" id="cansel">Отмена</button>
        </div>
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
            </div>
        </div>
        <div id="recommend">
            <div class="header">
                <h2>Рекомендуем</h2>
                <div class="horizonLine"></div>
                <a href="#" class="allNewProducts">Все рекомендации</a>
            </div>
            <div class="multiple-items">
            </div>
        </div>
        <div id="sale">
            <div class="header">
                <h2>Распродажа</h2>
                <div class="horizonLine"></div>
                <a href="#" class="allNewProducts">Все товары</a>
            </div>
            <div class="multiple-items">
            </div>
        </div>
    </div>
</section>


<div class="container">

    <div class="heading">
        <h2>5 причин выбрать нашу компанию</h2>
        <hr class="hr1">
    </div>
    <div class="cards">
        <div class="card border-danger mb-3" style="max-width: 34rem;">
            <div class="card-header color-card1">
                <div>
                    <img src="dist/img/Layer%20797.png" alt="">
                </div>
                <div>
                    <p>С чем сталкиваются клиенты в 85% случаев, когда обращаются к нашим конкурентам?
                    </p>
                </div>
            </div>
            <div class="card-body text-danger">
                <ul>
                    <li><span>1.5 беглых менеджера по продажам со своим сайтом, имитирующие торговую компанию.</span>
                    </li>
                    <li><span>Торговля серым, несертифицированным товаром, что выливается в проблемы при гарантийном обслуживании.</span>
                    </li>
                    <li><span>Менеджеры по продажам знакомы с оборудованием лишь на бумаге, часто не знают, что они продают.</span>
                    </li>
                    <li><span>Компании занимаются только продажей, не проводят установку и настройку оборудования под ключ. Не оказывают техподдержку.</span>
                    </li>
                    <li><span>Сложная процедура гарантийного ремонта и возврата товара в случае проблем. Не понятно, куда обращаться по гарантии.</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card border-success mb-3" style="max-width: 34rem;">
            <div class="card-header color-card2">
                <div>
                    <img src="dist/img/Layer%20798.png" alt="">
                </div>
                <div>
                    <p>Какой сервис предложим Вам мы?
                    </p>
                </div>
            </div>
            <div class="card-body text-success">
                <ul>
                    <li><span>Открытая компания с полным штатом профильных специалистов</span></li>
                    <li><span>Торговля оборудованием, пришедшим в РФ исключительно через официальные поставки.</span>
                    </li>
                    <li><span>Мы прекрасно понимаем, что за оборудование продаем. Можем проконсультировать по функционалу, либо подобрать аналог.</span>
                    </li>
                    <li><span>Оказываем полный комплекс услуг по технической поддержке клиентов, а также проводим установку и настройку силами своего IT подразделения.</span>
                    </li>
                    <li><span>Мы имеем собственный сервисный центр, который осуществляет гарантийный ремонт оборудования.</span>
                    </li>
                </ul>

            </div>
        </div>
    </div>
    <div class="heading">
        <h2 class="m320">Мы в цифрах</h2>
        <hr class="hr2">
    </div>
    <div class="owl-carousel owl-theme" id="sliderOne">
        <div class="numb">
            <div class="one big orange circle">10</div>
            <p>10 лет на рынке</p>
        </div>
        <div class="numb">
            <div class="two blue circle1">25/2</div>
            <p>25 профильных специалистов, 5 менеджеров отдела продаж</p>
        </div>
        <div class="numb">
            <div class="three orange circle2">2222<span>x</span>100</div>
            <p>222 товара в каталоге среди 100 брендов
            </p>
        </div>
        <div class="numb">
            <div class="four big blue circle">29</div>
            <p>29 торговых партнеров</p>
        </div>
        <div class="numb">
            <div class="five big orange circle">14</div>
            <p>14 отгрузок в сутки</p>
        </div>
        <div class="numb">
            <div class="six big blue circle">1</div>
            <p>1 из лидеров рынка</p>
        </div>
    </div>
    <div class="heading">
        <h2>Как с нами работать?</h2>
        <hr class="hr3">
    </div>
    <div class="icon">
        <div class="arrow">
            <img src="dist/img/Layer%20801.png" alt="">
            <p><span>1.</span>Обращение через сайт/
                по телефону
            </p>
            <i class="fas fa-long-arrow-alt-right"></i>
        </div>
        <div class="arrow">
            <img src="dist/img/Layer%20802.png" alt="">
            <p><span>2.</span>Подтверждение
                заказа
            </p>
            <i class="fas fa-long-arrow-alt-right"></i>
        </div>
        <div class="arrow">
            <img src="dist/img/Layer%20803.png" alt="">
            <p><span>3.</span>Доставка
                товара
            </p>
            <i class="fas fa-long-arrow-alt-right"></i>
        </div>
        <div class="arrow">
            <img src="dist/img/Layer%20804.png" alt="">
            <p><span>4.</span>Оплата товара при получении, либо предоплата побезналичному расчету
                до п. 3
            </p>
        </div>
    </div>
    <hr class="hr4">
    <div class="columns">
        <div class="text">
            <p>Интернет магазин Хомиру поможет вам в выборе оборудования для <a href="">IP телефонии</a> - которая
                активно используется как в бизнесе для общения с клиентами, партнёрами, поставщиками и инвесторами по
                всему миру, так и в повседневной жизни, для разговоров с друзьями и близкими в других городах. Важными
                преимуществом использования айпи телефона вместо обычного, является на порядок более низкая цена
                соединения. Звонок в регион, расположенный за несколько тысяч километров от вас, может обойтись намного
                дешевле, чем разговор по сотовому телефону в пределах города.
            </p>
            <p><a href="">Для подключения к услугам IP-телефонии</a> требуется только стабильный выход в интернет и
                устройство коммуникации, например, компьютер с гарнитурой или ip телефон.</p>
        </div>
        <div class="text">
            <p>Наш магазин айпи телефонии Homy предлагает <a href="">полный спектр решений</a> для бизнеса и частных лиц
                в сфере организации современной связи (в том числе Skype телефоны и SIP телефоны). IP телефоны очень
                просты в использовании, так как применяется привычный всем, практически естественный интерфейс обычного
                телефона. Для работы с ним не требуется каких-либо специальных навыков или дополнительных операций:
                достаточно просто выполнить подключение и <a href="">конфигурирование устройств</a>а и положить его на
                то место, где ранее лежал ваш городской телефон. С этого момента вы и ваши сотрудники можете свободно
                пользоваться дешевой и защищённой связью.</p>
        </div>
    </div>

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