// 1. fetch, load and show categories on html

// create loadCategories
const loadCategories = () =>{
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then((data) => console.log(data.categories))
    .catch((error) => console.log(error));
}


// create displayCategories
const displayCategories = (categories) =>{
    categories.forEach((item) => {
        console.log(item);
        // create a button

        const button=document.createElement("button");
        button.classList="btn";
        button.innerText=item.categories;
    });
};

loadCategories();
