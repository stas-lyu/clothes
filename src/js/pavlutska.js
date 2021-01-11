// let body = document.querySelector('body');
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

// hats.id = 'hats';
// body.appendChild(hats);
// fetch('http://localhost:5000/products?q=' + headerSearchInput.val())
//         .then(response => {
//             return response.json();
//         })
// .then(data => {
//     data.forEach(element => {
//         let product = document.createElement('ul');

//         let brand = document.createElement('li');
//         brand.innerText = element.brand;

//         let name = document.createElement('li');
//         name.innerText = element.name;

//         let color = document.createElement('li');
//         color.innerText = element.color;

//         let price = document.createElement('li');
//         price.innerText = element.currentPrice;

//         let description = document.createElement('li');
//         description.innerText = element.description;

//         product.append(brand);
//         product.append(name);
//         product.append(color);
//         product.append(price);
//         product.append(description);

//         hats.append(product)
//     });
// })

// axios
//     .get("http://localhost:5000/products")
//     .then(response => {
//         return response.data;
//     }).then(data => {
//         let hatsArray = data.filter(el => {
//             return el.categories == 'hats';
//         })
//         console.log(hatsArray);
//         return hatsArray;
//     }).then(hatsArray => {
//         hatsArray.forEach(element => {
//             let product = document.createElement('ul');

//             let brand = document.createElement('li');
//             brand.innerText = element.brand;

//             let name = document.createElement('li');
//             name.innerText = element.name;

//             let color = document.createElement('li');
//             color.innerText = element.color;

//             let price = document.createElement('li');
//             price.innerText = element.currentPrice;

//             let description = document.createElement('li');
//             description.innerText = element.description;

//             product.append(brand);
//             product.append(name);
//             product.append(color);
//             product.append(price);
//             product.append(description);

//             hats.append(product)
//         });
//     })
//     .catch(err => {
//         /*Do something with error, e.g. show error to user*/
//     });


// fetch('/products')
//     .then(response => response.json())
//     .then(json => {
//         let data = json;
//         console.log(data);

//         let dataNewProducts = data.map(el => {
//             let body = document.querySelector('body');
//             let div = document.createElement('div');
//             div.className = 'renderProduct';

//         });

//         // dataResponse.forEach(element => {
//         //     // console.log(element);
//         //     // $('.container').append(`<p>${element.body}</p>`);
//         //     let container = document.querySelector('.container');
//         //     let div = document.createElement('div');
//         //     container.append(div);
//         //     div.innerHTML = element.email;
//         // });

//     })