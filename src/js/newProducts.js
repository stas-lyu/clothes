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
        const priceBlock = document.createElement('div');
        const currentPrice = document.createElement('span');
        const oldPrice = document.createElement('span');
        priceBlock.className = 'priceBlock';
        div.className = 'slider-item';

        data.map(item => {
            div.append(img);
            // img.src = item.imageUrls[0];
            div.append(title);
            title.innerHTML = item.name;
            console.log(item.name);
            currentPrice.innerHTML = item.currentPrice[0];
            console.log(item.previousPrice);
            oldPrice.innerHTML = item.previousPrice;
            priceBlock.append(currentPrice);
            priceBlock.append(oldPrice);
            return categoryNews.append(div);
        });
})

    .catch(err => {
        console.log(err)
        /*Do something with error, e.g. show error to user*/
    });