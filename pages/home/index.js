const tagUlCards = document.querySelector('.card-list');

const tagUlGenresList = document.querySelector('.genres-list');

function showCards(array, htmlReference){
    array.forEach(album => {
        let cardToShow = album;
        let cardReady = createCard(cardToShow);
        htmlReference.appendChild(cardReady);
    });
}

function showCategoryButtons(array, htmlReference){
    array.forEach(category => {
        let categoryToShow = category;
        let categoryReady = createCategory(categoryToShow);
        htmlReference.appendChild(categoryReady);
    });
}

showCategoryButtons(categories, tagUlGenresList)

