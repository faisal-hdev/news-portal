const allCategoryLoad = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategory(data.data.news_category))
};

const displayCategory = (categories) => {
    categories.forEach(category => { 
        const categoryContainer = document.getElementById('category-container')
        const categoryDiv = document.createElement('div')
        // start spinner loader and dynamically data show in onclick
        categoryDiv.innerHTML = `
            <a onclick="categoryDataLoad('${category?.category_id}'); toggleSpinner(true)" class="text-lg text-gray-600" href="#">${category.category_name}</a>
        `;
        categoryContainer.appendChild(categoryDiv);
    });
};
allCategoryLoad();

const categoryDataLoad = (id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategoryData(data.data))
};

const displayCategoryData = (categoryData) => {
    // Display 10 data only
    categoryData = categoryData.slice(0, 10);
    categoryData.forEach(singleData => {
        const categoryContainer = document.getElementById('card-container')
        const carDiv = document.createElement('div')
        carDiv.innerHTML = `
            <div class="card lg:card-side bg-base-100 shadow-xl mt-16">
                <figure><img class="p-4" src="${singleData.thumbnail_url}" alt="Album"/></figure>
                <div class="card-body ">
                <h2 class="card-title">Title ${singleData.title}</h2>
                <p class='max-w-[850px]'> Details : ${singleData.details ? singleData.details : 'Not found'}</p>
                <div class="card-actions justify-between items-center flex mt-4">
                <div class="flex">
                <img class="mask mask-squircle w-12" src="${singleData.author.img}" />
                <div class="ml-5">
                <p>${singleData.author.name ? singleData.author.name : "N/A"}</p>
                <p>${singleData.author.published_date ? singleData.author.published_date : "N/A"}</p>
                </div>
                </div>
                <div class="ml-5">
                <p>Total Views : ${singleData.total_view ? singleData.total_view : "N/A"}</p>
                </div>
                <div class="ml-5">
                <button class="btn rounded-full" onclick="my_modal_2.showModal();loadCategoryDetails('${singleData._id}')">Show Details</button>
                </div>
                </div>
            </div>
        `;
        categoryContainer.appendChild(carDiv);
    })
    // Stop spinner loader 
    toggleSpinner(false);
    
};

const loadCategoryDetails = (news_id) => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategoryDetails(data?.data[0]));
};

const displayCategoryDetails = (categoryDetailData) => {
    const modalContainer = document.getElementById("my_modal_2");
    modalContainer.innerHTML = `
        <div class="modal-box">
            <h3 class="font-bold inline text-lg">Title : ${categoryDetailData.title ? categoryDetailData.title : 'N/A'}</h3>
            <div class="mt-4">
            <h4 class="mb-2">Category ID : ${categoryDetailData.category_id ? categoryDetailData.category_id : 'N/A'}</h4>
            <h4 class="mb-2">Total Views : ${categoryDetailData.total_view ? categoryDetailData.total_view : 'N/A'}</h4>
            <h4 class="mb-2">Author Name : ${categoryDetailData.author.name ? categoryDetailData.author.name : 'N/A'}</h4>
            <h4 class="mb-2">Author Name : ${categoryDetailData.author.published_date ? categoryDetailData.author.published_date : 'N/A'}</h4>
            </div>
            </div>
            <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    `;

};
loadCategoryDetails();

const toggleSpinner = (isLading) => {
    const spinLoaderEl = document.getElementById('spin-loader');
    if (isLading) {
        spinLoaderEl.classList.remove('hidden')
    } else {
        spinLoaderEl.classList.add('hidden')
    }
}



categoryDataLoad();