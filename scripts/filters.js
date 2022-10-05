let btnTodos = document.querySelector('#cat_Todos');
let btnPop = document.querySelector('#cat_Pop');
let btnMPB = document.querySelector('#cat_MPB');
let btnForro = document.querySelector('#cat_Forro');
let btnSamba = document.querySelector('#cat_Samba');
let btnBaiao = document.querySelector('#cat_Baiao');
let btnRap = document.querySelector('#cat_Rap');
let btnHipHop = document.querySelector('#cat_Hip-Hop');
let btnRock = document.querySelector('#cat_Rock');
let btnReggae = document.querySelector('#cat_Reggae');
let btnCountry = document.querySelector('#cat_Country');
let btnGospel = document.querySelector('#cat_Gospel');

function cleanList(){
    tagUlCards.innerHTML = '';
};

const priceFilter = document.querySelector('.price-filter');

const slider = document.querySelector('.price-filter-input');

slider.addEventListener('input', () => {
    priceFilter.innerText = `Até R$ ${slider.value}`;
    let newArray = products.filter((element) => element.price <= slider.value);
    cleanList();
    newArray.forEach((album => {
        let cardToShow = album;
        let cardReady = createCard(cardToShow);
        tagUlCards.appendChild(cardReady);
    }));
})




const filterButtons = document.querySelectorAll('.genre');

filterButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        if (event.target.id === 'cat_Todos'){
            event.target.classList.remove('genre-outline');
            event.target.classList.add('genre-outline-active');
            cleanList();
            showCards(products, tagUlCards);
            btnPop.classList.remove('genre-outline-active');
            btnPop.classList.add('genre-outline');
            btnMPB.classList.remove('genre-outline-active');
            btnMPB.classList.add('genre-outline');
            btnForro.classList.remove('genre-outline-active');
            btnForro.classList.add('genre-outline');
            btnSamba.classList.remove('genre-outline-active');
            btnSamba.classList.add('genre-outline');
            btnBaiao.classList.remove('genre-outline-active');
            btnBaiao.classList.add('genre-outline');
            btnRap.classList.remove('genre-outline-active');
            btnRap.classList.add('genre-outline');
            btnHipHop.classList.remove('genre-outline-active');
            btnHipHop.classList.add('genre-outline');
            btnRock.classList.remove('genre-outline-active');
            btnRock.classList.add('genre-outline');
            btnReggae.classList.remove('genre-outline-active');
            btnReggae.classList.add('genre-outline');
            btnCountry.classList.remove('genre-outline-active');
            btnCountry.classList.add('genre-outline');
            btnGospel.classList.remove('genre-outline-active');
            btnGospel.classList.add('genre-outline');
        }
        if (event.target.id === 'cat_Pop'){
            event.target.classList.remove('genre-outline');
            event.target.classList.add('genre-outline-active');
            cleanList();
            showPopAlbuns(products, tagUlCards);
            btnTodos.classList.remove('genre-outline-active');
            btnTodos.classList.add('genre-outline');
            btnMPB.classList.remove('genre-outline-active');
            btnMPB.classList.add('genre-outline');
            btnForro.classList.remove('genre-outline-active');
            btnForro.classList.add('genre-outline');
            btnSamba.classList.remove('genre-outline-active');
            btnSamba.classList.add('genre-outline');
            btnBaiao.classList.remove('genre-outline-active');
            btnBaiao.classList.add('genre-outline');
            btnRap.classList.remove('genre-outline-active');
            btnRap.classList.add('genre-outline');
            btnHipHop.classList.remove('genre-outline-active');
            btnHipHop.classList.add('genre-outline');
            btnRock.classList.remove('genre-outline-active');
            btnRock.classList.add('genre-outline');
            btnReggae.classList.remove('genre-outline-active');
            btnReggae.classList.add('genre-outline');
            btnCountry.classList.remove('genre-outline-active');
            btnCountry.classList.add('genre-outline');
            btnGospel.classList.remove('genre-outline-active');
            btnGospel.classList.add('genre-outline');
        }
        if (event.target.id === 'cat_MPB'){
            event.target.classList.remove('genre-outline');
            event.target.classList.add('genre-outline-active');
            cleanList();
            showMPBAlbuns(products, tagUlCards);
            btnPop.classList.remove('genre-outline-active');
            btnPop.classList.add('genre-outline');
            btnTodos.classList.remove('genre-outline-active');
            btnTodos.classList.add('genre-outline');
            btnForro.classList.remove('genre-outline-active');
            btnForro.classList.add('genre-outline');
            btnSamba.classList.remove('genre-outline-active');
            btnSamba.classList.add('genre-outline');
            btnBaiao.classList.remove('genre-outline-active');
            btnBaiao.classList.add('genre-outline');
            btnRap.classList.remove('genre-outline-active');
            btnRap.classList.add('genre-outline');
            btnHipHop.classList.remove('genre-outline-active');
            btnHipHop.classList.add('genre-outline');
            btnRock.classList.remove('genre-outline-active');
            btnRock.classList.add('genre-outline');
            btnReggae.classList.remove('genre-outline-active');
            btnReggae.classList.add('genre-outline');
            btnCountry.classList.remove('genre-outline-active');
            btnCountry.classList.add('genre-outline');
            btnGospel.classList.remove('genre-outline-active');
            btnGospel.classList.add('genre-outline');
        }
        if (event.target.id === 'cat_Forro'){
            event.target.classList.remove('genre-outline');
            event.target.classList.add('genre-outline-active');
            cleanList();
            showForroAlbuns(products, tagUlCards);
            btnPop.classList.remove('genre-outline-active');
            btnPop.classList.add('genre-outline');
            btnMPB.classList.remove('genre-outline-active');
            btnMPB.classList.add('genre-outline');
            btnTodos.classList.remove('genre-outline-active');
            btnTodos.classList.add('genre-outline');
            btnSamba.classList.remove('genre-outline-active');
            btnSamba.classList.add('genre-outline');
            btnBaiao.classList.remove('genre-outline-active');
            btnBaiao.classList.add('genre-outline');
            btnRap.classList.remove('genre-outline-active');
            btnRap.classList.add('genre-outline');
            btnHipHop.classList.remove('genre-outline-active');
            btnHipHop.classList.add('genre-outline');
            btnRock.classList.remove('genre-outline-active');
            btnRock.classList.add('genre-outline');
            btnReggae.classList.remove('genre-outline-active');
            btnReggae.classList.add('genre-outline');
            btnCountry.classList.remove('genre-outline-active');
            btnCountry.classList.add('genre-outline');
            btnGospel.classList.remove('genre-outline-active');
            btnGospel.classList.add('genre-outline');
        }
        if (event.target.id === 'cat_Samba'){
            event.target.classList.remove('genre-outline');
            event.target.classList.add('genre-outline-active');
            cleanList();
            showSambaAlbuns(products, tagUlCards);
            btnPop.classList.remove('genre-outline-active');
            btnPop.classList.add('genre-outline');
            btnMPB.classList.remove('genre-outline-active');
            btnMPB.classList.add('genre-outline');
            btnForro.classList.remove('genre-outline-active');
            btnForro.classList.add('genre-outline');
            btnTodos.classList.remove('genre-outline-active');
            btnTodos.classList.add('genre-outline');
            btnBaiao.classList.remove('genre-outline-active');
            btnBaiao.classList.add('genre-outline');
            btnRap.classList.remove('genre-outline-active');
            btnRap.classList.add('genre-outline');
            btnHipHop.classList.remove('genre-outline-active');
            btnHipHop.classList.add('genre-outline');
            btnRock.classList.remove('genre-outline-active');
            btnRock.classList.add('genre-outline');
            btnReggae.classList.remove('genre-outline-active');
            btnReggae.classList.add('genre-outline');
            btnCountry.classList.remove('genre-outline-active');
            btnCountry.classList.add('genre-outline');
            btnGospel.classList.remove('genre-outline-active');
            btnGospel.classList.add('genre-outline');
        }
        if (event.target.id === 'cat_Baiao'){
            event.target.classList.remove('genre-outline');
            event.target.classList.add('genre-outline-active');
            cleanList();
            showBaiaoAlbuns(products, tagUlCards);
            btnPop.classList.remove('genre-outline-active');
            btnPop.classList.add('genre-outline');
            btnMPB.classList.remove('genre-outline-active');
            btnMPB.classList.add('genre-outline');
            btnForro.classList.remove('genre-outline-active');
            btnForro.classList.add('genre-outline');
            btnSamba.classList.remove('genre-outline-active');
            btnSamba.classList.add('genre-outline');
            btnTodos.classList.remove('genre-outline-active');
            btnTodos.classList.add('genre-outline');
            btnRap.classList.remove('genre-outline-active');
            btnRap.classList.add('genre-outline');
            btnHipHop.classList.remove('genre-outline-active');
            btnHipHop.classList.add('genre-outline');
            btnRock.classList.remove('genre-outline-active');
            btnRock.classList.add('genre-outline');
            btnReggae.classList.remove('genre-outline-active');
            btnReggae.classList.add('genre-outline');
            btnCountry.classList.remove('genre-outline-active');
            btnCountry.classList.add('genre-outline');
            btnGospel.classList.remove('genre-outline-active');
            btnGospel.classList.add('genre-outline');
        }
        if (event.target.id === 'cat_Rap'){
            event.target.classList.remove('genre-outline');
            event.target.classList.add('genre-outline-active');
            cleanList();
            showRapAlbuns(products, tagUlCards);
            btnPop.classList.remove('genre-outline-active');
            btnPop.classList.add('genre-outline');
            btnMPB.classList.remove('genre-outline-active');
            btnMPB.classList.add('genre-outline');
            btnForro.classList.remove('genre-outline-active');
            btnForro.classList.add('genre-outline');
            btnSamba.classList.remove('genre-outline-active');
            btnSamba.classList.add('genre-outline');
            btnBaiao.classList.remove('genre-outline-active');
            btnBaiao.classList.add('genre-outline');
            btnTodos.classList.remove('genre-outline-active');
            btnTodos.classList.add('genre-outline');
            btnHipHop.classList.remove('genre-outline-active');
            btnHipHop.classList.add('genre-outline');
            btnRock.classList.remove('genre-outline-active');
            btnRock.classList.add('genre-outline');
            btnReggae.classList.remove('genre-outline-active');
            btnReggae.classList.add('genre-outline');
            btnCountry.classList.remove('genre-outline-active');
            btnCountry.classList.add('genre-outline');
            btnGospel.classList.remove('genre-outline-active');
            btnGospel.classList.add('genre-outline');
        }
        if (event.target.id === 'cat_Hip-Hop'){
            event.target.classList.remove('genre-outline');
            event.target.classList.add('genre-outline-active');
            cleanList();
            showHipHopAlbuns(products, tagUlCards);
            btnPop.classList.remove('genre-outline-active');
            btnPop.classList.add('genre-outline');
            btnMPB.classList.remove('genre-outline-active');
            btnMPB.classList.add('genre-outline');
            btnForro.classList.remove('genre-outline-active');
            btnForro.classList.add('genre-outline');
            btnSamba.classList.remove('genre-outline-active');
            btnSamba.classList.add('genre-outline');
            btnBaiao.classList.remove('genre-outline-active');
            btnBaiao.classList.add('genre-outline');
            btnRap.classList.remove('genre-outline-active');
            btnRap.classList.add('genre-outline');
            btnTodos.classList.remove('genre-outline-active');
            btnTodos.classList.add('genre-outline');
            btnRock.classList.remove('genre-outline-active');
            btnRock.classList.add('genre-outline');
            btnReggae.classList.remove('genre-outline-active');
            btnReggae.classList.add('genre-outline');
            btnCountry.classList.remove('genre-outline-active');
            btnCountry.classList.add('genre-outline');
            btnGospel.classList.remove('genre-outline-active');
            btnGospel.classList.add('genre-outline');
        }
        if (event.target.id === 'cat_Rock'){
            event.target.classList.remove('genre-outline');
            event.target.classList.add('genre-outline-active');
            cleanList();
            showRockAlbuns(products, tagUlCards);
            btnPop.classList.remove('genre-outline-active');
            btnPop.classList.add('genre-outline');
            btnMPB.classList.remove('genre-outline-active');
            btnMPB.classList.add('genre-outline');
            btnForro.classList.remove('genre-outline-active');
            btnForro.classList.add('genre-outline');
            btnSamba.classList.remove('genre-outline-active');
            btnSamba.classList.add('genre-outline');
            btnBaiao.classList.remove('genre-outline-active');
            btnBaiao.classList.add('genre-outline');
            btnRap.classList.remove('genre-outline-active');
            btnRap.classList.add('genre-outline');
            btnHipHop.classList.remove('genre-outline-active');
            btnHipHop.classList.add('genre-outline');
            btnTodos.classList.remove('genre-outline-active');
            btnTodos.classList.add('genre-outline');
            btnReggae.classList.remove('genre-outline-active');
            btnReggae.classList.add('genre-outline');
            btnCountry.classList.remove('genre-outline-active');
            btnCountry.classList.add('genre-outline');
            btnGospel.classList.remove('genre-outline-active');
            btnGospel.classList.add('genre-outline');
        }
        if (event.target.id === 'cat_Reggae'){
            event.target.classList.remove('genre-outline');
            event.target.classList.add('genre-outline-active');
            cleanList();
            showReggaeAlbuns(products, tagUlCards);
            btnPop.classList.remove('genre-outline-active');
            btnPop.classList.add('genre-outline');
            btnMPB.classList.remove('genre-outline-active');
            btnMPB.classList.add('genre-outline');
            btnForro.classList.remove('genre-outline-active');
            btnForro.classList.add('genre-outline');
            btnSamba.classList.remove('genre-outline-active');
            btnSamba.classList.add('genre-outline');
            btnBaiao.classList.remove('genre-outline-active');
            btnBaiao.classList.add('genre-outline');
            btnRap.classList.remove('genre-outline-active');
            btnRap.classList.add('genre-outline');
            btnHipHop.classList.remove('genre-outline-active');
            btnHipHop.classList.add('genre-outline');
            btnRock.classList.remove('genre-outline-active');
            btnRock.classList.add('genre-outline');
            btnTodos.classList.remove('genre-outline-active');
            btnTodos.classList.add('genre-outline');
            btnCountry.classList.remove('genre-outline-active');
            btnCountry.classList.add('genre-outline');
            btnGospel.classList.remove('genre-outline-active');
            btnGospel.classList.add('genre-outline');
        }
        if (event.target.id === 'cat_Country'){
            event.target.classList.remove('genre-outline');
            event.target.classList.add('genre-outline-active');
            cleanList();
            showCountryAlbuns(products, tagUlCards);
            btnPop.classList.remove('genre-outline-active');
            btnPop.classList.add('genre-outline');
            btnMPB.classList.remove('genre-outline-active');
            btnMPB.classList.add('genre-outline');
            btnForro.classList.remove('genre-outline-active');
            btnForro.classList.add('genre-outline');
            btnSamba.classList.remove('genre-outline-active');
            btnSamba.classList.add('genre-outline');
            btnBaiao.classList.remove('genre-outline-active');
            btnBaiao.classList.add('genre-outline');
            btnRap.classList.remove('genre-outline-active');
            btnRap.classList.add('genre-outline');
            btnHipHop.classList.remove('genre-outline-active');
            btnHipHop.classList.add('genre-outline');
            btnRock.classList.remove('genre-outline-active');
            btnRock.classList.add('genre-outline');
            btnReggae.classList.remove('genre-outline-active');
            btnReggae.classList.add('genre-outline');
            btnTodos.classList.remove('genre-outline-active');
            btnTodos.classList.add('genre-outline');
            btnGospel.classList.remove('genre-outline-active');
            btnGospel.classList.add('genre-outline');
        }
        if (event.target.id === 'cat_Gospel'){
            event.target.classList.remove('genre-outline');
            event.target.classList.add('genre-outline-active');
            cleanList();
            showGospelAlbuns(products, tagUlCards);
            btnPop.classList.remove('genre-outline-active');
            btnPop.classList.add('genre-outline');
            btnMPB.classList.remove('genre-outline-active');
            btnMPB.classList.add('genre-outline');
            btnForro.classList.remove('genre-outline-active');
            btnForro.classList.add('genre-outline');
            btnSamba.classList.remove('genre-outline-active');
            btnSamba.classList.add('genre-outline');
            btnBaiao.classList.remove('genre-outline-active');
            btnBaiao.classList.add('genre-outline');
            btnRap.classList.remove('genre-outline-active');
            btnRap.classList.add('genre-outline');
            btnHipHop.classList.remove('genre-outline-active');
            btnHipHop.classList.add('genre-outline');
            btnRock.classList.remove('genre-outline-active');
            btnRock.classList.add('genre-outline');
            btnReggae.classList.remove('genre-outline-active');
            btnReggae.classList.add('genre-outline');
            btnCountry.classList.remove('genre-outline-active');
            btnCountry.classList.add('genre-outline');
            btnTodos.classList.remove('genre-outline-active');
            btnTodos.classList.add('genre-outline');
        }
    })
})

function showPopAlbuns(array, htmlReference){
    let newArray = array.filter((element) => element.category === 4);
    newArray.forEach((album => {
        let cardToShow = album;
        let cardReady = createCard(cardToShow);
        htmlReference.appendChild(cardReady);
    }));
};

function showMPBAlbuns(array, htmlReference){
    let newArray = array.filter((element) => element.category === 2);
    newArray.forEach((album => {
        let cardToShow = album;
        let cardReady = createCard(cardToShow);
        htmlReference.appendChild(cardReady);
    }));
};

function showForroAlbuns(array, htmlReference){
    let newArray = array.filter((element) => element.category === 5);
    newArray.forEach((album => {
        let cardToShow = album;
        let cardReady = createCard(cardToShow);
        htmlReference.appendChild(cardReady);
    }));
};

function showSambaAlbuns(array, htmlReference){
    let newArray = array.filter((element) => element.category === 6);
    newArray.forEach((album => {
        let cardToShow = album;
        let cardReady = createCard(cardToShow);
        htmlReference.appendChild(cardReady);
    }));
};

function showBaiaoAlbuns(array, htmlReference){
    let newArray = array.filter((element) => element.category === 7);
    newArray.forEach((album => {
        let cardToShow = album;
        let cardReady = createCard(cardToShow);
        htmlReference.appendChild(cardReady);
    }));
};

function showRapAlbuns(array, htmlReference){
    let newArray = array.filter((element) => element.category === 8);
    newArray.forEach((album => {
        let cardToShow = album;
        let cardReady = createCard(cardToShow);
        htmlReference.appendChild(cardReady);
    }));
};

function showHipHopAlbuns(array, htmlReference){
    let newArray = array.filter((element) => element.category === 9);
    newArray.forEach((album => {
        let cardToShow = album;
        let cardReady = createCard(cardToShow);
        htmlReference.appendChild(cardReady);
    }));
};

function showRockAlbuns(array, htmlReference){
    let newArray = array.filter((element) => element.category === 1 || element.category === 3);
    newArray.forEach((album => {
        let cardToShow = album;
        let cardReady = createCard(cardToShow);
        htmlReference.appendChild(cardReady);
    }));
};

function showReggaeAlbuns(array, htmlReference){
    let newArray = array.filter((element) => element.category === 10);
    newArray.forEach((album => {
        let cardToShow = album;
        let cardReady = createCard(cardToShow);
        htmlReference.appendChild(cardReady);
    }));
};

function showCountryAlbuns(array, htmlReference){
    let newArray = array.filter((element) => element.category === 11);
    newArray.forEach((album => {
        let cardToShow = album;
        let cardReady = createCard(cardToShow);
        htmlReference.appendChild(cardReady);
    }));
};

function showGospelAlbuns(array, htmlReference){
    let newArray = array.filter((element) => element.category === 12);
    newArray.forEach((album => {
        let cardToShow = album;
        let cardReady = createCard(cardToShow);
        htmlReference.appendChild(cardReady);
    }));
};
























