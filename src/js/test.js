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
    .post("http://localhost:5000/products", newProduct)
    .then(newProduct => {
        console.log(newProduct)
        /*Do something with newProduct*/
    })
    .catch(err => {
        /*Do something with error, e.g. show error to user*/
    });