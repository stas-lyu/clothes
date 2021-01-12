(() => {
    var e = {
            527: () => {
                $(document).ready((function () {
                    function e() {
                        let e = $(".slick-custom-arrow-left"),
                            t = $(".slick-custom-arrow-right"),
                            n = document.documentElement.clientWidth;
                        for (let t = 0; t < e.length; t++) e[t].innerHTML = n <= 1199 ? '<i class="fas fa-angle-left"></i>' : '<svg \n                   xmlns="http://www.w3.org/2000/svg"\n                   width="16px" height="44px">\n                  <path fill-rule="evenodd"  fill="rgb(255, 88, 22)"\n                   d="M16.000,41.944 L12.610,44.000 L0.000,22.221 L1.159,22.000 L0.000,21.779 L12.610,-0.000 L16.000,2.056 L7.006,22.000 L16.000,41.944 Z"/>\n                  </svg>';
                        for (let e = 0; e < t.length; e++) t[e].innerHTML = n <= 1199 ? '<i class="fas fa-angle-right"></i>' : '<svg \n                   xmlns="http://www.w3.org/2000/svg"\n                   width="16px" height="44px">\n                  <path fill-rule="evenodd"  fill="rgb(255, 88, 22)"\n                   d="M16.000,22.221 L3.390,44.000 L0.000,41.944 L8.994,22.000 L0.000,2.056 L3.390,-0.000 L16.000,21.779 L14.841,22.000 L16.000,22.221 Z"/>\n                  </svg>'
                    }
                    $(".multiple-items").slick({
                        infinite: !0,
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        speed: 800,
                        nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-left">\n                   \x3c!--<svg \n                   xmlns="http://www.w3.org/2000/svg"\n                   width="16px" height="44px">\n                  <path fill-rule="evenodd"  fill="rgb(255, 88, 22)"\n                   d="M16.000,41.944 L12.610,44.000 L0.000,22.221 L1.159,22.000 L0.000,21.779 L12.610,-0.000 L16.000,2.056 L7.006,22.000 L16.000,41.944 Z"/>\n                  </svg>--\x3e\n                </div>',
                        prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-right">\n                   \x3c!--<svg \n                   xmlns="http://www.w3.org/2000/svg"\n                   width="16px" height="44px">\n                  <path fill-rule="evenodd"  fill="rgb(255, 88, 22)"\n                   d="M16.000,22.221 L3.390,44.000 L0.000,41.944 L8.994,22.000 L0.000,2.056 L3.390,-0.000 L16.000,21.779 L14.841,22.000 L16.000,22.221 Z"/>\n                  </svg>--\x3e\n                </div>',
                        responsive: [{
                            breakpoint: 979,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        }, {
                            breakpoint: 749,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        }, {
                            breakpoint: 575,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }]
                    });
                    let t = document.querySelector("#products .allNewProducts"),
                        n = document.querySelector("#recommend .allNewProducts"),
                        c = document.querySelector("#sale .allNewProducts");

                    function o(e, t) {
                        let n = document.documentElement.clientWidth;
                        e.innerHTML = n <= 1199 ? '<svg \n xmlns="http://www.w3.org/2000/svg"\n width="9px" height="24px">\n<image  x="0px" y="0px" width="9px" height="24px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAYCAMAAAAfxSccAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAgVBMVEVGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6tGc6v////dyEg5AAAAKXRSTlMAPK9BxMIGYWYK1uQabJcT4vk7gcAd7WSR4xgn9Z85NLa3F8EH5WfDQjL7mrQAAAABYktHRCpTvtSeAAAAB3RJTUUH5QEHETcgnGd4IwAAAHNJREFUCNdVj1kSglAQA1lEUXEBNwQV2e37X9AnAaw3X12ZykziuJ7vaBYES9EKQtF6wzYS7mAvOhyJE+EJzjJdrnCTmMI9Gyh/QCrxCfFroMKI75lKe/t3/K5U9mXzrW7sBHMqk7SNpvTd1KgfG7neR/AFKBcLgi3YMvMAAAAASUVORK5CYII=" />\n</svg>' : t
                    }
                    e(), o(t, "Все новинки"), o(n, "Все рекомендации"), o(c, "Все товары"), $(window).on("resize", (() => e()), o(t, "Все новинки"), o(n, "Все рекомендации"), o(c, "Все товары"))
                }))
            },
            835: () => {
                let e = document.getElementById("my_modal"),
                    t = document.querySelectorAll("#btn_by"),
                    n = document.getElementsByClassName("close_modal_window")[0],
                    c = document.querySelector("#cansel");
                for (let n in t) t[n].onclick = function () {
                    e.style.display = "block"
                };
                n.onclick = function () {
                    e.style.display = "none"
                }, c.onclick = function () {
                    e.style.display = "none"
                }, window.onclick = function (t) {
                    t.target == e && (e.style.display = "none")
                }
            },
            321: () => {
                let e = document.querySelector("#newItems .multiple-items");
                console.log(e), axios.get("/products").then((e => e.data)).then((e => e.filter((e => "watch" === e.categories)))).then((t => {
                    const n = document.createElement("div"),
                        c = document.createElement("img"),
                        o = document.createElement("h3"),
                        i = document.createElement("div"),
                        l = document.createElement("span"),
                        s = document.createElement("span"),
                        r = document.createElement("span"),
                        a = document.createElement("div"),
                        d = document.createElement("button");
                    d.className = "btn_by", d.id = "btn_by", d.innerHTML = '<span class="bucketIcon"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="17px"><path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M19.408,6.459 L17.412,12.358 C17.412,12.358 17.249,13.234 16.405,13.234 L6.334,13.234 C5.330,13.234 5.287,12.134 5.287,12.134 L4.025,2.705 L0.783,1.883 C0.295,1.759 0.000,1.264 0.124,0.779 C0.249,0.293 0.745,-0.000 1.233,0.124 L5.077,1.100 C5.440,1.192 5.709,1.495 5.756,1.865 L6.333,6.537 L6.938,11.333 L16.049,11.333 L16.523,9.744 L8.885,9.741 C8.468,9.741 8.130,9.405 8.130,8.990 C8.130,8.575 8.468,8.239 8.885,8.239 L16.970,8.237 L17.475,6.538 L9.522,6.539 C9.073,6.539 8.709,6.176 8.709,5.728 C8.709,5.281 9.073,4.919 9.522,4.919 L18.511,4.920 C20.000,4.920 19.408,6.458 19.408,6.459 ZM7.353,13.771 C8.249,13.771 8.976,14.494 8.976,15.385 C8.976,16.277 8.249,17.000 7.353,17.000 C6.457,17.000 5.730,16.277 5.730,15.385 C5.730,14.494 6.457,13.771 7.353,13.771 ZM14.435,13.771 C15.330,13.771 16.057,14.494 16.057,15.385 C16.057,16.277 15.330,17.000 14.435,17.000 C13.538,17.000 12.812,16.277 12.812,15.385 C12.812,14.494 13.538,13.771 14.435,13.771 Z"/></svg></span> Купить', a.className = "footerItem", r.className = "price", i.className = "priceBlock", n.className = "slider-item", t.map((t => (n.append(c), c.src = t.imageUrls[0], n.append(o), o.innerHTML = t.name, l.innerHTML = t.currentPrice, console.log(t.previousPrice), s.innerHTML = 1.2 * t.currentPrice, i.append(l), r.innerHTML = "Цена:", i.append(r), i.append(s), n.append(i), console.log(n), n.append(a), a.append(d), e.append(n))))
                })).catch((e => {
                    console.log(e)
                }))
            },
            411: () => {
                fetch("/products").then((e => e.json())).then((e => console.log(e)))
            },
            795: () => {
                function e(e) {
                    return +e < 10 ? "0" + e : e
                }

                function t(n) {
                    let c = new Date(n).getTime() - (new Date).getTime();
                    c = parseInt(c / 1e3);
                    let o = parseInt(c / 86400);
                    c -= 86400 * o;
                    let i = parseInt(c / 3600);
                    c -= 3600 * i;
                    let l = parseInt(c / 60);
                    c -= 60 * l, document.querySelector("#time").innerHTML = e(o) + ":" + e(i) + ":" + e(l), new Date(n).getTime() >= (new Date).getTime() && setTimeout((() => {
                        t(n)
                    }), 1e3)
                }! function (e, n) {
                    let c = document.querySelector("body"),
                        o = document.createElement("div");
                    o.setAttribute("id", "timer"), o.style.cssText = "width: 233px;\n    height: 400px;\n    border: 1px solid #dbdee6;\n    border-radius: 10px;", c.append(o);
                    let i = document.createElement("a");
                    i.innerHTML = "Название акции", i.setAttribute("href", "#"), i.style.cssText = "font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    font-size: 16px;\n    display: block;\n    margin: 17px 0 15px 20px;", o.append(i);
                    let l = document.createElement("img");
                    l.style.cssText = "width: 100%;\n    height: 123px;\n    object-fit: cover;", l.setAttribute("src", "src/img/timer.jpg"), o.append(l);
                    let s = document.createElement("p");
                    s.innerHTML = "Важными преимуществом использования айпи телефона вместо обычного, является на порядок более низкая цена соединения.", s.style.cssText = "font-family: 'Roboto', sans-serif;\n    font-weight: 400;\n    line-height: 1.3;\n    font-size: 13px;\n    margin: 15px 20px;", o.append(s);
                    let r = document.createElement("div");
                    r.style.cssText = "background-color: #dbdee6;\n    height: 65px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;", o.append(r);
                    let a = document.createElement("p");
                    a.innerHTML = "Срок действия:", a.style.cssText = "width: 60px;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 300;\n    font-size: 13px;\n    margin: 20px 15px 20px 20px;", r.append(a);
                    let d = document.createElement("div");
                    r.append(d);
                    let p = document.createElement("p");
                    p.setAttribute("id", "time"), p.style.cssText = "margin: 0;\n    margin-right: 17px;\n    font-size: 23px;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;", d.append(p), t("April 1, 2021");
                    let m = document.createElement("p");
                    m.style.cssText = "font-size: 11px;\n    color: #989da0;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 300;\n    word-spacing: 4px;\n    margin: 0;\n    margin-right: 17px;", m.innerHTML = " дней  часов  минут", d.append(m);
                    let g = document.createElement("a");
                    g.innerHTML = "Подробнее", g.setAttribute("href", "#"), g.style.cssText = "font-family: 'Roboto', sans-serif;\n    font-weight: 300;\n    font-size: 13px;\n    display: block;\n    width: 100%;\n    margin: 15px 0;\n    text-align: center;", o.append(g)
                }()
            }
        },
        t = {};

    function n(c) {
        if (t[c]) return t[c].exports;
        var o = t[c] = {
            exports: {}
        };
        return e[c](o, o.exports, n), o.exports
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t
    }, n.d = (e, t) => {
        for (var c in t) n.o(t, c) && !n.o(e, c) && Object.defineProperty(e, c, {
            enumerable: !0,
            get: t[c]
        })
    }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        "use strict";
        n(527), n(835), n(411), n(795), n(321)
    })()
})();