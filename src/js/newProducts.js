let categoryNews = document.querySelector('#newItems .multiple-items');
console.log(categoryNews);


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
    // .then((data) => {
    //
    // })
    .then((data) => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const title = document.createElement('h3');
        const priceBlock = document.createElement('div');
        const currentPrice = document.createElement('span');
        const oldPrice = document.createElement('span');
        const price = document.createElement('span');
        const footerItem = document.createElement('div');
        const btnBuy = document.createElement('button');
        btnBuy.className = 'btn_by';
        btnBuy.id = 'btn_by';
        btnBuy.innerHTML = "<span class=\"bucketIcon\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"17px\"><path fill-rule=\"evenodd\" fill=\"rgb(255, 255, 255)\" d=\"M19.408,6.459 L17.412,12.358 C17.412,12.358 17.249,13.234 16.405,13.234 L6.334,13.234 C5.330,13.234 5.287,12.134 5.287,12.134 L4.025,2.705 L0.783,1.883 C0.295,1.759 0.000,1.264 0.124,0.779 C0.249,0.293 0.745,-0.000 1.233,0.124 L5.077,1.100 C5.440,1.192 5.709,1.495 5.756,1.865 L6.333,6.537 L6.938,11.333 L16.049,11.333 L16.523,9.744 L8.885,9.741 C8.468,9.741 8.130,9.405 8.130,8.990 C8.130,8.575 8.468,8.239 8.885,8.239 L16.970,8.237 L17.475,6.538 L9.522,6.539 C9.073,6.539 8.709,6.176 8.709,5.728 C8.709,5.281 9.073,4.919 9.522,4.919 L18.511,4.920 C20.000,4.920 19.408,6.458 19.408,6.459 ZM7.353,13.771 C8.249,13.771 8.976,14.494 8.976,15.385 C8.976,16.277 8.249,17.000 7.353,17.000 C6.457,17.000 5.730,16.277 5.730,15.385 C5.730,14.494 6.457,13.771 7.353,13.771 ZM14.435,13.771 C15.330,13.771 16.057,14.494 16.057,15.385 C16.057,16.277 15.330,17.000 14.435,17.000 C13.538,17.000 12.812,16.277 12.812,15.385 C12.812,14.494 13.538,13.771 14.435,13.771 Z\"/></svg></span> Купить";
        footerItem.className = 'footerItem';
        price.className = 'price';
        priceBlock.className = 'priceBlock';
        div.className = 'slider-item';
        data.map(item => {
            div.append(img);
            img.src = item.imageUrls[0];
            div.append(title);
            title.innerHTML = item.name;
            currentPrice.innerHTML = item.currentPrice;
            console.log(item.previousPrice);
            oldPrice.innerHTML = item.currentPrice * 1.2;
            priceBlock.append(currentPrice);
            price.innerHTML = 'Цена:';
            priceBlock.append(price);
            priceBlock.append(oldPrice);
            div.append(priceBlock);
            console.log(div);
            div.append(footerItem);
            footerItem.append(btnBuy);
            return categoryNews.append(div);
        });
    })

    .catch(err => {
        console.log(err)
        /*Do something with error, e.g. show error to user*/
    });