const allCategoryLoad = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategory(data.data.news_category))
};

const displayCategory = (categories) => {
    console.log(categories);
    categories.forEach(category => {
        const displayData =document.getElementById('display-data')
        const categoryDiv = document.createElement('div')
        categoryDiv.innerHTML = `
             <a class="text-lg text-gray-600" href="#">${category.category_name}</a>
        `;
        displayData.appendChild(categoryDiv)
    });
}

allCategoryLoad();