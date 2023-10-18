const allCategoryLoad = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategory(data.data.news_category))
};

const displayCategory = (categories) => {
    // console.log(categories);
    categories.forEach(category => {
        const categoryContainer =document.getElementById('category-container')
        const categoryDiv = document.createElement('div')
        categoryDiv.innerHTML = `
             <a class="text-lg text-gray-600" href="#">${category.category_name}</a>
        `;
        categoryContainer.appendChild(categoryDiv);
    });
}
allCategoryLoad();



const categoryDataLoad = () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategoryData(data.data))
};

const displayCategoryData = (categoriesData) => {
    console.log(categoriesData);
    categoriesData.forEach(singleData => {
        const cardContainer = document.getElementById('card-container');
        const categoryData = document.createElement('div');
        categoryData.innerHTML = `
            <div class="card lg:card-side bg-base-100 shadow-xl mt-12">
                <figure><img src="${singleData.thumbnail_url}" alt="Album"/></figure>
                <div class="card-body">
                <h2 class="card-title">Title : ${singleData.title ? singleData.title : 'N/A'}</h2>
                <p>${singleData.details ? singleData.details :'N/a' }</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Listen</button>
                </div>
                </div>
            </div>
        `;
        cardContainer.appendChild(categoryData); 
    });  
};
categoryDataLoad();