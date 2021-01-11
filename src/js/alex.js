$(document).ready(function () {
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 800,
    nextArrow: `<div class="slick-custom-arrow slick-custom-arrow-left">
                   <!--<svg 
                   xmlns="http://www.w3.org/2000/svg"
                   width="16px" height="44px">
                  <path fill-rule="evenodd"  fill="rgb(255, 88, 22)"
                   d="M16.000,41.944 L12.610,44.000 L0.000,22.221 L1.159,22.000 L0.000,21.779 L12.610,-0.000 L16.000,2.056 L7.006,22.000 L16.000,41.944 Z"/>
                  </svg>-->
                </div>`,
    prevArrow: `<div class="slick-custom-arrow slick-custom-arrow-right">
                   <!--<svg 
                   xmlns="http://www.w3.org/2000/svg"
                   width="16px" height="44px">
                  <path fill-rule="evenodd"  fill="rgb(255, 88, 22)"
                   d="M16.000,22.221 L3.390,44.000 L0.000,41.944 L8.994,22.000 L0.000,2.056 L3.390,-0.000 L16.000,21.779 L14.841,22.000 L16.000,22.221 Z"/>
                  </svg>-->
                </div>`,
    responsive: [
      {
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

  function changeArrow() {
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
