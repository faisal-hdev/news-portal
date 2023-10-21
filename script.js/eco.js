const allCategoryLoad = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategory(data.data.news_category))
};

const displayCategory = (categories) => {
    console.log(categories);
    categories.forEach(category => {
        const categoryContainer =document.getElementById('category-container')
        const categoryDiv = document.createElement('div')
        categoryDiv.innerHTML = `
            <a onclick="clickData('${category.category_id}')" class="text-lg text-gray-600" href="#">${category.category_name}</a>
        `;
        categoryContainer.appendChild(categoryDiv);
    });
}
allCategoryLoad();

const categoryDataLoad = (clkCategory) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${clkCategory}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategoryData(data.data))
};

const displayCategoryData = (categoriesData) => {
    // console.log(categoriesData);
   /*  const xzx = categoriesData[0].details;
    const str = xzx.slice(0, 240) */
    categoriesData.forEach(singleData => {
        const cardContainer = document.getElementById('card-container');
        const categoryData = document.createElement('div');
        categoryData.innerHTML = `
            <div class="card lg:card-side bg-base-100 shadow-lg mt-12">
            <figure><img class="p-6" src="${singleData.thumbnail_url}" alt="Album"/></figure>
            <div class="card-body">
                <h2 class="card-title">Title : ${singleData.title ? singleData.title : 'N/A'}</h2>
            <p class="mb-4 max-w-[800px]">${str ? str : 'N/A'} </p>
                <div class="card-actions flex justify-between items-center">
                    <div class="flex">
                        <img class="mask w-12 mask-squircle" src="${singleData.author.img}" />
                        <div class="ml-5">
                        <p>${singleData.author.name}</p>
                        <p>${singleData.author.published_date}</p>
                        </div>
                    </div>
                    <div>
                    <p>Total Views : ${singleData.rating.number ? singleData.rating.number : 'N/A' }</p>
                    </div>
                    <button class="btn" onclick="displayLoadDetails('${singleData._id}'); my_modal_3.showModal() ">Show all</button>
                </div>
            </div>
            </div>
        `;
        cardContainer.appendChild(categoryData); 
    });
};

const clickData = (categoryId) => {
    const clkCategory = categoryId
    categoryDataLoad()
    console.log(clkCategory);
}

categoryDataLoad();