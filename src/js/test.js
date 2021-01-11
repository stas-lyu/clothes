const newProduct = {
    name: "new product for testing purposes",
    currentPrice: 199.99,
    previousPrice: 250,
    categories: "men",
    imageUrls: [
        "img/products/men/001.png",
        "img/products/men/002.png",
        "img/products/men/003.png",
        "img/products/men/004.png"
    ],
    quantity: 100,
    color: "red",
    productUrl: "/men",
    brand: "braaaand",
    myCustomParam: "some string or json for custom param"
};



axios
    .get("http://localhost:5000/products")
    .then(response => {
        console.log(response)
        /*Do something with newProduct*/
    })
    .catch(err => {
        /*Do something with error, e.g. show error to user*/
    });

// fetch('/products')
//     .then(response => response.json())
//     .then(json => console.log(json));
  