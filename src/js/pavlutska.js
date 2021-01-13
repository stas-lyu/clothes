const headerSearchInput = $('.header_search_input');
const headerSearchButton = $('.header_search_button');

headerSearchButton.click((event) => {
    let inputStyle = window.getComputedStyle(headerSearchInput[0]);
    if (inputStyle.display == 'none') {
        headerSearchInput[0].style.display = 'block';
        event.preventDefault();
        return;
    }

    fetch('http://localhost:5000/products?q=' + headerSearchInput.val())
        .then(response => {
            return response.json();
        })
        .then(data => {
            const searchResult = $('.search_result');
            searchResult[0].innerHTML = '';
            data.forEach(element => {
                let item = new Item({
                    name: element.name,
                    brand: element.brand,
                    color: element.color,
                    price: element.currentPrice
                });
                searchResult.append(item.render());
            });

            console.log(data);
        })
        .catch(err => {
            console.error(err);
        });

    event.preventDefault();
});

class Item {
    constructor(options) {
        this.name = options.name;
        this.brand = options.brand;
        this.color = options.color;
        this.price = options.price;
    }

    render() {
        let itemCard = document.createElement('div');
        itemCard.classList.add('item');
        let titleItem = document.createElement('h3');
        titleItem.classList.add('titleItem');
        titleItem.innerText = this.name;

        itemCard.append(titleItem);

        return itemCard;
    }
}