function createCategory(category){
    let categoryButton = category;

    const tagLiCategoryButton = document.createElement('li');
    tagLiCategoryButton.classList.add('genre-button');

    const tagButtonCategory = document.createElement('button');
    tagButtonCategory.classList = 'genre genre-outline';
    tagButtonCategory.setAttribute('id', `cat_${categoryButton}`);
    tagButtonCategory.innerText = `${categoryButton}`

    tagLiCategoryButton.appendChild(tagButtonCategory);
    return tagLiCategoryButton;
}