import { getAllCategories } from "../../Database/allMethods.js";
// console.log(supabase);

const categoriesSection = document.querySelector(".categories-section");
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const categories = await getAllCategories();
        console.log(categories);
        categoriesSection.innerHTML = ``;
        categories.map(category => {
            categoriesSection.innerHTML += `
                <div class="category-card" data-id="${category.id}">
                    <p id="category_name">${category.name}</p>
                </div>`
        })

        const categoryCards = document.querySelectorAll(".category-card");
        categoryCards.forEach(category => {
            category.addEventListener("click", () => {
                const categoryId = category.getAttribute("data-id");
                window.location.href = `../../HTML/category_pages/categoryDets.html?id=${categoryId}`

            })
        })

    } catch (error) {
        console.error(error)
    }
})