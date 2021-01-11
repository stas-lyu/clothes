fetch('/products')
    .then(response => response.json())
    .then(json => console.log(json));