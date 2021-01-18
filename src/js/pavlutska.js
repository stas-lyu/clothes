import {
    createNewCard,
    initSlick,
    changeArrow,
    item_modal_window,
} from './newProducts';
const headerSearchInput = $('.header_search_input');
const headerSearchButton = $('.header_search_button');
const searchResult = $('#search_result .multiple-items');
let slickActive = false;

headerSearchButton.click((event) => {
    if (headerSearchInput.css('display') == 'none') {
        headerSearchInput.css('display', 'block');
        event.preventDefault();
        return;
    }

    const searchInputVal = headerSearchInput.val();
    if (searchInputVal == '' || searchInputVal == undefined) {
        return;
    }

    fetch('/products?q=' + searchInputVal)
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (slickActive) {
                searchResult.slick('unslick');
                searchResult.empty();
            }
            data.forEach(element => {
                let card = createNewCard(element);
                searchResult.append(card);
            });
            return data;
        }).then(() => {
            $('#search_result').css('display', 'block');
            initSlick(searchResult);
            changeArrow();
            slickActive = true;
            item_modal_window(data);
        })
        .catch(err => {
            console.error(err);
        });

    event.preventDefault();
});