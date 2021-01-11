


axios
    .get("/products")
    .then(data => {
        return data.data
    })
    .then((data)=>{

        let filterCaps = data.filter(item=>{
            return item.categories === 'caps';
        })
        console.log(filterCaps)
        // return filterCaps;
    })
    // .then((filterCaps)=>{
    //     let body = document.querySelector('body')
    //     let div = document.createElement('div');
    //     body.append(div);
    //     let ul = document.createElement('ul');
    //     div.append(ul);
      
    // })
   
    .catch(err => {
        /*Do something with error, e.g. show error to user*/
    });