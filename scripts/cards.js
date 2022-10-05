function createCard(card){
    let {title} = card;
    let {category} = card;
    let {price} = card;
    let {img} = card;
    let {band} = card;
    let {year} = card;
    let {id} = card;

    const tagLiCard = document.createElement('li');
    tagLiCard.classList.add('card');

    const tagFigureImgCard = document.createElement('figure');
    tagFigureImgCard.classList.add('img-container');

    const tagImgCard = document.createElement('img');
    tagImgCard.classList.add('img-album');
    tagImgCard.setAttribute('src', `${img}`);
    tagImgCard.setAttribute('alt', `${title}`);

    const tagDivAlbumData = document.createElement('div');
    tagDivAlbumData.classList.add('album-data');

    const tagDivBandYear = document.createElement('div');
    tagDivBandYear.classList.add('band-year');

    const tagSpanBand = document.createElement('span');
    tagSpanBand.classList.add('band');
    tagSpanBand.innerText = `${band}`

    const tagSpanYear = document.createElement('span');
    tagSpanYear.classList.add('year');
    tagSpanYear.innerText = `${year}`;

    const tagH2AlbumTitle = document.createElement('h2');
    tagH2AlbumTitle.classList.add('album-title');
    tagH2AlbumTitle.innerText = `${title}`;

    const tagDivPriceBuy = document.createElement('div');
    tagDivPriceBuy.classList.add('price-buy');

    const tagH2Price = document.createElement('h2');
    tagH2Price.classList.add('album-price');
    tagH2Price.innerText = `R$ ${price.toLocaleString('pt-br', {minimumFractionDigits: 2})}`;

    const tagBuyButton = document.createElement('button');
    tagBuyButton.classList.add('buy-button');
    tagBuyButton.innerText = 'Comprar'

    tagDivPriceBuy.append(tagH2Price, tagBuyButton);
    tagDivBandYear.append(tagSpanBand, tagSpanYear);
    tagDivAlbumData.append(tagDivBandYear, tagH2AlbumTitle, tagDivPriceBuy);
    tagFigureImgCard.appendChild(tagImgCard);
    tagLiCard.append(tagFigureImgCard, tagDivAlbumData);

    return tagLiCard;
}