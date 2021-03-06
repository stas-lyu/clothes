import {
    createNewCard,
    initSlick,
    changeArrow,
    showOrderForm,
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

    fetch('https://katecod88.github.io/data/db.json?q=' + searchInputVal)
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
        }).then((data) => {
            $('#search_result').css('display', 'block');
            initSlick(searchResult);
            changeArrow();
            slickActive = true;
            // showOrderForm(data);
        })
        .catch(err => {
            console.error(err);
        });

    event.preventDefault();
});